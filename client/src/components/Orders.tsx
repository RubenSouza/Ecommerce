import { useGetOrdersQuery } from "../redux/services/games";
import OrderTableItem from "./OrderTableItem";
import ScreenLoading from "./ScreenLoading";
import { Subtitle } from "./Subtitle";

const Orders = () => {
  const { data, isLoading } = useGetOrdersQuery("");

  const orders = data?.orders;

  const orderItems = orders?.map((order: any) => {
    return (
      <OrderTableItem
        games={order?.games}
        lastFour={order?.card_last4}
        paymentDate={order?.createdAt}
        paymentId={order?.payment_id}
        paymentMethod="Credit Card"
        total={order?.total}
        key={order?._id}
      />
    );
  });

  if (isLoading) return <ScreenLoading />;

  return (
    <div className="flex flex-col w-full h-full">
      <Subtitle title="Orders" />
      {orders?.length === 0 ? (
        <div>
          <div
            className="w-full flex justify-center 
items-center h-[280px]"
          >
            <p
              className="text-primary-100 text-2xl 
  font-bold"
            >
              No orders yet
            </p>
          </div>
        </div>
      ) : (
        <div className="w-full h-full py-4  ">
          <table className="w-full bg-primary-700 rounded-md">
            <thead
              className="text-left uppercase hidden 
            md:table-header-group w-full"
            >
              <tr className="">
                <th className="py-2 px-4 border-b border-primary-400 font-bold">
                  Payment ID
                </th>
                <th className="py-2 border-b border-primary-400 font-bold">
                  {`Game(S)`}
                </th>
                <th className="py-2 px-4 text-center border-b border-primary-400 font-bold">
                  Payment Method
                </th>
                <th className="py-2 px-4 text-center border-b border-primary-400 font-bold">
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="text-xs">{orderItems}</tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
