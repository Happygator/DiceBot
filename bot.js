const Discord = require('discord.js');
const client = new Discord.Client();
var roll1,roll2,roll3
client.on('ready', () => {
  console.log('I am ready!');
});


client.on('message', message => {
  if (message.content === '!help') {
    message.reply("Use !DX where X is 4, 6, 8, 10, 12, 20, or 100 to roll that sided die.")

  if (message.content === '!D4') {
    message.reply('You roll ' + String(Math.floor(Math.random() * 4) + 1)
  }
  if (message.content === '!D6') {
    message.reply('You roll ' + String(Math.floor(Math.random() * 6) + 1)
  }
  if (message.content === '!D8') {
    message.reply('You roll ' + String(Math.floor(Math.random() * 8) + 1)
  }
  if (message.content === '!D10') {
    message.reply('You roll ' + String(Math.floor(Math.random() * 10) + 1)
  }
  if (message.content === '!D12') {
    message.reply('You roll ' + String(Math.floor(Math.random() * 12) + 1)
  }
  if (message.content === '!D20') {
    message.reply('You roll ' + String(Math.floor(Math.random() * 20) + 1)
  }
  if (message.content === '!D100') {
    message.reply('You roll ' + String(Math.floor(Math.random() * 100) + 1)
  }
  }
  
});

client.login(process.env.BOT_TOKEN);
