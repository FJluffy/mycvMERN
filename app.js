const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// const sendGrid = require('@sendGrid/mail');
const app = express();
app.use(bodyParser.json());
app.use(cors());

//connct to mongoDB
const uri = 'mongodb+srv://jay:cisco1234@cluster0.5mgnd.mongodb.net/test?authSource=admin&replicaSet=atlas-10p9x1-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

const emailRouter = require('./routes/email')

app.use('/email', emailRouter)
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*'); // Change later to only allow our server
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });



////use sendGrid to send email form req.body.email to my gmail, but it hard to achieve due to secutity issue.
// app.post('/api/email', (req, res, next) => {

//     console.log(req.body);

//     sendGrid.setApiKey('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');
//     const msg = {
//         to: 'jaydenchen0000@gmail.com',
//         from: req.body.email,
//         subject: req.body.name,
//         text: req.body.message
//     }

//     sendGrid.send(msg)
//         .then(result => {

//             res.status(200).json({
//                 success: true
//             });

//         })
//         .catch(err => {

//             console.log('error: ', err);
//             res.status(401).json({
//                 success: false
//             });

//         });
// });

const port = process.env.PORT || 3030

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});