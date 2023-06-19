import axios from "axios";

export const fetchFavorites = async (id: string) => {
  const user = localStorage.getItem("user");
  const jsonUser = user ? JSON.parse(user) : null;
  const accessToken = jsonUser?.accessToken.toString();

  try {
    axios.post(`http://localhost:3001/v1/api/favorites/${id}`, null, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
