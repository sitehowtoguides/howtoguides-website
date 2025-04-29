import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

// Basic password protection (should match the dashboard)
// Reads password from environment variable set in Vercel or .env.local
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'password';

export default function UpdateReviewPage() {
  const router = useRouter();
  const { id } = router.query; // Get update ID from the URL

  const [update, setUpdate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editedText, setEditedText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  // Try to check authentication status from session storage on load
  useEffect(() => {
    const loggedIn = sessionStorage.getItem('adminAuthenticated') === 'true';
    if (loggedIn) {
      setIsAuthenticated(true);
    } else {
      // If not logged in via session, might need to re-prompt or redirect
      // For simplicity, we assume they logged in via the dashboard first
    }
  }, []);

  // Fetch specific update details when authenticated and ID is available
  useEffect(() => {
    if (id && isAuthenticated) {
      setLoading(true);
      fetch(`/api/get-update/${id}`)
        .then(res => {
          if (!res.ok) {
            return res.json().then(err => { throw new Error(err.message || `Failed to fetch update ${id}`) });
          }
          return res.json();
        })
        .then(data => {
          if (!data.update) {
            throw new Error(`Update with ID ${id} not found in API response.`);
          }
          setUpdate(data.update);
          setEditedText(data.update?.aiDraft || ''); // Initialize editor with AI draft
          setError('');
        })
        .catch(err => {
          console.error('Error fetching update details:', err);
          setError(err.message);
          setUpdate(null);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id, isAuthenticated]);

  const handleAction = async (action) => {
    setIsProcessing(true);
    setError('');
    try {
      const res = await fetch('/api/apply-update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
          action: action,
          finalUpdateText: action === 'approve' ? editedText : undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || `Failed to ${action} update`);
      }
      // Redirect back to dashboard after action
      alert(`Update successfully ${action}ed!`); // Give feedback before redirect
      router.push('/admin/updates');
    } catch (err) {
      console.error(`Error ${action}ing update:`, err);
      setError(`Error: ${err.message}`);
      setIsProcessing(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem('adminAuthenticated', 'true'); // Basic session flag
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  // Login Form (if accessed directly without being logged in)
  if (!isAuthenticated) {
    return (
      <div style={{ padding: '20px', maxWidth: '400px', margin: '50px auto', border: '1px solid #ccc', borderRadius: '5px', fontFamily: 'sans-serif' }}>
        <h2>Admin Login</h2>
        <p>Please log in via the <Link href="/admin/updates" style={{ color: '#0070f3' }}>Admin Dashboard</Link> first.</p>
        {/* Optional: Add login form here too if direct access is needed */}
      </div>
    );
  }

  if (loading) {
    return <p style={{ padding: '20px', fontFamily: 'sans-serif' }}>Loading update details...</p>;
  }

  if (error) {
    return <p style={{ padding: '20px', color: 'red', fontFamily: 'sans-serif' }}>Error: {error}</p>;
  }

  if (!update) {
    return <p style={{ padding: '20px', fontFamily: 'sans-serif' }}>Update not found.</p>;
  }

  // Review Page View
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Review Update for Guide: {update.guideId}</h1>
      <Link href="/admin/updates" style={{ color: '#0070f3' }}>Back to Dashboard</Link>

      <div style={{ marginTop: '20px', border: '1px solid #eee', padding: '15px', background: '#f9f9f9', borderRadius: '5px' }}>
        <h2>Source Information (RSS Item)</h2>
        <p><strong>Source Feed:</strong> {update.rssItemDetails?.sourceFeed}</p>
        <p><strong>Title:</strong> <a href={update.rssItemDetails?.link} target="_blank" rel="noopener noreferrer" style={{ color: '#0070f3' }}>{update.rssItemDetails?.title}</a></p>
        <p><strong>Published:</strong> {update.rssItemDetails?.pubDate ? new Date(update.rssItemDetails.pubDate).toLocaleString() : 'N/A'}</p>
        <p><strong>Summary:</strong></p>
        <div style={{ maxHeight: '150px', overflowY: 'auto', border: '1px solid #ddd', padding: '10px', background: 'white', borderRadius: '3px' }}>
          {update.rssItemDetails?.summary || 'No summary available.'}
        </div>
      </div>

      <div style={{ marginTop: '20px', border: '1px solid #eee', padding: '15px', borderRadius: '5px' }}>
        <h2>AI Generated Draft Update</h2>
        <p style={{ color: update.aiAnalysisSuccess ? 'green' : 'red', fontWeight: 'bold' }}>
          AI Analysis Status: {update.aiAnalysisSuccess ? 'Success' : 'Failed'}
        </p>
        <div style={{ border: '1px solid #ddd', padding: '10px', background: '#f0f0f0', minHeight: '80px', borderRadius: '3px' }}>
          {update.aiDraft || 'No draft generated.'}
        </div>
      </div>

      <div style={{ marginTop: '20px', border: '1px solid #eee', padding: '15px', borderRadius: '5px' }}>
        <h2>Edit & Approve Update Note</h2>
        <p>Edit the text below. This will be saved as the 'updateNotes' in guideData.js if approved.</p>
        <textarea
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          style={{ width: '98%', minHeight: '150px', padding: '10px', border: '1px solid #ccc', borderRadius: '3px', fontFamily: 'inherit', fontSize: '1rem' }}
          disabled={isProcessing || update.status !== 'Pending Review'}
        />
      </div>

      {error && <p style={{ color: 'red', marginTop: '10px', fontWeight: 'bold' }}>{error}</p>}

      {update.status === 'Pending Review' ? (
        <div style={{ marginTop: '20px' }}>
          <button 
            onClick={() => handleAction('approve')} 
            disabled={isProcessing}
            style={{ padding: '12px 24px', marginRight: '10px', background: 'green', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer', fontSize: '1rem', opacity: isProcessing ? 0.6 : 1 }}
          >
            {isProcessing ? 'Processing...' : 'Approve'}
          </button>
          <button 
            onClick={() => handleAction('reject')} 
            disabled={isProcessing}
            style={{ padding: '12px 24px', background: 'red', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer', fontSize: '1rem', opacity: isProcessing ? 0.6 : 1 }}
          >
            {isProcessing ? 'Processing...' : 'Reject'}
          </button>
        </div>
      ) : (
        <p style={{ marginTop: '20px', fontWeight: 'bold', color: update.status === 'Approved' ? 'green' : 'red' }}>This update has already been processed (Status: {update.status}).</p>
      )}
    </div>
  );
}
