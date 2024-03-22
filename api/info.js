export default {
  async getInfos(axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/static_infos", {
          ...params,
        });
        return res;
      }
      return res;
    } catch (e) {
      console.log(e);
    }
  },
};
