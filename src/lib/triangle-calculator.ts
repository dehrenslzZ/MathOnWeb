import type { Triangle } from "$src/typings/triangle";

/**
 * Solves a triangle
 * 
 * @param triangle The initial triangle
 * @returns The calculated triangle
 */
function solveTriangle(triangle: Triangle): Triangle {
    if (checkAllNull(triangle) || !checkCalculateable(triangle)) {
        return triangle;
    }
    if (triangle.kathete1 === null || triangle.kathete1 === 0) {
        triangle.kathete1 = Math.sqrt((triangle.hypothenuse**2) - (triangle.kathete2**2));
    }
    if (triangle.kathete2 === null || triangle.kathete2 === 0) {
        triangle.kathete2 = Math.sqrt((triangle.hypothenuse**2) - (triangle.kathete1**2));
    }
    if (triangle.hypothenuse === null || triangle.hypothenuse === 0) {
        triangle.hypothenuse = Math.sqrt((triangle.kathete1**2) + (triangle.kathete2**2));
    }
}

/**
 * Checks if all fields are either null or zero
 * 
 * @param triangle The initial triangle
 * @returns If all fields are null or zero
 */
function checkAllNull(triangle: Triangle): boolean {
    return (triangle.kathete1 === null || triangle.kathete1 === 0)
        && (triangle.kathete2 === null || triangle.kathete2 === 0)
        && (triangle.hypothenuse === null || triangle.hypothenuse === 0);
}

/**
 * Checks if there are enough values given to calculate
 * the triangle.
 * 
 * @param triangle The initial triangle
 * @returns If the triangle is calculatable
 */
function checkCalculateable(triangle: Triangle): boolean {

    if (triangle.kathete1 === null || triangle.kathete1 === 0) {
        return triangle.hypothenuse !== null && triangle.hypothenuse !== 0
            && triangle.kathete2 !== null && triangle.kathete2 !== 0;
    }
    if (triangle.kathete2 === null || triangle.kathete2 === 0) {
        return triangle.hypothenuse !== null && triangle.hypothenuse !== 0
            && triangle.kathete1 !== null && triangle.kathete1 !== 0;
    }
    if (triangle.hypothenuse === null || triangle.hypothenuse === 0) {
        return triangle.kathete1 !== null && triangle.kathete1 !== 0
            && triangle.kathete2 !== null && triangle.kathete2 !== 0;
    }
    return false;
}

export default solveTriangle;