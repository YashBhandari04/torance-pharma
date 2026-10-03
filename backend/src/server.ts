import app from './app.js';

const PORT = process.env.PORT || 5000;

// Start Server on 0.0.0.0 to accept local & network connections
app.listen(Number(PORT), '0.0.0.0', () => {
  console.log(`[Server] Torance Life Science REST API server running on port ${PORT} (Listening on 0.0.0.0 for LAN/Mobile access)`);
  console.log(`[Server] Health Check: http://localhost:${PORT}/api/health`);
});
