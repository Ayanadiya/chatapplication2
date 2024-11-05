const express = require('express');
const fs= require('fs');

const router = express.Router();

router.get('/login',(req,res,next) =>{
    res.send(`
        <form action="/" method="post" onsubmit="localStorage.setItem('username',document.getElementById('username'))">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username">
        <button type="submit">Login</button>
        </form>
        
        `)
})

router.get('/',(req,res,next)=>{
    fs.readFile('username.txt',(err, data) => {
        if(err)
        {
            console.log(err);
            data='No chat exists'
        }
        res.send(`
            ${data}
            <form action='/' method='post'>
            <input type="text" name="message">
            <input type="hidden" name=username>
            <button type="submit">Send</button>
            </form>
            `)
    })
   
});

router.post('/',(req,res,next)=>{
    fs.writeFile('username.txt',`${req.body.username}:${req.body.message}`, {flag:'a'}, (err) =>{
        console.log(err)
    });
    res.redirect('/');
})

module.exports=router;
