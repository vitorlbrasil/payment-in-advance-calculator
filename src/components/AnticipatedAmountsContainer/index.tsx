import { HtmlHTMLAttributes } from "react";
import { IAnticipatedAmounts } from "../../interfaces/IAnticipatedAmounts";
import { Title2 } from "../../styles/typography";
import AmountList from "../AmountList";

interface IAnticipatedAmountsContainerProps
  extends HtmlHTMLAttributes<HTMLDivElement> {
  anticipatedAmounts: IAnticipatedAmounts;
}

const AnticipatedAmountsContainer = ({
  anticipatedAmounts,
}: IAnticipatedAmountsContainerProps) => {
  return (
    <div className="anticipatedAmountsContainer">
      <Title2>Você receberá:</Title2>
      <AmountList anticipatedAmounts={anticipatedAmounts} />
    </div>
  );
};

export default AnticipatedAmountsContainer;
