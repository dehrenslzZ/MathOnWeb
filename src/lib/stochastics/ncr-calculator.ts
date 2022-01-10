import { faculty } from '$lib/custom-math';
import type { NCR } from '$src/typings/ncr';

/**
 * Calculates an nCr of a input.
 *
 * @param ncr Instance of the ncr value
 * @returns number The nCr value of the calculation
 */
export function calculateNCr(ncr: NCR): number {
	const top = faculty(ncr.n);
	const bottom = faculty(ncr.k) * faculty(ncr.n - ncr.k);
	return top / bottom;
}
