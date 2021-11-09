const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');



var serviceAccount = require("./ecom-website-d5971-firebase-adminsdk-9gciw-9da3cc9705.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();


let staticPath = path.join(__dirname, "public");

const app = express();

app.use(express.static(staticPath));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
})

app.get('/signup', (req, res) => {
    res.sendFile(path.join(staticPath, "signup.html"));
})

app.get('/FAQ', (req, res) => {
    res.sendFile(path.join(staticPath, "FAQ.html"));
})

app.get('/clothes', (req, res) => {
    res.sendFile(path.join(staticPath, "clothes.html"));
})

app.get('/clothes', (req, res) => {
    res.sendFile(path.join(staticPath, "clothes.html"));
})

app.get('/product', (req, res) => {
    res.sendFile(path.join(staticPath, "product.html"));
})

app.post('/signup', (req, res) => {
    let { username, email, password, tac} = req.body;

    //form validations
    if(username.length < 3){
        return res.json({'alert': 'username must be 3 letters long'});
    } else if(!email.length){
        return res.json({'alert': 'enter your email'});
    } else if(password.length < 8){
        return res.json({'alert': 'password should be 8 letters long'});
    }else if(!tac){
        return res.json({'alert': 'you must agree to our terms and conditions'});
    }

    db.collection('users').doc(email).get()
    .then(user => {
        if(user.exists){
            return res.json({'alert': 'email already exists'});
        } else{
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, (err, hash) => {
                    req.body.password = hash;
                    db.collection('users').doc(email).set(req.body)
                    .then(data => {
                        res.json({
                            username: req.body.username,
                            email: req.body.email,
                            seller: req.body.seller,
                        })
                    })
                })
            })
        }
        
    })
    
})

//login route
app.get('/login', (req, res) =>{
    res.sendFile(path.join(staticPath, "login.html"));
})

app.post('/login', (req, res) =>{
    let { email, password } = req.body;

    if(!email.length || !password.length){
        return res.json({'alert' : 'Fill All The Inputs'})
    }

    db.collection('users').doc(email).get()
    .then(user => {
        if(!user.exists){
            return res.json({'alert': 'Log In Email Does Not Exists'})
        } else{
            bcrypt.compare(password, user.data().password, (err, result) =>{
                if(result){
                    let data = user.data();
                    return res.json({
                        username: data.username,
                        email: data.email,
                        seller: data.seller,
                    })
                } else{
                    return res.json({'alert': 'password in incorrect'});
                }
            })
        }
    })
})



app.listen(5500, () => {
    console.log('listening 5500');
})