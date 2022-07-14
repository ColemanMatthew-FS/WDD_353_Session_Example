const express = require("express");
const router = express.Router();
const validation = require("../validation/validation");

router.get("/",(req,res)=>{
    res.render('index', {
        pagename: "Home",
    });
});

router.get("/about",(req,res)=>{
    res.render('about', {
        pagename: "About",
    });
});

router.get("/register",(req,res)=>{
    res.render('register', {
        pagename: "Registration",
    });
});

router.post("/register",(req,res)=>{
    errors = validation(req.body)
    res.render('register', {
        pagename: 'Registration',
        errors: errors
      });
});

router.get("/contact",(req,res)=>{
    res.render('contact', {
        pagename: "Contact",
    });
});

router.get("/post",(req,res)=>{
    res.render('post', {
        pagename: "Post",
    });
});

module.exports = router;