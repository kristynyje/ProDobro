export const isImage = (path) => {
  const extension = path.replace(/.*\.([^.]+)/, '$1');
  const imageExtensions = ['jpg', 'jpeg', 'png', 'gif'];
  return imageExtensions.indexOf(extension) > -1;
};
