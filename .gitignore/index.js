const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready"), function() {
    bot.user.setGame("Aypierre Bot, !help");
    console.log("Le Bot a Bien éte connecte");
});

bot.login("MzkyNDA0OTM0ODIzNTEwMDE3.DRmviw.lx8qKTT2h_ZnfN-8TDQRDJkBn_M");
