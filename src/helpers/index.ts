export default function formatCurrency(quantity: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "COP",
  }).format(quantity);
}
