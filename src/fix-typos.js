// eslint-disable-next-line @typescript-eslint/no-var-requires
import * as fs from "fs";

try {
	const data = fs.readFileSync("./build/index.html", "utf8");
	let newData = data
		.replace("/favicon.png", "favicon.png")
		.replace("<head>\n", "<head><base href='./'>\n")

	const oldstr = "/./";
	const newstr = "./";
	const preloadOld = "rel=\"modulepreload\" ";
	const preloadNew = "rel=\"modulepreload\"type=\"text/html\"";
	const stylesheetOld = "rel=\"stylesheet\" ";
	const stylesheetNew = "rel=\"stylesheet\"type=\"text/css\"";

	while (newData.indexOf(oldstr) > -1) {
		newData = newData.replace(oldstr, newstr);
	}
	while (newData.indexOf(preloadOld) > -1) {
		newData = newData.replace(preloadOld, preloadNew);
	}
	while (newData.indexOf(stylesheetOld) > -1) {
		newData = newData.replace(stylesheetOld, stylesheetNew);
	}

	fs.writeFileSync("./build/index.html", newData);
} catch (e) {
	console.error(e);
}

