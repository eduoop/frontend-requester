export const FilterDolarToBr = (value: number) => {
    if (JSON.stringify(value).includes(",")) {
        const newValue = JSON.stringify(value).replace(",", ".")
        console.log(newValue)
        return Number(newValue).toLocaleString('pt-br', { minimumFractionDigits: 2 });
    } else {
        return value.toLocaleString('pt-br', { minimumFractionDigits: 2 });
    }

}