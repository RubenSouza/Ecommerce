import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Subtitle } from "./Subtitle";
import Button from "./Button";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { fetchUserSecret } from "../utils/fetchUserSecret";
import { fetchPayment } from "../utils/fetchPayment";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/features/cart";

type Props = {
  cartItemsIds: string[];
};

const Payment = ({ cartItemsIds }: Props) => {
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();

  const cardStyle = {
    style: {
      base: {
        color: "#F5F5F5",
        fontSmoothing: "antialiased",
        fontSize: "16px",
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
    hidePostalCode: true,
  };

  const handleChange = async (event: any) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const saveOrder = async (paymentIntent?: any) => {
    const data = fetchPayment({
      cartItems: cartItemsIds,
      paymentIntent,
    });
    return data;
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    setProcessing(true);

    const payload = await stripe!.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements!.getElement(CardElement)!,
      },
    });

    if (payload.error) {
      const message = `Payment failed ${payload.error.message}`;
      setError(message as any);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      saveOrder(payload.paymentIntent);
      dispatch(clearCart());
      navigate("/success");
    }
  };

  useEffect(() => {
    const setPaymentIntent = async () => {
      const data = await fetchUserSecret(cartItemsIds);
      setClientSecret(data.client_secret);
    };
    setPaymentIntent();
  }, [cartItemsIds]);

  return (
    <div
      className="bg-primary-450 w-full xl:w-[500px] lg:w-[450px] h-full 
        rounded-sm flex flex-col justify-between my-6 lg:my-0"
    >
      <form onSubmit={handleSubmit}>
        <div className="p-4 space-y-4 h-full flex flex-col justify-center ">
          <Subtitle title="Payment Method" />
          <div className="h-full">
            <div
              className="flex flex-col items justify-center
          w-full p-2 h-full text-primary-100"
            >
              <CardElement options={cardStyle} onChange={handleChange} />
            </div>
            {error && (
              <p className="text-orange-800 text-[11px] px-2 pt-2">{error}</p>
            )}
          </div>
        </div>
        <div className="text-sm  px-6 lg:px-8 font-semibold ">
          <div className="w-full h-[2px] bg-primary-460 " />
          <div className="flex justify-between items-center py-2">
            <Link to={"/"}>
              <p className="text-sm">Explorer more</p>
            </Link>
            <div className="w-[150px]">
              <Button
                className="w-full h-[48px]"
                content="Purchase"
                disabled={disabled || !!error || processing}
                id="submit"
                isLoading={processing}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Payment;
