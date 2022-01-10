export interface FourFieldTableValues {
	/**
	 * The combination of A and B
	 */
	AB: number;
	/**
	 * The combination of a and B
	 */
	aB: number;
	/**
	 * The combination of B and A
	 */
	BA: number;
	/**
	 * The combination of a and b
	 */
	ab: number;
	/**
	 * The sum of all A values
	 */
	A_ALL: number;
	/**
	 * The sum of all a values
	 */
	a_ALL: number;
	/**
	 * The sum of all B values
	 */
	B_ALL: number;
	/**
	 * The sum of all b values
	 */
	b_ALL: number;
	/**
	 * The complete result of the 4 field table.
	 */
	ALL: number;
}
