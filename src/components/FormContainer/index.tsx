import { yupResolver } from "@hookform/resolvers/yup";
import { HTMLAttributes, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { BarLoader } from "react-spinners";
import { toast } from "react-toastify";
import { IAnticipatedAmounts } from "../../interfaces/IAnticipatedAmounts";
import api from "../../services/api";
import { ErrorParagraph, Title1 } from "../../styles/typography";
import { simulationFormSchema } from "../../validators/simulationFormSchema";
import CheckboxesContainer from "../CheckboxesContainer";
import CheckboxGroup from "../CheckboxGroup";
import DaysContainer from "../DaysContainer";
import Form from "../Form";
import InputGroup from "../InputGroup";
import Label from "../Label";
import LabelParagraph from "../LabelParagraph";
import ThemeButton from "../ThemeButton";
import { override } from "./styles";

interface IFormContainerProps extends HTMLAttributes<HTMLDivElement> {
  setAnticipatedAmounts: React.Dispatch<
    React.SetStateAction<IAnticipatedAmounts | null>
  >;
}

const FormContainer = ({ setAnticipatedAmounts }: IFormContainerProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(simulationFormSchema),
  });

  const calculatePayment = async (data: FieldValues) => {
    try {
      setLoading(true);
      const response = await api.post("/", data);
      setAnticipatedAmounts(response.data);
    } catch (error: any) {
      toast.error(error.response.data);
    }

    setLoading(false);
  };

  return (
    <div className="formContainer">
      <Title1>Simule sua antecipação</Title1>

      <Form onSubmit={handleSubmit(calculatePayment)}>
        <div className="formFieldsContainer">
          <InputGroup>
            <Label htmlFor="amount">Informe o valor da venda *</Label>
            <input
              id="amount"
              type="number"
              step="any"
              placeholder="R$ 1.234,56"
              {...register("amount")}
            />
            <ErrorParagraph>
              <>{errors.amount?.message}</>
            </ErrorParagraph>
          </InputGroup>

          <InputGroup>
            <Label htmlFor="installments">Informe o número de parcelas *</Label>
            <input
              id="installments"
              type="number"
              placeholder="1"
              {...register("installments")}
            />
            <ErrorParagraph>
              <>{errors.installments?.message}</>
            </ErrorParagraph>
          </InputGroup>

          <InputGroup>
            <Label htmlFor="mdr">Informe o percentual de MDR *</Label>
            <input
              id="mdr"
              type="number"
              step="any"
              placeholder="3.99"
              {...register("mdr")}
            />
            <ErrorParagraph>
              <>{errors.mdr?.message}</>
            </ErrorParagraph>
          </InputGroup>

          <DaysContainer>
            <LabelParagraph>
              Daqui a quantos dias você quer receber? (opcional)
            </LabelParagraph>

            <CheckboxesContainer>
              <CheckboxGroup>
                <input
                  type="checkbox"
                  id="oneDay"
                  value={1}
                  {...register("days")}
                />
                <Label htmlFor="oneDay">1 dia</Label>
              </CheckboxGroup>

              <CheckboxGroup>
                <input
                  type="checkbox"
                  id="fifteenDays"
                  value={15}
                  {...register("days")}
                />
                <Label htmlFor="fifteenDays">15 dias</Label>
              </CheckboxGroup>

              <CheckboxGroup>
                <input
                  type="checkbox"
                  id="thirtyDays"
                  value={30}
                  {...register("days")}
                />
                <Label htmlFor="thirtyDays">30 dias</Label>
              </CheckboxGroup>

              <CheckboxGroup>
                <input
                  type="checkbox"
                  id="sixtyDays"
                  value={60}
                  {...register("days")}
                />
                <Label htmlFor="sixtyDays">60 dias</Label>
              </CheckboxGroup>

              <CheckboxGroup>
                <input
                  type="checkbox"
                  id="ninetyDays"
                  value={90}
                  {...register("days")}
                />
                <Label htmlFor="ninetyDays">90 dias</Label>
              </CheckboxGroup>
            </CheckboxesContainer>
          </DaysContainer>
        </div>

        <ThemeButton type="submit">
          {loading ? (
            <BarLoader
              color="black"
              loading={loading}
              cssOverride={override}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            "Calcular"
          )}
        </ThemeButton>
      </Form>
    </div>
  );
};

export default FormContainer;
