import productService from "../services/productService";

const getAllProducts = async (page, limit) => {
  try {
    const response = await productService.getAllProducts(page, limit);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const createProduct = async (productInput) => {
  try {
    const response = await productService.createProduct({ ...productInput })
    return response
  } catch (error) {
    console.log(error)
  }
}

const updateProduct = async (id, productInput) => {
  try {
    const response = await productService.updateProduct(id, { ...productInput })
    return response
  } catch (error) {
    console.log(error)
  }
}

const deleteProduct = async (id) => {
  try {
    const response = await productService.deleteProduct(id)
    return response
  } catch (error) {
    console.log(error)
  }
}

const buyProduct = async (id, amount) => {
  try {
    const response = await productService.buyProduct(id, amount)
    return response
  } catch (error) {
    console.log(error)
  }
}

export default {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  buyProduct
}
