import { Button } from "@mui/material";
import { BsRobot } from "react-icons/bs";

export const StocksMessage = (
  selectedStockExchangeName: string,
  selectedStockExchangeCode: string,
  stocks: any,
  setInfoState: any,
  setDisplayedMessages: any
) => {
  const optionMessage = (option: string) => (
    <li className="flex justify-end m-3">
      <span className="user-response">{option}</span>
    </li>
  );
  const message = (canClick: boolean) => (
    <>
      <li className="flex items-end gap-2 m-3">
        <BsRobot size={25} className="inline" />
        <span className="select-message">
          Please select a stock.
          <div className="flex flex-col m-2">
            {stocks
              .find((s: any) => s.code === selectedStockExchangeCode)
              ?.topStocks.map((stock: any) => (
                <Button
                  key={stock.code}
                  sx={{ m: 0, p: 0.3 }}
                  onClick={() => {
                    if (!canClick) return;
                    setInfoState(stock.stockName, stock.price);
                    setDisplayedMessages((messages: any) => [
                      ...messages,
                      message(false),
                      optionMessage(stock.stockName),
                    ]);
                  }}
                >
                  <span className="button-message">{stock.stockName}</span>
                </Button>
              ))}
          </div>
        </span>
      </li>
    </>
  );
  return message(true);
};
