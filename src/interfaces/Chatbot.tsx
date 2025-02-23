export interface Stock {
  code: string;
  stockName: string;
  price: number;
}

export interface StockExchange {
  code: string;
  stockExchange: string;
  topStocks: Stock[];
}
