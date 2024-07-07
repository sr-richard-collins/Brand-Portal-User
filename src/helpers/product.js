export const getDiscountAmount = product => {
  return product.sale?.type == 'amount' ? product.sale.discount : product.sale?.type == 'percent' ? product.price / 100 * product.sale.discount : 0;
};
export const getCalculatedPrice = product => {
  return getPreciseCurrency(product.price - getDiscountAmount(product));
};
export const getPreciseCurrency = price => {
  return parseFloat(price.toFixed(2));
};