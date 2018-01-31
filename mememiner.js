//MEME MINER for a DISCORD BOT named meme_coin_banker
//WARNING- This is a self-bot and discord is strict against self bots.
//Your account might get suspended.
//So I DO NOT STAND RESPONSIBLE FOR ANY DAMAGE THAT HAPPENS TO YOUR ACCOUNT.

//save this file in an empty folder, open command prompt in the folder location, type `npm install discord.js`

const Discord = require("discord.js");
const client = new Discord.Client();

var miner, robot, swarm, fracker;
var m, r, s, f;



client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", message => {
  if (message.channel.id === "CHANNEL ID") {
    if(message.author !== client.user) return;
    if (message.content.startsWith("startmining")) {
      console.log("started mining!")
      message.channel.send("!prestige YESIMSURE")
      message.channel.send("!units")
      setInterval(function(){
        message.channel.send("!mine");
        message.channel.send("!collect");
        if(f<fracker){
          message.channel.send("!buy max fracker");
        } else {console.log("Frackers done!")}
        if(s<swarm){
          message.channel.send("!buy max swarm");
        } else {console.log("Swarms done!")}
        if(r<robot){
          message.channel.send("!buy max robot");
        } else{console.log("Robots done!")}
  //      if(m!=miner){
  //        message.channel.send("!buy max miner");
  //      } else{}
        message.channel.send("!units")
        if (r>=robot && s>=swarm && f>=fracker){
          message.channel.send("!buy max miner")
          message.channel.send("!prestige YESIMSURE")
          m = r = s = f = 0
        } else {}
      }, 61100);
    }
  }
});

client.on("message", message => {
  if (message.channel.id === "CHANNEL ID") {
    if(message.author.username === "meme_coin_banker"){
      if(message.content.includes("You have been reset!")){
        console.log("PRESTIGED")
        message.channel.send("!prestige YESIMSURE");
      }
    }
  }
});

client.on("message", message => {
  if (message.channel.id === "CHANNEL ID") {
    if (message.author.username==="meme_coin_banker") {
      if(message.content.includes("do not have enough")){
        if(!message.content.includes("is prestige level")){
          var reqs = message.content.split("\n");
          console.log(reqs)
          var counts = reqs.length;
          for (i = 0; i < counts; i++) { 
            temp = reqs[i].split(" enough ").pop().split(" to Prestige, you need ");
            if (temp[0]==="miners"){
              miner = Number(temp[1].split(" ")[0])
            } else if (temp[0]==="robots"){
              robot = Number(temp[1].split(" ")[0])
            } else if (temp[0]==="swarms"){
              swarm = Number(temp[1].split(" ")[0])
            } else if (temp[0]==="frackers"){
              fracker = Number(temp[1].split(" ")[0])
            }
          }
        }
      }
    }
  }
});

client.on("message", message => {
  if (message.channel.id === "CHANNEL ID") {
    if (message.author.username==="meme_coin_banker") {
      var u = message.content
      if (u.includes("total memes per minute")){
        var v = u.split("\n")[0].split(" \r").slice(0,4)
        var z = [];
        for (i = 0; i < 4; i++) { 
          z.push(v[i].replace(/`/g, "").replace(/,/g, ""))      
        }
        console.log(z)
        for (i=0; i < 4; i++) {
          var unts = z[i].split(" ")
          if (unts[1]=="miner(s)"){
            m = Number(unts[0])
          } else if (unts[1]=="robot(s)"){
            r = Number(unts[0])
          } else if (unts[1]=="swarm(s)"){
            s = Number(unts[0])
          } else if (unts[1]=="fracker(s)"){
            f = Number(unts[0])
          }
        }
      console.log("Miners ", m, "of required ", miner)
      console.log("Robots ", r, "of required ", robot)
      console.log("Swarms ", s, "of required ", swarm)
      console.log("Frackers ", f, "of required ", fracker)     
      }
    }
  }
});

client.login("CLIENT TOKEN");
//CTRL+Shift+I -> Applications -> Local storage -> discordapp.com -> Token
