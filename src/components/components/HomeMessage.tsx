import Button from "@mui/material/Button";
import { BsRobot } from "react-icons/bs";

export const HomeMessage = (
  stocks: any,
  setStockState: any,
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
          Please select a Stock Exchange.
          <div className="flex flex-col m-2">
            {stocks.map((stockExchange: any) => (
              <Button
                key={stockExchange.code}
                sx={{ m: 0, p: 0.3 }}
                onClick={() => {
                  if (!canClick) return;
                  setStockState(
                    stockExchange.code,
                    stockExchange.stockExchange
                  );
                  setDisplayedMessages((messages: any) => [
                    ...messages,
                    message(false),
                    optionMessage(stockExchange.stockExchange),
                  ]);
                }}
              >
                <span className="button-message">
                  {stockExchange.stockExchange}
                </span>
              </Button>
            ))}
          </div>
        </span>
      </li>
    </>
  );
  return message(true);
};
