import type { Benulli } from "$src/typings/benulli";
import { calculateNCr } from "./ncr-calculator";

/**
 * Calculates the result of a binomial benulli chain.
 * 
 * @param chain The benulli chain that should be calculated
 * @returns The result of the calculation
 */
export function calculateBenulliChain(chain: Benulli): number {
    return calculateNCr({n: chain.n, k: chain.k}) * chain.p**chain.k * (1-chain.p)**(chain.n-chain.k);
}