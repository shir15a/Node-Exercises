const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'first-test'

MongoClient.connect(connectionURL, {
    useNewUrlParser: true, useUnifiedTopology: true
}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }
    console.log("Connected correctly");


    const db = client.db(databaseName)

    db.collection('restaurant').find().count().then((r)=> console.log(r))
    // db.collection('restaurant').updateOne({name:"asian delight"}, {$inc:{"reviews.0.score":-1}})
})













// db.collection('restaurant').find().count().then((r)=> console.log(r))
// db.collection('restaurant').updateOne({name:"asian delight"}, {$inc:{"reviews.0.score":-1}})

// db.collection('restaurant').updateOne({name:"asian delight"}, {$inc:{"reviews[0].score":2}}).toArray((error, result)=>{
//     console.log(result);
// });