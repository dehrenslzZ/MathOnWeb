import type { Vector } from './vector';

export interface GeoLayerParameter {
	/**
	 * The starting vector of the layer
	 */
	startVector: Vector;
	/**
	 * The r vector of the layer
	 */
	rVector: Vector;
	/**
	 * The s vector of the layer
	 */
	sVector: Vector;
}
export interface GeoLayerCoordinate {
	/**
	 * The x value of the layer
	 */
	x: number;
	/**
	 * The y value of the layer
	 */
	y: number;
	/**
	 * The z value of the layer
	 */
	z: number;
	/**
	 * The result of the equation.
	 */
	result: number;
}
