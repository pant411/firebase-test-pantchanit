// import expressjs
const express = require("express");

// import cors
const cors = require("cors");

// import firebase 
const admin = require("firebase-admin");
const serviceAccount = require("./clever-math-dev-v2-firebase-adminsdk-bl3fv-ca5c332ea2.json");

// initial firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://clever-math-dev-v2.firebaseio.com",
});

const db = admin.firestore();

// initial express
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
const PORT =  process.env.PORT || 8080;

// TEST API
app.get('/', async (req, res) => {
  res.send("Hello World!!!");
});

// READ schools from firestore
app.get('/api/schools', async (_, res) => {
  try{
    const schoolsColl = db.collection('schools');
    const listSchools = await schoolsColl.get();
    let responseSchools = [];
    listSchools.forEach(ele => {
      responseSchools.push(ele.data());
    });
    res.send(responseSchools);
  } catch (err) {
    res.send(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}.`);
})
