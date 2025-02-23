export const getStocks = async () => {
  const response = await fetch("/Chatbot - stock data.json");
  const data = await response.json();
  return data;
};
