 const express = require('express');

const mongoose=require('mongoose');
const cookieSession = require('cookie-session');
const passport=require('passport');

 const keys=require('./config/keys');
require('./models/User');
require('./services/passport');


mongoose.connect(keys.mongoURI);

const authRoutes=require('./routes/authRoutes');

const app=express();// first application (all the router handelers will be associated with this app)

app.use(
   cookieSession({
     maxAge: 30*24*60*60*1000,
     keys:[keys.cookieKey]
   })
);

app.use(passport.initialize());
app.use(passport.session());
authRoutes(app);



const PORT= process.env.PORT || 5000; // dynamic binding(port on heroku) or just the default port.

app.listen(PORT); // express is telling node to listen at 5000
