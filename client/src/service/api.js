import axios from "axios";

const URL = "http://localhost:8000";

export const getData = async (token) => {
  try {
    return await axios.get(`${URL}/get`, {
      headers: {
        token: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const addData = async (data, token) => {
  try {
    await axios.post(`${URL}/add`, data, {
      headers: {
        token: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteData = async (id) => {
  try {
    await axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log(error);
  }
};

//////////////////////////////////////////////////
//////////////////////////////////////////////////
export const signupUser = async (data) => {
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log("Error while calling signupUser api", error);
  }
};

export const loginUser = async (data) => {
  try {
    return await axios.post(`${URL}/login`, data);
  } catch (error) {
    console.log("Error while calling signupUser api", error);
    return error;
  }
};
