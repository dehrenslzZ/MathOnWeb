import type { ErrorMessage } from "$src/typings/error";
import { roundTo } from "./custom-math";

const SOLVER_MAX_ITERATIONS = 100000;

type VarResType = {
    variable: number;
    result: number;
};

/**
 * Solves a mathematic function.
 * 
 * @param func The initial math function
 * @param wanted The wanted result of the function
 * @returns The result of the solving action
 */
function solveFunction(func: string,  wanted: number): [number, ErrorMessage] {
    const variable_lettter = getVariable(func);
    if (variable_lettter === null) {
        return [0, {errorOccurred: true, message: 'The function does not contain a valid variable'}];
    }
    let startVariableValue = 0;
    const variableResult = new Array<VarResType>();
    let iterationCount = 0;
    while (iterationCount < SOLVER_MAX_ITERATIONS) {
        const result = calculate(func, startVariableValue, variable_lettter);
        if (roundTo(result, 5) === roundTo(wanted, 5)) {
            return [startVariableValue, {errorOccurred: false}];
        }
        variableResult.push({variable: startVariableValue, result: result});
        startVariableValue = calculateNextVariable(variableResult, wanted);
        iterationCount++;
    }
    return [0, {errorOccurred: true, message: 'Reached max iterations count'}];
}

/**
 * Calculates the next possible variable by the last performed
 * attempts that were executed.
 * 
 * @param mapping The variable result mapping of the performed attempts
 * @param wanted The result that is wanted by the function
 * @returns The prediction of a new variable that could be matching
 */
function calculateNextVariable(mapping: Array<VarResType>, wanted: number): number {
    let lastValues: Array<VarResType> = [];
    if (mapping.length > 2) {
        lastValues = mapping.slice(mapping.length - 3, mapping.length - 1);
    } else {
        return mapping[mapping.length - 1].variable + 1;
    }
    if (lastValues[1].variable === lastValues[0].variable) {
        return lastValues[1].variable + 1;
    }
    const isGettingCloser = (wanted - lastValues[1].result) < (wanted - lastValues[0].result);
    const step = lastValues[1].variable - lastValues[0].variable;
    if (isGettingCloser) {
        return lastValues[1].variable + 1;
    } else {
        return lastValues[1].variable * ((step * 0.99) * -1);
    }
}

/**
 * Fetches the variable char from the function
 * string and returns it.
 * 
 * @param func The initial function
 * @returns The char that stands as a variable
 */
function getVariable(func: string): string|null {
    const vars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    for (const i in vars) {
        if (func.indexOf(vars[i]) > -1) {
            return vars[i];
        }
    }
    return null;
}

/**
 * parses a variable into a function and calculates
 * the coresponding result.
 * 
 * @param func the math function in raw format
 * @param variable The given variable as number
 * @param variable_letter The letter that identifies the variable
 * @returns The result of the eval calculation
 */
function calculate(func: string, variable: number, variable_letter: string): number {
    return eval(func.replaceAll(variable_letter, '' + variable));
}

export default solveFunction;