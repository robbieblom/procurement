import { formatToCurrency } from "../../utils/utils";

export const currencyFormatter = (params) => {
  return formatToCurrency(params.value);
};
