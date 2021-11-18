import type { Vector } from '$src/typings/vector';

/**
 * Calculates the n-vector of a layer with the cross product
 *
 * @param v1 The first vector
 * @param v2 The secound vector
 * @returns The n vector
 */
export function calculateCrossProduct(v1: Vector, v2: Vector): Vector {
	return {
		x: v1.y * v2.z - v1.z * v2.y,
		y: v1.x * v2.z - v1.z * v2.x,
		z: v1.y * v2.x - v1.x * v2.y
	};
}
