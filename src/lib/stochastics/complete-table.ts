import type { ErrorMessage } from "$src/typings/error";
import type { FourFieldTableValues } from "$src/typings/four-field-table";

/**
 * Tries to complete the table. If the number of tries is over 20,
 * an error will be returned and the returned table is the edited table, 
 * as long it was possible for the algorithm.
 * 
 * @param table The initial table given by the input
 * @returns The completed table and the error message if there is one
 */
export function CompleteTable(table: FourFieldTableValues): [FourFieldTableValues, ErrorMessage] {
    let internalCounter = 0;
    table = NumberizeTable(table);
    while (internalCounter < 20) {
        for (let i=1; i<=6; i++) {
            table = solveRowOrColumn(table, i);
        }
        if (checkAllFieldFilled(table) && checkTableIsValid(table)) {
            return [table, {errorOccurred: false}];
        }
        internalCounter += 1;
    }
    return [table, {errorOccurred: true, message: 'Passed max calculations count', code: 500}];
}

/**
 * Calculates the row/column with the given index. It checks if the
 * row/column is editable and if it is, the missing field will be
 * calculated from the other ones.
 * 
 * @param table The initial tables that the calculations should be executed on.
 * @param index Indicates which row/column should be calculated (1-6)
 * @returns The table after the calculations got performed on it
 */
function solveRowOrColumn(table: FourFieldTableValues, index: number): FourFieldTableValues {
    switch (index) {
        case 1:
            if (checkCalculatable([table.AB, table.aB, table.B_ALL])) {
                if (table.AB === null) {
                    table.AB = table.B_ALL - table.aB;
                } else if (table.aB === null) {
                    table.aB = table.B_ALL - table.AB;
                } else if (table.B_ALL) {
                    table.B_ALL = table.AB + table.aB;
                }
            }
            break;
        case 2:
            if (checkCalculatable([table.BA, table.ab, table.b_ALL])) {
                if (table.BA === null) {
                    table.BA = table.b_ALL - table.ab;
                } else if (table.ab === null) {
                    table.ab = table.b_ALL - table.BA;
                } else if (table.b_ALL) {
                    table.b_ALL = table.BA + table.ab;
                }
            }
            break;
        case 3:
            if (checkCalculatable([table.AB, table.BA, table.A_ALL])) {
                if (table.AB === null) {
                    table.AB = table.A_ALL - table.BA;
                } else if (table.BA === null) {
                    table.BA = table.A_ALL - table.AB;
                } else if (table.A_ALL) {
                    table.A_ALL = table.BA + table.AB;
                }
            }
            break;    
        case 4:
            if (checkCalculatable([table.aB, table.ab, table.a_ALL])) {
                if (table.aB === null) {
                    table.aB = table.a_ALL - table.ab;
                } else if (table.ab === null) {
                    table.ab = table.a_ALL - table.aB;
                } else if (table.A_ALL) {
                    table.a_ALL = table.aB + table.ab;
                }
            }
            break;
        case 5:
            if (checkCalculatable([table.B_ALL, table.b_ALL, table.ALL])) {
                if (table.B_ALL === null) {
                    table.B_ALL = table.ALL - table.b_ALL;
                } else if (table.b_ALL === null) {
                    table.b_ALL = table.ALL - table.B_ALL;
                } else if (table.ALL) {
                    table.ALL = table.B_ALL + table.b_ALL;
                }
            }
            break;
        case 6:
            if (checkCalculatable([table.A_ALL, table.a_ALL, table.ALL])) {
                if (table.A_ALL === null) {
                    table.A_ALL = table.ALL - table.a_ALL;
                } else if (table.a_ALL === null) {
                    table.a_ALL = table.ALL - table.A_ALL;
                } else if (table.ALL) {
                    table.ALL = table.A_ALL + table.a_ALL;
                }
            }
            break;            
                    
    }
    return table;
} 

/**
 * Checks if there are at least 2 values given, because
 * that is the minumun required number of values. 
 * 
 * @param values The given values of the row/column 
 * @returns If there are enough values given to calculate the row/column
 */
function checkCalculatable(values: number[]): boolean {
    let empty = 0;
    values.forEach((value: number) => {
        if (value === null) {
            empty += 1;
        }
    });
    return empty <= 1;

}

/**
 * Checks if the whole table is filled with values.
 * NOTE: Does not check if the values are making sense.
 * 
 * @param table The four field table that contains all the values.
 * @returns if the table is completely filled or not.
 */
function checkAllFieldFilled(table: FourFieldTableValues): boolean {
    return table.AB !== null && table.ALL !== null&& table.A_ALL !== null
        && table.BA !== null && table.B_ALL !== null && table.aB !== null
        && table.a_ALL !== null && table.ab !== null && table.b_ALL !== null;
}

/**
 * Checks if all values in the table are valid.
 * 
 * @param table The table that the checks should be performed on
 * @returns If all the values of the table are valid
 */
function checkTableIsValid(table: FourFieldTableValues): boolean {
    return (table.AB + table.aB) === table.B_ALL
        && (table.BA + table.ab) === table.b_ALL
        && (table.AB + table.BA) === table.A_ALL
        && (table.aB + table.ab) === table.a_ALL
        && (table.A_ALL + table.a_ALL) === table.ALL
        && (table.B_ALL + table.b_ALL) === table.ALL
}

function NumberizeTable(table: FourFieldTableValues): FourFieldTableValues {
    table.AB = +table.AB;
    table.ALL = +table.ALL;
    table.A_ALL = +table.A_ALL;
    table.BA = +table.BA;
    table.B_ALL = +table.B_ALL;
    table.aB = +table.aB;
    table.a_ALL = +table.a_ALL;
    table.ab = +table.ab;
    table.b_ALL = +table.b_ALL;
    return table;
}