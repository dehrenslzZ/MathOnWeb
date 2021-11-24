import type { GeoLayerParameter, GeoLayerCoordinate } from '$src/typings/geo-layer';
import type { Triangle } from '$src/typings/triangle';
import type { Vector } from '$src/typings/vector';

interface DefaultsProviderInterface {
	getVectorDefault(): Vector;
	getGeoLayerParameterDefault(): GeoLayerParameter;
	getGeoLayerCoordinateDefault(): GeoLayerCoordinate;
	getDefaultTriangle(): Triangle;
}

// Provides some functions to generate default values.
export class DefaultsProvider implements DefaultsProviderInterface {

	/**
	 * Generates a default triangle with values
	 * @returns A default triangle
	 */
	getDefaultTriangle(): Triangle {
		return {kathete1: 0, kathete2: 0, hypothenuse: 0};
	}
	/**
	 * Generates a default layer as coordinate form
	 * with all values with 0 as default.
	 * @returns A default layer
	 */
	getGeoLayerCoordinateDefault(): GeoLayerCoordinate {
		return { x: 0, y: 0, z: 0, result: 0 };
	}

	/**
	 * Generates a default layer with the default vector
	 * method that is implemented by this class.
	 * @returns A default Layer
	 */
	getGeoLayerParameterDefault(): GeoLayerParameter {
		return {
			startVector: this.getVectorDefault(),
			rVector: this.getVectorDefault(),
			sVector: this.getVectorDefault()
		};
	}

	/**
	 * Returns a default vector for all inputs
	 * @returns The generated vector
	 */
	getVectorDefault(): Vector {
		return { x: 0, y: 0, z: 0 };
	}
}
