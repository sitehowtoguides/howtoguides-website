import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Basic password protection (replace with a proper auth solution like NextAuth.js)
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'test123'; // Use environment variable

export default function AdminUpdatesDashboard() {
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [checkingFeeds, setCheckingFeeds] = useState(false);
  const [checkFeedsMessage, setCheckFeedsMessage] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const fetchUpdates = async () => {
    setLoading(true);
    try {
      // In a real app, fetch from an API route that reads the JSON file
      // For simplicity here, we assume direct access or an API route /api/get-updates
      // Let's simulate fetching from an API route
      const res = await fetch('/api/get-updates'); // Need to create this API route
      if (!res.ok) {
        throw new Error('Failed to fetch updates');
      }
      const data = await res.json();
      setUpdates(data.updates || []);
    } catch (error) {
      console.error('Error fetching updates:', error);
      setUpdates([]); // Clear updates on error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchUpdates();
    }
  }, [isAuthenticated]);

  const handleCheckFeeds = async () => {
    setCheckingFeeds(true);
    setCheckFeedsMessage('Checking feeds and analyzing with AI...');
    try {
      const res = await fetch('/api/check-feeds', { method: 'POST' });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Failed to check feeds');
      }
      setCheckFeedsMessage(data.message || 'Feed check complete.');
      // Refresh the list after checking
      fetchUpdates(); 
    } catch (error) {
      console.error('Error checking feeds:', error);
      setCheckFeedsMessage(`Error: ${error.message}`);
    } finally {
      setCheckingFeeds(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{ padding: '20px', maxWidth: '400px', margin: '50px auto', border: '1px solid #ccc', borderRadius: '5px' }}>
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Admin Password"
            style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            required
          />
          <button type="submit" style={{ padding: '10px 20px' }}>Login</button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Admin Dashboard - Pending Updates</h1>
      
      <button onClick={handleCheckFeeds} disabled={checkingFeeds} style={{ marginBottom: '10px', padding: '10px 15px' }}>
        {checkingFeeds ? 'Checking...' : 'Check Feeds Now'}
      </button>
      {checkFeedsMessage && <p style={{ fontStyle: 'italic' }}>{checkFeedsMessage}</p>}

      {loading ? (
        <p>Loading updates...</p>
      ) : updates.length === 0 ? (
        <p>No pending updates found.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #ccc', textAlign: 'left' }}>
              <th style={{ padding: '8px' }}>Guide ID</th>
              <th style={{ padding: '8px' }}>Source</th>
              <th style={{ padding: '8px' }}>RSS Item Title</th>
              <th style={{ padding: '8px' }}>Date Found</th>
              <th style={{ padding: '8px' }}>Status</th>
              <th style={{ padding: '8px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {updates.filter(u => u.status === 'Pending Review').map((update) => (
              <tr key={update.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '8px' }}>{update.guideId}</td>
                <td style={{ padding: '8px' }}>{update.rssItemDetails?.sourceFeed}</td>
                <td style={{ padding: '8px' }}>
                  <a href={update.rssItemDetails?.link} target="_blank" rel="noopener noreferrer">
                    {update.rssItemDetails?.title}
                  </a>
                </td>
                <td style={{ padding: '8px' }}>{new Date(update.creationDate).toLocaleDateString()}</td>
                <td style={{ padding: '8px' }}>{update.status}</td>
                <td style={{ padding: '8px' }}>
                  <Link href={`/admin/updates/${update.id}`}>Review</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {/* Optionally show Approved/Rejected updates here too */}
    </div>
  );
}

