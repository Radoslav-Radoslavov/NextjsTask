export const getImgDimensions = (img) => {
  return {
    width: img?.filename?.split("/")[5]?.split("x")[0] || null,
    height: img?.filename?.split("/")[5]?.split("x")[1] || null,
  };
};
