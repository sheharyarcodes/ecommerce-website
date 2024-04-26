import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      params,
    });

    return data;
  } catch (error) {
    console.log("fetchDataFromApi ::", error);
  }
};

export default fetchDataFromApi;
