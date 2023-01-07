const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'63310e4d-a8ce-4708-8b08-d757bc7f825a'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
