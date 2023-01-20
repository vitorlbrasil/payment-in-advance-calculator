import { HTMLAttributes } from "react";
import { IAnticipatedAmounts } from "../../interfaces/IAnticipatedAmounts";
import { Span } from "../../styles/typography";
import { StyledUl } from "./styles";

interface IAmountListProps extends HTMLAttributes<HTMLUListElement> {
  anticipatedAmounts: IAnticipatedAmounts;
}

const AmountList = ({ anticipatedAmounts }: IAmountListProps) => {
  const keys = Object.keys(anticipatedAmounts);
  const values = Object.values(anticipatedAmounts);
  return (
    <StyledUl>
      {keys.map((key, index) => (
        <li key={key}>
          <Span>
            {key === "1" ? "Amanhã" : `Em ${key} dias`}: R${" "}
            {(values[index] / 100).toFixed(2).replace(".", ",")}
          </Span>
        </li>
      ))}
    </StyledUl>
  );
};

export default AmountList;
