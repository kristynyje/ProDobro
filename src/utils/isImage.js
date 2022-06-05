export const isImage = (path) => {
  const extension = path.split(/[#?]/)[0].split('.').pop().trim().toLowerCase();
  const imageExtensions = ['jpg', 'jpeg', 'png', 'gif'];
  return imageExtensions.indexOf(extension) > -1;
};
