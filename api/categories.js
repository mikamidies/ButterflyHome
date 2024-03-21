export default {
  async getCategories(axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/category", {
          ...params,
        });

        return res.data.results;
      }
      return res;
    } catch (e) {
      console.log(e);
    }
  },
};
