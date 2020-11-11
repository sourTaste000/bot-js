const Discord = require("discord.js");
const fs = require("graceful-fs");
const ytdl = require("ytdl-core-discord"),
    ytpl = require("ytpl"),
    ytsearch = require("yt-search"),
    { Util } = require("discord.js");

module.exports.run = async (client, message, args) => {
  config = client.config;  
  const voiceChannel = message.member.voice.channel;
  if (!message.member.roles.cache.find(role => config["dj_role"] === role.name)) return message.channel.send("You do not have permissions to use music.");
  if (!message.member.voice.channel) return message.channel.send("You are not in a voice channel.")


    const serverQueue = client.queue.get(message.guild.id)
    if (!serverQueue) return message.channel.send("`❌` I am not currently playing music.")
    serverQueue.playing = true
    serverQueue.connection.dispatcher.resume()
    return message.channel.send("`▶` Music Resumed!")
} 



module.exports.config = {
  name: "resume",
  aliases: [],
  use: "resume",
  description: "Resume paused music!",
  state : "gamma",
  page: 5
};




