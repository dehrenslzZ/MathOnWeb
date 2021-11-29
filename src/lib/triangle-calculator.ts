import type { ErrorMessage } from '$src/typings/error';
import type { Triangle } from '$src/typings/triangle';

/**
 * Solves a triangle
 *
 * @param triangle The initial triangle
 * @returns The calculated triangle
 */
function solveTriangle(triangle: Triangle): [Triangle, ErrorMessage] {
	let initialTriangle = Object.assign({}, triangle);
	for (let i=0; i<20; i++) {
		if (checkCompleted(initialTriangle)) {
			return [initialTriangle, {errorOccurred: false}];
		}
		initialTriangle = solveKathHypo(initialTriangle);
		initialTriangle = solveWithBeta(initialTriangle);
		initialTriangle = solveWithGamma(initialTriangle);
	}
	return [triangle, {errorOccurred: true, code: 500, message: 'Reached max iterations count'}];
}


/**
 * Solves all the kathethes and the hypothenuse of
 * the triangle.
 * 
 * @param triangle The initial triangle
 * @returns The calculated triangle
 */
function solveKathHypo(triangle: Triangle): Triangle {
	if (triangle.kathete1 === null || triangle.kathete1 === 0) {
		triangle.kathete1 = Math.sqrt(triangle.hypothenuse ** 2 - triangle.kathete2 ** 2);
	}
	if (triangle.kathete2 === null || triangle.kathete2 === 0) {
		triangle.kathete2 = Math.sqrt(triangle.hypothenuse ** 2 - triangle.kathete1 ** 2);
	}
	if (triangle.hypothenuse === null || triangle.hypothenuse === 0) {
		triangle.hypothenuse = Math.sqrt(triangle.kathete1 ** 2 + triangle.kathete2 ** 2);
	}
	return triangle;
}

/**
 * Performs all three math operations on triangle and tries
 * to solve all values that are needed for beta-angle.
 * 
 * @param triangle The initial triangle
 * @returns The modified triangle
 */
function solveWithBeta(triangle: Triangle): Triangle {
	triangle = solveBetaWithSin(triangle);
	triangle = solveBetaWithCos(triangle);
	triangle = solveBetaWithTan(triangle);
	return triangle;
}

/**
 * Checks if the beta angle is calculateable with the sinus function
 * and performs all the calculations in the triangle.
 * 
 * @param triangle The initial triangle
 * @returns The calculated triangle
 */
function solveBetaWithSin(triangle: Triangle): Triangle {
	if (triangle.kathete1 !== 0 && triangle.kathete1 !== null && triangle.hypothenuse !== 0 && triangle.hypothenuse !== null) {
		triangle.beta = Math.sin(triangle.kathete1 / triangle.hypothenuse);
		return triangle;
	}
	if (triangle.beta !== null && triangle.beta !== 0 && triangle.hypothenuse !== 0 && triangle.hypothenuse !== null) {
		triangle.kathete1 = Math.sin(triangle.beta) * triangle.hypothenuse;
		return triangle;
	}
	if (triangle.beta !== null && triangle.beta !== 0 && triangle.kathete1 !== 0 && triangle.kathete1 !== null) {
		triangle.hypothenuse = triangle.kathete1 / Math.sin(triangle.beta);
		return triangle;
	}
	return triangle;
}

/**
 * Checks if the beta angle is calculateable with the cosinus function
 * and performs all the calculations in the triangle.
 * 
 * @param triangle The initial triangle
 * @returns The calculated triangle
 */
 function solveBetaWithCos(triangle: Triangle): Triangle {
	if (triangle.kathete2 !== 0 && triangle.kathete2 !== null && triangle.hypothenuse !== 0 && triangle.hypothenuse !== null) {
		triangle.beta = Math.cos(triangle.kathete2 / triangle.hypothenuse);
		return triangle;
	}
	if (triangle.beta !== null && triangle.beta !== 0 && triangle.hypothenuse !== 0 && triangle.hypothenuse !== null) {
		triangle.kathete2 = Math.cos(triangle.beta) * triangle.hypothenuse;
		return triangle;
	}
	if (triangle.beta !== null && triangle.beta !== 0 && triangle.kathete2 !== 0 && triangle.kathete2 !== null) {
		triangle.hypothenuse = triangle.kathete2 / Math.cos(triangle.beta);
		return triangle;
	}
	return triangle;
}

