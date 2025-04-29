// pages/api/admin-login.js
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { password } = req.body;
  // Read the password from environment variables (this works server-side!)
  const correctPassword = process.env.ADMIN_PASSWORD;

  if (!correctPassword) {
      console.error("ADMIN_PASSWORD environment variable is not set on the server.");
      // Don't reveal the actual issue to the client for security
      return res.status(500).json({ success: false, message: 'Server configuration error.' });
  }

  if (password === correctPassword) {
    // Password is correct
    console.log("Admin login successful via API.");
    res.status(200).json({ success: true });
  } else {
    // Password is incorrect
    console.log("Admin login failed via API: Incorrect password.");
    res.status(401).json({ success: false, message: 'Incorrect password' });
  }
}
