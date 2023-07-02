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
    <tr className="border-t border-primary-400">
      <td className="py-2 px-4">
        <div>
          <p className="text-primary-200">{formattedDate}</p>
          <p>{paymentId}</p>
        </div>
      </td>
      <td className="py-2 px-4 ">
        <ul className="text-primary-200 list-disc ">{gamesTitles}</ul>
      </td>
      <td className="py-2 px-4 text-center">
        <div>
          <p className="text-primary-200 py-2 uppercase">{paymentMethod}</p>
          <p className="text-primary-200">**** **** **** {lastFour}</p>
        </div>
      </td>
      <td
        className="py-2 px-4  text-center text-sm
  text-primary-200"
      >
        $ {total.toFixed(2)}
      </td>
    </tr>
  );
};

export default OrderTableItem;
