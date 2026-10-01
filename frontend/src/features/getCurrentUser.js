import api from "../../utils/axios";

const getCurrrentUser = async () => {
  try {
    const { data } = await api.get("/api/me");
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getCurrrentUser;
