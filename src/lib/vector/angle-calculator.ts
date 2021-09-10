import type {Vector} from "../../typings/vector";
import {roundTo} from "$lib/custom-math";

/**
    * 
    * @param a The firdt vector
    * @param b The first vector
    * @returns number: It returns the scalar product
    * 
    * This method calculates the scalar product of two vectors
    */
function calculateScalarProduct(a: Vector, b: Vector): number {
    return a.x * b.x + a.y * b.y + a.z * b.z;
}

/**
    * 
    * @param a The first vector
    * @param b The second vector
    * 
    * This method calculates the sum of the vector-products of
    * the two given vectors.
    */
function calculateSumOfVectors(a: Vector, b: Vector): number {
    return Math.sqrt(a.x**2 + a.y**2 + a.z**2) * Math.sqrt(b.x**2 + b.y**2 + b.z**2);
}

function calculateAngleFromVectors(a: Vector, b: Vector): number {
    return roundTo(Math.acos(calculateScalarProduct(a, b) / calculateSumOfVectors(a, b)) * (180 / Math.PI), 2);
}

export {calculateScalarProduct, calculateSumOfVectors, calculateAngleFromVectors};