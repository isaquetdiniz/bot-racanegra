const Discord = require('discord.js');
const pagodinho = require('./Controllers/pagodinho');
const client = new Discord.Client();

require('dotenv/config');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const commandPrefix = '/';

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong!');
  }
  if(msg.content === `${commandPrefix}pagodinho`){
      const teste = pagodinho();
      msg.reply(`Escuta essa daqui, é boa demais! ${teste}`);
  }
});

client.login(process.env.TOKEN);