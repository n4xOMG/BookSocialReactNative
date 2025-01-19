import axios from "axios";

const API_URL = "https://ae8c-2402-800-63a7-e4fa-252d-be3d-a80d-fb20.ngrok-free.app";

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signin`, { email, password });
    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

export const register = async (email, password, username) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signup`, { email, password, username });
    return response.data;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
};

export const forgotPassword = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/auth/forgot-password`, { email });
    return response.data;
  } catch (error) {
    console.error("Error during forgot password request:", error);
    throw error;
  }
};

export const verifyOtp = async (email, otp, context) => {
  const response = await axios.post(`${API_URL}/auth/verify-otp`, { email, otp, context });
  return response.data;
};

export const resetPassword = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/reset-password`, { email, password });
    return response.data;
  } catch (error) {
    console.error("Error during password reset:", error);
    throw error;
  }
};
