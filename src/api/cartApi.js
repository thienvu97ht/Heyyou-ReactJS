import axiosClient from "./axiosClient";

const cartApi = {
  async getProductsInCart() {
    const url = `/carts/getProductInCart.php`;
    const data = await axiosClient.post(url);

    const productInCart = data.map((item) => ({
      id: item.id,
      product: {
        id: item.id,
        nameProduct: item.nameProduct,
        salePrice: item.salePrice,
        originPrice: item.originPrice,
        thumbnail: item.thumbnail,
      },
      quantity: item.quantity,
    }));

    return productInCart;
  },
};

export default cartApi;
