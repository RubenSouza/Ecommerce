import axios from "axios";

type FetchPaymentProps = {
  cartItems: string[];
  paymentIntent: any;
};

export const fetchPayment = async ({
  cartItems,
  paymentIntent,
}: FetchPaymentProps) => {
  const URL = import.meta.env.VITE_PUBLIC_API_URL;
  const user = localStorage.getItem("user");
  const jsonUser = user ? JSON.parse(user) : null;
  const accessToken = jsonUser?.accessToken.toString();

  const payment_id = paymentIntent?.id;
  const payment_method = paymentIntent?.payment_method;

  try {
    const response = await axios.post(
      `${URL}/orders`,
      {
        games: cartItems,
        payment_id,
        payment_method,
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
