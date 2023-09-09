import { Telegraf } from 'telegraf';
import { Application, Router } from '@cfworker/web';
import createTelegrafMiddleware from 'cfworker-middleware-telegraf';

// @ts-ignore
const bot = new Telegraf(self.BOT_TOKEN);

bot.start((ctx) => {
	console.log('I DID START');
	return ctx.reply('Welcome');
});

bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
// Your code here, but do not `bot.launch()`
// Do not forget to set environment variables BOT_TOKEN and SECRET_PATH on your worker

const router = new Router();
// @ts-ignore
router.post(`/${self.SECRET_PATH}`, createTelegrafMiddleware(bot));
new Application().use(router.middleware).listen();
