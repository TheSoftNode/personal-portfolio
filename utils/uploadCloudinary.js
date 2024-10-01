import { CLOUD_NAME, UPLOAD_PRESET } from "./config";

const upload_preset = UPLOAD_PRESET;
const cloud_name = CLOUD_NAME;

const uploadImageToCloudinary = async (file) =>
{
  const uploadData = new FormData();

  uploadData.append("file", file);
  uploadData.append("upload_preset", upload_preset);
  uploadData.append("cloud_name", cloud_name);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
    {
      method: "post",
      body: uploadData,
    }
  );

  const data = await res.json();

  return data;
};

export default uploadImageToCloudinary;
