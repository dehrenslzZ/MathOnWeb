/**
 * This method rounds thhe given number to the fixed number of decimals
 *
 * @param val the initial number
 * @param decimals the number of decimals after the komma
 * @returns the rounded value
 */
function roundTo(val: number, decimals: number): number {
	const multiplicator = Math.pow(10, decimals);
	val = +parseFloat('' + val * multiplicator).toFixed(11);
	const pre = Math.round(val) / multiplicator;
	return +pre.toFixed(decimals);
}

/**
 * Calculates the faculty of the given number and
 * returns it.
 * 
 * @param num The´number that faculty should be calculated
 * @returns The faculty value of the given number
 */
function faculty(num: number): number {
	let cache = 1;
	let run = 1;
	while (run <= num) {
		cache = cache * run;
		run++;
	}
	return cache;
}

export { roundTo, faculty };
