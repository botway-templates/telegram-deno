import { Bot } from "https://deno.land/x/grammy/mod.ts";
import { getToken } from "https://deno.land/x/denobot/mod.ts";

// Create bot object
const bot = new Bot(getToken());

console.log("Starting Bot, this might take a while...");

// Listen for messages
bot.command("start", (ctx) => ctx.reply("Welcome! Send me a photo!"));
bot.on("message:text", (ctx) => ctx.reply("That is text and not a photo!"));
bot.on("message:photo", (ctx) => ctx.reply("Nice photo! Is that you?"));
bot.on("edited_message", (ctx) =>
  ctx.reply("Ha! Gotcha! You just edited this!", {
    reply_to_message_id: ctx.editedMessage.message_id,
  })
);

// Launch!
bot.start();
