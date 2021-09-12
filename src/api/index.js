import axios from "axios";

const url = `https://randomuser.me/api/`;

export const fetchData = async () => {
  try {
    const {
      data: { results },
    } = await axios.get(url);

    return results;
  } catch (err) {
    console.log(err);
  }
};
