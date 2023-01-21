import * as yup from "yup";

export const simulationFormSchema = yup.object({
  amount: yup
    .number()
    .transform((cv: unknown, ov: unknown) =>
      typeof ov === "string" && ov.trim() === "" ? undefined : cv
    )
    .positive("O valor deve ser positivo!")
    .required("O valor da venda é obrigatório!"),
  installments: yup
    .number()
    .transform((cv: unknown, ov: unknown) =>
      typeof ov === "string" && ov.trim() === "" ? undefined : cv
    )
    .integer("Deve ser um número inteiro!")
    .max(12, "Máximo de 12 parcelas!")
    .required("O número de parcelas é obrigatório!"),
  mdr: yup
    .number()
    .transform((cv: unknown, ov: unknown) =>
      typeof ov === "string" && ov.trim() === "" ? undefined : cv
    )
    .required("O percentual de MDR é obrigatório!"),
  days: yup
    .array()
    .of(yup.number().integer())
    .transform((value) => (value ? value : [1, 15, 30, 90])),
});
