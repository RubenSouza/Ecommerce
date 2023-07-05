type Props = {
  paymentId: string;
  paymentDate: string;
  paymentMethod: string;
  lastFour: number;
  total: number;
  games: string[];
};

const OrderTableItem = ({
  paymentDate,
  paymentId,
  paymentMethod,
  lastFour,
  games,
  total,
}: Props) => {
  const gamesTitles = games.map((game: any, index) => {
    return <li key={index}>{game?.name}</li>;
  });

  const date = new Date(paymentDate);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  return (
    <tr className="border-t border-primary-400 flex flex-col md:table-row">
      <td className="py-2 px-4">
        <div>
          <p className="text-base font-bold pb-2 md:hidden uppercase">
            Payment ID
          </p>
          <p className="text-primary-200">{formattedDate}</p>
          <p>{paymentId}</p>
        </div>
      </td>
      <td className="py-2 px-4 ">
        <p className="text-base font-bold pb-2 md:hidden uppercase">{`Game(S)`}</p>
        <ul className="text-primary-200 list-disc px-4 md:px-0">
          {gamesTitles}
        </ul>
      </td>
      <td className="py-2 px-4 md:text-center">
        <div>
          <p className="text-base font-bold pb-2 md:hidden uppercase">
            Payment Method
          </p>
          <p className="text-primary-200 py-2 uppercase">{paymentMethod}</p>
          <p className="text-primary-200">**** **** **** {lastFour}</p>
        </div>
      </td>
      <td
        className="py-2 px-4  md:text-center text-sm
  "
      >
        <p className="text-base font-bold pb-2 md:hidden uppercase ">Total</p>
        <p className="text-primary-200">$ {total.toFixed(2)}</p>
      </td>
    </tr>
  );
};

export default OrderTableItem;
