import {format, isValid, isBefore} from 'date-fns';

export type FormatDateOptions = {
    dateFormat?: string;
    fallback?: string;
};

export function formatDateToString(
    date: Date | string | null | undefined,
    options?: FormatDateOptions
): string {
    const fallbackString = options?.fallback || '';
    if (!date) {
        return fallbackString;
    } else {
        try {
            const string = format(new Date(date), options?.dateFormat || 'dd/MM/yyyy');
            return string;
        } catch {
            return fallbackString;
        }
    }
}

export function sortByDate(
    dateA: string | Date | undefined,
    dateB: string | Date | undefined
): number {
    if (dateA === undefined || dateB === undefined) {
        return -1;
    }
    return isBefore(new Date(dateA), new Date(dateB)) ? 1 : -1;
}

export function isValidDate(date: string | Date | null | undefined | number): boolean {
    if (!date || typeof date === 'number') {
        return false;
    }

    if (typeof date === 'string') {
        const timestamp = Date.parse(date);

        if (isNaN(timestamp) === false) {
            return true;
        }
        return false;
    }

    return isValid(date);
}