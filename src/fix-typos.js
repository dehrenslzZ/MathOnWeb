// eslint-disable-next-line @typescript-eslint/no-var-requires
import * as fs from "fs";

try {
	const data = fs.readFileSync("./build/index.html", "utf8");
	let newData = data
		.replace("/favicon.png", "favicon.png");

	const oldstr = "/./";
	const newstr = "./";

	while (newData.indexOf(oldstr) > -1) {
		newData = newData.replace(oldstr, newstr);
	}

	fs.writeFileSync("./build/index.html", newData);
} catch (e) {
	console.error(e);
}

