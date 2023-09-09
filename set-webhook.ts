import dotenv from 'dotenv';
import { Telegraf } from 'telegraf';

dotenv.config({
	path: './.dev.vars',
});

const bot = new Telegraf(process.env.BOT_TOKEN as string);

(async () => {
	// set webhook
	await bot.telegram.setWebhook(`${process.env.BOT_DOMAIN}/${process.env.SECRET_PATH}`, {});

	// get webhook info
	await bot.telegram.getWebhookInfo().then(console.log);
})();
