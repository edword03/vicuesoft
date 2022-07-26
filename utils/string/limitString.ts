export const limitString = (string: string): string =>
	string.length <= 143 ? string : string.slice(0, 143) + '...';
