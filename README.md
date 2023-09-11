# Telegraf Cloudflare Telegram Bot Boilerplate

## Workflow

1. [Register on Cloudflare](https://www.cloudflare.com/)
2. [Register Telegram Bot](https://t.me/BotFather)
3. Clone the repo
4. Create `.dev.vars` using `.dev.vars.example`
5. Set compatibility date in `wrangler.toml`
6. Run ([wrangler](https://github.com/cloudflare/workers-sdk/tree/main/packages/wrangler) installation):
	```
	npm run setup
	```
7. Run to tell the bot to use the correct cloudflare worker
	```
	npm run set-webhook
	```
8. Start development with
	```
	npm run start
	```
9. ...do something awesome...
10. **(OPTIONAL)** run ```npm run set-webhook``` if you've changed `BOT_DOMAIN` in `.dev.vars`
11. Deploy with:
	```
	npm run deploy
	```
