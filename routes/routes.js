const express = require("express");
const router = express.Router();
const validation = require("../validation/validation");
const sessions = require('express-session');

router.use(
    sessions({
        secret: 'thisismysecretkey',
        saveUninitialized: true,
        resave: false,
    })
);

let session;

router.get("/",(req,res)=>{
    session = req.session;
    res.render('index', {
        pagename: "Home",
        sess: session
    });
});

router.get("/about",(req,res)=>{
    session = req.session;
    res.render('about', {
        pagename: "About",
        sess: session
    });
});

router.get("/register",(req,res)=>{
    session = req.session;
    res.render('register', {
        pagename: "Registration",
        sess: session
    });
});

router.post("/register",(req,res)=>{
    errors = validation(req.body)
    session = req.session;
    res.render('register', {
        pagename: 'Registration',
        errors: errors,
        sess: session
      });
});

router.get("/contact",(req,res)=>{
    session = req.session;
    res.render('contact', {
        pagename: "Contact",
        sess: session
    });
});

router.get("/post",(req,res)=>{
    session = req.session;
    res.render('post', {
        pagename: "Post",
        sess: session
    });
});

router.get("/signin",(req,res)=>{
    res.render('signin', {
        pagename: 'Sign In',
    });
});

router.post('/login', (req, res) => {
    console.log(req.session)
    if (req.body.email == "Mike@aol.com" && req.body.password == "abc123") {
        session = req.session;
        session.userid = "Bob";
        session.loggedin = true;
        res.render('index', {
            pagename: 'Home',
            sess: session,
        });
    }
    else {
        session.loggedin = false;
        res.render('signin', {
            pagename: 'Sign In',
            error: 'Invalid Credentials'
        });
    }
});

router.get('/logout', (req, res) => {
    req.session.destroy(null);
    console.log(req.session);
    res.render('index', {
        pagename: 'Home'
    });
});

module.exports = router;