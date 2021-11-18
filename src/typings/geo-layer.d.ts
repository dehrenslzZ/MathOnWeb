import type { Vector } from "./vector";

export interface GeoLayerParameter {
    startVector: Vector;
    rVector: Vector;
    sVector: Vector;
}
export interface GeoLayerCoordinate {
    x: number;
    y: number;
    z: number;
    result: number;
}