import { Client } from 'discord.js';

const botToken = 'YOUR_DISCORD_BOT_TOKEN';
const client = new Client();

client.once('ready', () => {
    console.log(`Logged in as ${client.user?.tag}!`);
});

client.login(botToken);