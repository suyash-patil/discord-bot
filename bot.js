//Now we need to install few dependencies. so open the terminal and follow me.
//Nodemon is installed to continously render without requiring npm start command again and again.
//Now go to package.json and config the scripts.
//Now we will write the code for bot.js
require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch'); //To fetch the Joke API

client.on("ready", msg => {
    console.log("Our bot is ready to rock");
})

client.on("message", msg=> {
    if(msg.content === "ping") {
        msg.reply("Pong"); //msg.reply will reply to the user 
        msg.channel.send("Pong") //msg.channel.send will send only a message from the bot
        //lets see if that works
    }
})
//We can also customizeour bot to react to a message with an emoji
client.on("message",msg => {
    if(msg.content === "India") {
        msg.react("🇮🇳"); // The bot should react with Indian flag lets see
    }
})
client.on("message",msg => {
    if(msg.content === "love") {
        msg.react("❤"); // The bot should react heart lets see
    }
})

//Now we will implement a joke API so that bot can respond with a joke
client.on("message",async msg => {
    if(msg.content === "joke") {
        let getJoke = async () => {
            let res = await fetch("https://official-joke-api.appspot.com/random_joke")
            let json = await res.json()
            return json
        }
        let joke = await getJoke()
        msg.reply(`Here is the joke
        ${joke.setup}
        ${joke.punchline}
        `) //lets see if that works
        //lets commit our code to push it
    }
})


client.login(process.env.TOKEN)