export function calcTotalPrice(pricePerTon, quantityTons) {
    const total = Number(pricePerTon) * Number(quantityTons);
    return total;
}
