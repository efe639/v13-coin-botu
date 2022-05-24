const { Client, Collection, Intents } = require("discord.js");
const client = (global.client = new Client({
	fetchAllMembers: true,
	intents: [
    Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MEMBERS,
		Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
		Intents.FLAGS.GUILD_VOICE_STATES,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILD_MESSAGE_REACTIONS
	]
}));
const settings = require("./src/configs/settings.json");
const { Database } = require("ark.db");
global.confdb = new Database("./src/configs/config.json");
client.commands = new Collection();
client.cooldown = new Map();

require("./src/handlers/commandHandler");
require("./src/handlers/eventHandler");
require("./src/handlers/mongoHandler");
require("./src/handlers/functionHandler")(client);
setInterval(() => {
	client.user.setPresence({ activities: [{ type: "PLAYING", name: "Vegas ❤️" }]})
}, 15000);

	client
	.login("")
	.then(() => console.log("[BOT] Bot connected!"))
	.catch(() => console.log("[BOT] Bot can't connected!"));


client.ranks = [
  { role: "949236997262811137", coin: 501 },
  { role: "949236996839190528", coin: 506 },
  { role: "949236996113592350", coin: 514 },
  ]

