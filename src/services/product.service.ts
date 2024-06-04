import { ProductResponse } from "@/interfaces/products.interface";
import { axiosUtil } from "@/util/axiosUtil";

export const getListProducts = async () => {
  const { data }: { data: ProductResponse } = await axiosUtil.get(
    "/product.json"
  );
  return data;
};
