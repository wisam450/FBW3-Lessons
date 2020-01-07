const express = require('express');
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017"

const app = express();
app.listen(3006,()=>{
    console.log('Server started on port 3006');    
});
app.get('/',(req,res)=>{
    res.send('<h3> Mongo Example homepage </h3>')
});

// GETTING THE DATA FROM OUR DATABASE
app.get('/all',(req,res)=>{
    MongoClient.connect(url, (err,db) => {
        if (err) throw err ;
        let myDatabase = db.db('online-shop');
        myDatabase.collection('articles').find({}).toArray((err , result)=>{
            if(err) throw err;
           res.send(result); 
           db.close();    


        })
    } )
});

// Create a new collection for our database : online-shop

app.get('/add', (req,res)=> {
    MongoClient.connect(url , (err , db )=>{
     if (err) throw err;
     let myDb = db.db('online-shop');
     myDb.createCollection('users' , (err, res)=> {
         if(err) throw err ;
         console.log('collection users created');
         db.close();    

     })
    })
    res.send('<h2>collection created </h2>');

});

// insert users to the databse online-shop (collection users)
app.get('/add-users',(req,res)=>{

    MongoClient.connect(url , (err , db)=> {

        if (err) throw err ;
        let myDb = db.db('online-shop');
        myDb.collection('users')
        .insertMany( [{ name : "Waleska" , email: "waleska@gmail.com", phone : 01577777777  },{ name : "Romal" , email: "Romal@gmail.com", phone : 0157555555  } ] ,(err , res)=>{
            if(err) throw err ;
            console.log(' one user inserted ') ;
            db.close();

        }  )

    })
    res.send('<h2> new user inserted </h2>');
})