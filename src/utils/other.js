export const getStockStatus = quantity => {
  let stockStatus = {
    variant: 'success',
    text: 'In Stock'
  };
  if (quantity < 1) stockStatus = {
    variant: 'danger',
    text: 'Out of Stock'
  };else if (quantity < 11) stockStatus = {
    variant: 'primary',
    text: 'Limited'
  };
  return stockStatus;
};
export const getRatingVariant = rating => {
  let ratingVariant = 'success';
  if (rating > 2 && rating < 4) ratingVariant = 'warning';else if (rating < 2) ratingVariant = 'danger';
  return ratingVariant;
};
export const formatFileSize = (bytes, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};