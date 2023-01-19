import * as yup from "yup";

export const simulationFormSchema = yup.object().shape({
  amount: yup
    .number()
    .transform((value) => value * 100)
    .required("O valor da venda é obrigatório!"),
  installments: yup
    .number()
    .integer("Deve ser um número inteiro")
    .max(12, "Máximo de 12 parcelas")
    .required("O número de parcelas é obrigatório!"),
  mdr: yup.number().required("O percentual de MDR é obrigatório!"),
  days: yup
    .array()
    .of(yup.number().integer())
    .transform((value) => (value ? value : [1, 15, 30, 90])),
});
