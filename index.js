// =============== Port ===============
const express = require('express');
const prefix = "!";
const app = express();
const port = 4000;
const discordTTS = require('discord-tts');
app.get('/', (req, res) => res.send('Bot Is Working Well!'));

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);
// =============== Bot ===============

const Discord = require('discord.js-self');
const user = new Discord.Client();

user.on("ready", () => {


    const activities = [
        { name: 'AmirEdwin ;)', type: 'STREAMING', url: "https://www.twitch.tv/amirsatan07" },
        { name: 'AmirEdwin ;)', type: 'LISTENING' }
      ];

setInterval(function(){
        setTimeout(function(){
            user.user.setStatus('online')
        }, 500);
        setTimeout(function(){
            user.user.setStatus('dnd')
        }, 1000);
        setTimeout(function(){
            user.user.setStatus('idle')
        }, 1500);
    }, 2000) 

      let activity = 1;
      
      setInterval(() => {
        activities[2] = { name: `AmirEdwin ;)`, type: 'WATCHING' }; 
        activities[3] = { name: `AmirEdwin ;)`, type: 'WATCHING' }; 
        activities[4] = { name: 'AmirEdwin ;)' , type: 'PLAYING'}
        if (activity > 4) activity = 0;
        user.user.setActivity(activities[activity]);
        activity++;
      }, 10000);

      
      console.log(`RUN SHOD `);
})

// ==============================================

user.login("توکن بزار عزیزم");