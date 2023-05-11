import { isSameDay } from 'date-fns';
import { isValidDate } from "./date";

export function checkObjectEquality<T>(a: T, b: T): boolean {
    const aProps = a !== null ? Object.entries(a) : [];
    const bProps = b !== null ? Object.entries(b) : [];

    if (aProps.length !== bProps.length) {
        return false;
    }

    let isEqual = true;

    aProps.find(([aKey, aValue]) => {
        const bItem = bProps.find(([bKey]) => aKey === bKey);

        if (bItem === undefined) {
            return (isEqual = false);
        }

        const [, bValue] = bItem;

        if (!checkEquality(aValue, bValue)) {
            isEqual = false;
        }
    });

    return isEqual;
}

export function checkEquality(a: any, b: any): boolean {
    if (typeof a !== typeof b) {
        return false;
    } else if (typeof a === 'number' && typeof b === 'number') {
        return a === b;
    } else if (isValidDate(a) || isValidDate(b)) {
        if (!a || !b) {
            return false;
        }

        if (!isValidDate(a) || !isValidDate(b)) {
            return false;
        }

        if (
            typeof a !== 'number' &&
            typeof b !== 'number' &&
            isValidDate(a) &&
            isValidDate(b) &&
            !isSameDay(new Date(a), new Date(b))
        ) {
            return false;
        }
    } else if (typeof a === 'string' || typeof b === 'string') {
        return a === b;
    } else if (typeof a === 'object' && typeof b === 'object') {
        if (!checkObjectEquality(a, b)) {
            return false;
        }
    } else if (a !== b) {
        return false;
    }

    return true;
}