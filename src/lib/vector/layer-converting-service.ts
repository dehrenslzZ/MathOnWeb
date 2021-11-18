import type { GeoLayerCoordinate, GeoLayerParameter } from "$src/typings/geo-layer";
import type { Vector } from "$src/typings/vector";
import { calculateScalarProduct } from "./angle-calculator";
import { calculateCrossProduct } from "./cross-product";

interface LayerConvertingServiceInterface {
    convertToCoordinate(layer: GeoLayerParameter): GeoLayerCoordinate;
    convertToParameter(layer: GeoLayerCoordinate): GeoLayerParameter;
}

export class LayerConvertingService implements LayerConvertingServiceInterface {

    /**
     * Calculates the coordinate form of a layer by
     * the parameter form of the same layer.
     * 
     * @param layer The layer in parameter form
     * @returns The layer in coordinate form
     */
    convertToCoordinate(layer: GeoLayerParameter): GeoLayerCoordinate {
        const nVector = calculateCrossProduct(layer.rVector, layer.sVector);
        const result = calculateScalarProduct(nVector, layer.startVector);
        return {
            x: nVector.x,
            y: nVector.y,
            z: nVector.z,
            result: result,
        };
    }

    /**
     * Converts the coordinate form of a layer to its
     * parameter form.
     * 
     * @param layer The layer in coordinate form
     * @returns The layer in parameter form
     */
    convertToParameter(layer: GeoLayerCoordinate): GeoLayerParameter {
        const vecs = this.getLayerVectors(layer);
        return {
            startVector: vecs[0],
            rVector: vecs[1],
            sVector: vecs[2],
        };
    }

    /**
     * Calculates three vectors that are in the layer
     * 
     * @param layer The given layer in coordinate form
     * @returns The three vectors used to create the parameter form
     */
    private getLayerVectors(layer: GeoLayerCoordinate): Vector[] {
        return [
            {x: layer.result / layer.x, y: 0, z: 0},
            {x: 0, y: layer.result / layer.y, z: 0},
            {x: 0, y: 0, z: layer.result / layer.z},
        ];
    }
    
}