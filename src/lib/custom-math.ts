
/**
 * 
 * @param val the initial number
 * @param decimals the number of decimals after the komma
 * @returns the rounded value
 * 
 * This method rounds thhe given number to the fixed number of decimals
 */
function roundTo(val: number, decimals: number): number {
    const multiplicator = Math.pow(10, decimals);
    val = +parseFloat('' + (val * multiplicator)).toFixed(11);
    const pre = (Math.round(val) / multiplicator);
    return +(pre.toFixed(decimals));
}


export {roundTo};