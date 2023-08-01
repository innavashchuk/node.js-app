// Import the required modules
const http = require('http');

// Create a basic HTTP server
const server = http.createServer((req, res) => {
  // Set the content type to plain text
  res.setHeader('Content-Type', 'text/plain');
  
  // Send the "Hello, World!" response
  res.end('Hello, World!\n');
});

// Define the port on which the server will listen
const port = 3000;

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});