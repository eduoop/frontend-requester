export const FilterBrToDolar = (num: string) => {
    num = num.replace('.', '');
    num = num.replace(',', '.');
    return parseFloat(num)
}