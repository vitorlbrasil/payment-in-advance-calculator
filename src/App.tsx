import React from "react";
import "./App.css";
import Input from "./components/Input";
import Label from "./components/Label";
import CheckboxInput from "./components/CheckboxInput";
import { ErrorParagraph, Title1 } from "./styles/typography";
import LabelParagraph from "./components/LabelParagraph";
import InputGroup from "./components/InputGroup";
import CheckboxGroup from "./components/CheckboxGroup";
import CheckboxesContainer from "./components/CheckboxesContainer";
import DaysContainer from "./components/DaysContainer";
import Form from "./components/Form";
import ThemeButton from "./components/ThemeButton";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="formContainer">
          <Title1>Simule sua antecipação</Title1>

          <Form>
            <InputGroup>
              <Label htmlFor="salePrice">Informe o valor da venda *</Label>
              <Input id="salePrice" type="number" placeholder="R$ 1.234,56" />
              <ErrorParagraph>teste teste</ErrorParagraph>
            </InputGroup>

            <InputGroup>
              <Label htmlFor="installments">
                Informe o número de parcelas *
              </Label>
              <Input id="installments" type="number" placeholder="1" />
              <ErrorParagraph>teste teste</ErrorParagraph>
            </InputGroup>

            <InputGroup>
              <Label htmlFor="mdr">Informe o percentual de MDR *</Label>
              <Input id="mdr" type="number" placeholder="3.99" />
              <ErrorParagraph>teste teste</ErrorParagraph>
            </InputGroup>

            <DaysContainer>
              <LabelParagraph>
                Daqui a quantos dias você quer receber? (opcional)
              </LabelParagraph>

              <CheckboxesContainer>
                <CheckboxGroup>
                  <CheckboxInput
                    type="checkbox"
                    id="oneDay"
                    name="days"
                    value={1}
                  />
                  <Label htmlFor="oneDay">1 dia</Label>
                </CheckboxGroup>

                <CheckboxGroup>
                  <CheckboxInput
                    type="checkbox"
                    id="fifteenDays"
                    name="days"
                    value={15}
                  />
                  <Label htmlFor="fifteenDays">15 dias</Label>
                </CheckboxGroup>

                <CheckboxGroup>
                  <CheckboxInput
                    type="checkbox"
                    id="thirtyDays"
                    name="days"
                    value={30}
                  />
                  <Label htmlFor="thirtyDays">30 dias</Label>
                </CheckboxGroup>

                <CheckboxGroup>
                  <CheckboxInput
                    type="checkbox"
                    id="sixtyDays"
                    name="days"
                    value={60}
                  />
                  <Label htmlFor="sixtyDays">60 dias</Label>
                </CheckboxGroup>

                <CheckboxGroup>
                  <CheckboxInput
                    type="checkbox"
                    id="ninetyDays"
                    name="days"
                    value={90}
                  />
                  <Label htmlFor="ninetyDays">90 dias</Label>
                </CheckboxGroup>
              </CheckboxesContainer>
            </DaysContainer>

            <ThemeButton type="submit">Calcular</ThemeButton>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default App;
