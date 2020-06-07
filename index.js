 const express = require('express');
const app=express();// first application (all the router handelers will be associated with this app)

app.get('/',(req,res)=> {     // route handler
  res.send({hi:'there'});     // json data
});

const PORT= process.env.PORT || 5000; // dynamic binding(port on heroku) or just the default port.

app.listen(PORT); // express is telling node to listen at 5000
 
