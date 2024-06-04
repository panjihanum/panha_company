import { ProductResponse } from "@/interfaces/products.interface";
import { axiosUtil } from "@/util/axios.util";

export const getListProducts = async () => {
  const { data }: { data: ProductResponse } = await axiosUtil.get(
    "/product.json"
  );
  return data;
};
