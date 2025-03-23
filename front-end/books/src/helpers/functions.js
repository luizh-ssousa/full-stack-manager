export const maskPrice = (value = 0, currency = "BRL") => {
  return value.toLocaleString("pt-br", { style: "currency", currency });
};
