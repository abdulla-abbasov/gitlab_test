const express = require('express');  

// Create an Express application  
const app = express();  
const port = 3000;  

// Define a route that returns a JSON object  
app.get('/api/sample', (req, res) => {  

// Define your sample JSON object  
const jsonObject = {  
message: 'This is a sample JSON object',  
data: {  
name: 'Aditya Patel',  
age: 30,  
email: 'aditya.patel@example.com'  
} }; 
 
// Send the JSON object as response  
res.json(jsonObject);  
});  

// Start the server  
app.listen(port, () => { 
 console.log(`Server is listening at http://localhost:${port}`);  
});