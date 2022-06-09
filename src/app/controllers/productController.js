import productService from "../services/productService";

const getProductList = async (page, limit) => {
  try {
    const response = await productService.getProductList(page, limit);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default {
  getProductList
}
