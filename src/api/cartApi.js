import axiosClient from "./axiosClient";

const cartApi = {
  async getProductsInCart() {
    const url = `/carts/getProductInCart.php`;
    const data = await axiosClient.post(url);

    const productInCart = data.map((item) => ({
      id: Number.parseInt(item.id),
      product: {
        id: Number.parseInt(item.id),
        nameProduct: item.nameProduct,
        salePrice: Number.parseInt(item.salePrice),
        originPrice: Number.parseInt(item.originPrice),
        thumbnail: item.thumbnail,
      },
      quantity: Number.parseInt(item.quantity),
    }));

    return productInCart;
  },
};

export default cartApi;
