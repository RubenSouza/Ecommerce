import axios from "axios";

export const fetchFavorites = async (id: string) => {
  const user = localStorage.getItem("user");
  const jsonUser = user ? JSON.parse(user) : null;
  const accessToken = jsonUser?.accessToken.toString();
  const URL = import.meta.env.VITE_PUBLIC_API_URL;

  try {
    axios.post(`${URL}/favorites/${id}`, null, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
