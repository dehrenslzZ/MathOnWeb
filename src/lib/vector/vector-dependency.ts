import type { Vector } from 'src/typings/vector';

/**
 *
 * @param a The first vector
 * @param b The secound vector
 *
 * This method generates an single vector from two vectors.
 * The generated vector is being returned by the function.
 */
function generateVectorDependency(a: Vector, b: Vector): Vector {
	return {
		x: -a.x + b.x,
		y: -a.y + b.y,
		z: -a.z + b.z
	} as Vector;
}

/**
 *
 * @param a The first vector
 * @param b The secound vector
 *
 * This method checks, if two vectors are linear depenedent.
 * It returns this state as a boolean value.
 */
function checkLinearDependency(a: Vector, b: Vector): boolean {
	const CV_1 = a.x / b.x;
	const CV_2 = a.y / b.y;
	const CV_3 = a.z / b.z;
	return CV_1 == CV_2 && CV_2 == CV_3;
}

export { generateVectorDependency, checkLinearDependency };
