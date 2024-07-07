export const getFileExtensionIcon = fileName => {
  const extension = fileName.split('.').pop();
  if (extension === 'fig') return 'bxl:figma';else if (extension === 'docs') return 'iconamoon:file-light';else if (extension === 'zip') return 'bxs:file-archive';else if (extension === 'pdf') return 'bxs:file-pdf';else if (extension === 'jpg') return 'bx-images';else if (extension === 'png') return 'bx-images';else if (extension === 'jpeg') return 'bx-images';else return 'bxs:file';
};
export const getActivityIcon = type => {
  if (type === 'task') return 'iconamoon:folder-check-duotone';else if (type === 'design') return 'iconamoon:check-circle-1-duotone';else return 'iconamoon:certificate-badge-duotone';
};
export const getEventIcon = type => {
  if (type === 'celebration') return 'bx:cake';else if (type === 'togetherness') return 'bx:heart';else return 'bx:bookmark';
};