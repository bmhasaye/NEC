const { MongoClient } = require('mongodb');

// MongoDB connection URI and database name
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
const dbName = "yourDatabase";  // Replace with your database name
const collectionName = "users"; // Replace with your collection name

async function storeFormData(formData) {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    
    // Example form data (replace with actual form data)
    const document = {
      name: formData.name,             // Student ID
      mobile:formData.name,        //Mobile 
      email: formData.email,           // Email
      password: formData.password      // PRN No.
      // confirm password not stored
    };
    
    // Insert data into collection
    const result = await collection.insertOne(document);
    console.log(`Data inserted with _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}

// Example usage with form data
const formData = {
  name: "Bhavika Sanjay Mhasaye ",
  mobile :"9579821808",          
  email: "bhavikamhasaye936@gmail.com",
  password: "bH@vika11"

  name: "Dimple Shrikrushn Dawande",
  mobile :"7720813275",          
  email: "sgawande@gmail.com",
  password: "sayli11"

  name: "Saurabh Sanjay Mhasaye",
  mobile :"9356877651",          
  email: "patimhasaye@gmail.com",
  password: "saurabh21"
  
  };

storeFormData(formData).catch(console.dir);
