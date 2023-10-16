export const formatPrice = (price: number) => {
	if (typeof price === 'undefined') return;
	return new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN' }).format(price/100);
}