const db = require('./db/connection'); 
const Show = require('./models/Show');
const User = require('./models/User');
const app = require("./src/app")
const port = 3000;


// Define routes or middleware here...

console.log(User.associations);
console.log(Show.associations);


app.listen(port, async () => {
  try {
    await db.sync(); 
    console.log(`Database synced successfully!`);
    console.log(`Listening at http://localhost:${port}`);
  } catch (error) {
    console.error('Error syncing the database:', error);
  }
});
