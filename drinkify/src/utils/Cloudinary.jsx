const CLOUD_NAME = "dzuibzgu2";

export function cloudinary(publicId, transformations = "") {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transformations}/${publicId}`;
}
