# Telegraf Cloudflare Telegram Bot Boilerplate

## Workflow

1. [Register on Cloudflare](https://www.cloudflare.com/)
2. [Register Telegram Bot](https://t.me/BotFather)
3. Clone the repo
4. Create `.dev.vars` using `.dev.vars.example`
5. Run ([wrangler](https://github.com/cloudflare/workers-sdk/tree/main/packages/wrangler) installation):
	```
	npm run setup
	```
6. Run to tell the bot to use the correct cloudflare worker
	```
	npm run set-webhook
	```
7. Start development with
	```
	npm run start
	```
8. ...do something awesome...
9. **(OPTIONAL)** run ```npm run set-webhook``` if you've changed `BOT_DOMAIN` in `.dev.vars`
10. Deploy with:
	```
	npm run deploy
	```
