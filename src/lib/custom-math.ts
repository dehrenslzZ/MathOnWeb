function roundTo(val: number, decimals: number): number {
    const multiplicator = Math.pow(10, decimals);
    val = +parseFloat('' + (val * multiplicator)).toFixed(11);
    const pre = (Math.round(val) / multiplicator);
    return +(pre.toFixed(decimals));
}


export {roundTo};