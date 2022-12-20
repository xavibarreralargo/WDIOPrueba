const args = process.argv.slice(2).map(x => x.toLowerCase());
const disabled_Newsletter = false;
const promotionPresent = true;

function takeArg(options) {
	return options.find((option) => args.includes(option)) || options[0];
}

function androidVersionCheck() {
	if (args.includes("mobile")){
		const androidArg = args.find((arg) => arg.startsWith("android="));
		if ((typeof androidArg) !== "undefined") {
			return androidArg.split("=")[1];
		}
	}
	return null;
}

function getFrom() {
	const fromArg = args.find((arg) => arg.startsWith("from="));
	if ((typeof fromArg) !== "undefined") {
		return fromArg.split("=")[1];
	}
	return "es";
}

module.exports = {
	/*disabled_Newsletter,
	promotionPresent,*/
	platform: takeArg(["desktop", "mobile"]),
	browser: takeArg(["chrome", "firefox"]),
	//docker: args.includes("docker"),
	headless: args.includes("headless"),
	from: getFrom(),
	instances: 1,
};
