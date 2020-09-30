const express = require('express');
const app = express();
const PORT = 3000;

const mongoose = require('mongoose')
const router = require('./routes')

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(router);

mongoose.connect('mongodb://localhost/user_post', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running at port : ${PORT}`);
        })
        console.log("Has connected to Mongo DB")

    })
    .catch(err => {
        console.log("Message : ", err)
    })

// mongoose.connection.once('open', function() {
//     console.log("Has connected to Mongo DB")
// }).on('error',function(err){console.log(err)})


