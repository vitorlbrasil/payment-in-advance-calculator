import React, { useState } from "react";
import "./App.css";
// import Input from "./components/Input";
import Label from "./components/Label";
// import CheckboxInput from "./components/CheckboxInput";
import { ErrorParagraph, Title1, Title2 } from "./styles/typography";
import LabelParagraph from "./components/LabelParagraph";
import InputGroup from "./components/InputGroup";
import CheckboxGroup from "./components/CheckboxGroup";
import CheckboxesContainer from "./components/CheckboxesContainer";
import DaysContainer from "./components/DaysContainer";
import Form from "./components/Form";
import ThemeButton from "./components/ThemeButton";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { simulationFormSchema } from "./validators/simulationFormSchema";
import api from "./services/api";
import { IAnticipatedAmounts } from "./interfaces/IAnticipatedAmounts";
import ContainerHeader from "./components/ContainerHeader";
import AmountList from "./components/AmountList";

function App() {
  const [anticipatedAmounts, setAnticipatedAmounts] =
    useState<IAnticipatedAmounts | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(simulationFormSchema),
  });

  const calculatePayment = async (data: FieldValues) => {
    try {
      const response = await api.post("/", data);
      setAnticipatedAmounts(response.data);
    } catch (error) {}
  };

  return (
    <div className="App">
      <div className="container">
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
                <Label htmlFor="installments">
                  Informe o número de parcelas *
                </Label>
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

            <ThemeButton type="submit">Calcular</ThemeButton>
          </Form>
        </div>

        {anticipatedAmounts && (
          <div className="anticipatedAmountsContainer">
            <Title2>Você receberá:</Title2>
            <AmountList anticipatedAmounts={anticipatedAmounts} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
