export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    console.log('Login attempt:', { email, password });

    // You can add logic to verify credentials here

    res.status(200).json({ success: true, message: 'Login successful (mock response)' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
