import Button from "@mui/material/Button";
import { BsRobot } from "react-icons/bs";

export const InfoMessage = (
  selectedStockName: string,
  selectedStockValue: number,
  setBotState: any,
  setDisplayedMessages: any
) => {
  const options = ["Main menu", "Go Back"];

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
          Stock price of {selectedStockName} is {selectedStockValue}. Please
          select an option.
          <div className="flex flex-col m-2">
            {options.map((op: string) => (
              <Button
                key={op}
                sx={{ m: 0, p: 0.3 }}
                onClick={() => {
                  if (!canClick) return;
                  if (op === "Main menu") {
                    setBotState("Home");
                  } else {
                    setBotState("Stocks");
                  }
                  setDisplayedMessages((messages: any) => [
                    ...messages,
                    message(false),
                    optionMessage(op),
                  ]);
                }}
              >
                <span className="button-message">{op}</span>
              </Button>
            ))}
          </div>
        </span>
      </li>
    </>
  );
  return message(true);
};
