import { HTMLAttributes } from "react";
import { IAnticipatedAmounts } from "../../interfaces/IAnticipatedAmounts";

interface IAmountListProps extends HTMLAttributes<HTMLUListElement> {
  anticipatedAmounts: IAnticipatedAmounts;
}

const AmountList = ({ anticipatedAmounts }: IAmountListProps) => {
  const keys = Object.keys(anticipatedAmounts);
  const values = Object.values(anticipatedAmounts);
  return (
    <ul>
      {keys.map((key, index) => (
        <li key={key}>
          {key === "1" ? "Amanhã" : `Em ${key} dias`}: R${" "}
          {(values[index] / 100).toFixed(2).replace(".", ",")}
        </li>
      ))}
    </ul>
  );
};

export default AmountList;
