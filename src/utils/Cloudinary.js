const CLOUD_NAME = "eric31t30";

export function cloudinary(publicId, transformations = "") {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transformations}/${publicId}`;
}
