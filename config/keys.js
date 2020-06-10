
// keys.js -figure out what set of credentials to return

// mongodb+srv://yash:<password>@emaily-3cxik.mongodb.net/<dbname>?retryWrites=true&w=majority

 if(process.env.NODE_ENV === 'production')
 {
   // we are in production -return the prod set of keys

   module.exports = require('./prod');   

 }else {
   // we are in development-return the dev keys
  module.exports = require('./dev');

 }
