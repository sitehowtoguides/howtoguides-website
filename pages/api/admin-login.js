// pages/api/admin-login.js (Temporary Simple Version)
export default function handler(req, res) {
  if (req.method === 'POST') {
    // Just acknowledge the POST request successfully
    console.log("Simplified admin-login API received POST request.");
    res.status(200).json({ success: true, message: "POST received" });
  } else {
    // Reject other methods
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