/**
 * Checks if the beta angle is calculateable with the tangens function
 * and performs all the calculations in the triangle.
 * 
 * @param triangle The initial triangle
 * @returns The calculated triangle
 */
 function solveBetaWithTan(triangle: Triangle): Triangle {
	if (triangle.kathete1 !== 0 && triangle.kathete1 !== null && triangle.kathete2 !== 0 && triangle.kathete2 !== null) {
		triangle.beta = Math.tan(triangle.kathete1 / triangle.kathete2);
		return triangle;
	}
	if (triangle.beta !== null && triangle.beta !== 0 && triangle.kathete2 !== 0 && triangle.kathete2 !== null) {
		triangle.kathete1 = Math.tan(triangle.beta) * triangle.kathete2;
		return triangle;
	}
	if (triangle.beta !== null && triangle.beta !== 0 && triangle.kathete1 !== 0 && triangle.kathete1 !== null) {
		triangle.kathete2 = triangle.kathete1 / Math.tan(triangle.beta);
		return triangle;
	}
	return triangle;
}

/**
 * Performs all three math operations on triangle and tries
 * to solve all values that are needed for gamma-angle.
 * 
 * @param triangle The initial triangle
 * @returns The modified triangle
 */
 function solveWithGamma(triangle: Triangle): Triangle {
	triangle = solveGammaWithSin(triangle);
	triangle = solveGammaWithCos(triangle);
	triangle = solveGammaWithTan(triangle);
	return triangle;
}

/**
 * Checks if the beta angle is calculateable with the sinus function
 * and performs all the calculations in the triangle.
 * 
 * @param triangle The initial triangle
 * @returns The calculated triangle
 */
function solveGammaWithSin(triangle: Triangle): Triangle {
	if (triangle.kathete2 !== 0 && triangle.kathete2 !== null && triangle.hypothenuse !== 0 && triangle.hypothenuse !== null) {
		triangle.gamma = Math.sin(triangle.kathete2 / triangle.hypothenuse);
		return triangle;
	}
	if (triangle.gamma !== null && triangle.gamma !== 0 && triangle.hypothenuse !== 0 && triangle.hypothenuse !== null) {
		triangle.kathete2 = Math.sin(triangle.gamma) * triangle.hypothenuse;
		return triangle;
	}
	if (triangle.gamma !== null && triangle.gamma !== 0 && triangle.kathete2 !== 0 && triangle.kathete2 !== null) {
		triangle.hypothenuse = triangle.kathete2 / Math.sin(triangle.gamma);
		return triangle;
	}
	return triangle;
}

/**
 * Checks if the beta angle is calculateable with the cosinus function
 * and performs all the calculations in the triangle.
 * 
 * @param triangle The initial triangle
 * @returns The calculated triangle
 */
 function solveGammaWithCos(triangle: Triangle): Triangle {
	if (triangle.kathete1 !== 0 && triangle.kathete1 !== null && triangle.hypothenuse !== 0 && triangle.hypothenuse !== null) {
		triangle.gamma = Math.cos(triangle.kathete1 / triangle.hypothenuse);
		return triangle;
	}
	if (triangle.gamma !== null && triangle.gamma !== 0 && triangle.hypothenuse !== 0 && triangle.hypothenuse !== null) {
		triangle.kathete1 = Math.cos(triangle.gamma) * triangle.hypothenuse;
		return triangle;
	}
	if (triangle.gamma !== null && triangle.gamma !== 0 && triangle.kathete1 !== 0 && triangle.kathete1 !== null) {
		triangle.hypothenuse = triangle.kathete1 / Math.cos(triangle.gamma);
		return triangle;
	}
	return triangle;
}

/**
 * Checks if the beta angle is calculateable with the tangens function
 * and performs all the calculations in the triangle.
 * 
 * @param triangle The initial triangle
 * @returns The calculated triangle
 */
 function solveGammaWithTan(triangle: Triangle): Triangle {
	if (triangle.kathete1 !== 0 && triangle.kathete1 !== null && triangle.kathete2 !== 0 && triangle.kathete2 !== null) {
		triangle.gamma = Math.tan(triangle.kathete2 / triangle.kathete1);
		return triangle;
	}
	if (triangle.gamma !== null && triangle.gamma !== 0 && triangle.kathete1 !== 0 && triangle.kathete1 !== null) {
		triangle.kathete2 = Math.tan(triangle.gamma) * triangle.kathete1;
		return triangle;
	}
	if (triangle.gamma !== null && triangle.gamma !== 0 && triangle.kathete2 !== 0 && triangle.kathete2 !== null) {
		triangle.kathete1 = triangle.kathete2 / Math.tan(triangle.gamma);
		return triangle;
	}
	return triangle;
}

/**
 * Checks if the triangle is completely filled with values.
 * 
 * @param triangle The initial triangle
 * @returns If the triangle is fully completed
 */
function checkCompleted(triangle: Triangle): boolean {
	for (const k in triangle) {
		if (triangle[k] === null || triangle[k] === 0) {
			return false;
		}
	}
	return true;
}

export default solveTriangle;
