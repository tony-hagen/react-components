export const isStringNullOrWhiteSpace = (value: string): boolean => {
    return value === null || /^\s*$/.test(value);
};

export const capitalizeFirstLetter = (value: string) => {
    const splitWords = value
        .replace(/([A-Z])/g, ' $1')
        .trim()
        .toLowerCase();
    const firstLetterUpperCase = splitWords.charAt(0).toUpperCase() + splitWords.slice(1);

    return firstLetterUpperCase;
};

export const joinStringsWithAnd = (items: string[]): string => {
    if (!items.length) {
        return '';
    }
    return items.reduce(
        (text, value, i, array) => text + (i < array.length - 1 ? ', ' : ' and ') + value
    );
};