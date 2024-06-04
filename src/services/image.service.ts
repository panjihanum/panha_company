import { ImageResponse } from "@/interfaces/images.interface";
import { axiosUtil } from "@/util/axiosUtil";

export const getListImages = async () => {
  const { data }: { data: ImageResponse } = await axiosUtil.get("/image.json");
  return data;
};
