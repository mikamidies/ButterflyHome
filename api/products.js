export default {
  async getProducts(axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/products", {
          ...params,
        });
      }
      return res.data.results;
    } catch (e) {
      console.log(e);
    }
  },

  async getProduct(slug, axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get(`/products/${slug}`, {
          ...params,
        });
      }
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
};
