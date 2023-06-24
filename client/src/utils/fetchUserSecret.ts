import axios from "axios";

export const fetchUserSecret = async (cartItems: string[]) => {
  const URL = import.meta.env.VITE_PUBLIC_API_URL;
  const user = localStorage.getItem("user");
  const jsonUser = user ? JSON.parse(user) : null;
  const accessToken = jsonUser?.accessToken.toString();

  try {
    const response = await axios.post(
      `${URL}/orders/intent-payment`,
      {
        games: cartItems,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
