import { useEffect, useState } from "react";
import { getStocks } from "../services/stocks.service";
import { StockExchange } from "../interfaces/Chatbot";
import { BsRobot } from "react-icons/bs";
import "./Chatbot.css";

import { HomeMessage } from "./components/HomeMessage";
import { StocksMessage } from "./components/StocksMessage";
import { InfoMessage } from "./components/InfoMessage";
import { IoSend } from "react-icons/io5";

const Chatbot = () => {
  const [stocks, setStocks] = useState<StockExchange[]>([]);
  const [botState, setBotState] = useState<"Home" | "Stocks" | "Info">("Home");
  const [selectedStockExchangeName, setSelectedStockExchangeName] =
    useState<string>("");
  const [selectedStockExchangeCode, setSelectedStockExchangeCode] =
    useState<string>("");
  const [selectedStockName, setSelectedStockName] = useState<string>("");
  const [selectedStockValue, setSelectedStockValue] = useState<number>(0);
  const [displayedMessages, setDisplayedMessages] = useState<any>([]);

  const setStockState = (code: string, name: string): void => {
    setBotState("Stocks");
    setSelectedStockExchangeName(name);
    setSelectedStockExchangeCode(code);
  };

  const setInfoState = (name: string, value: number): void => {
    setBotState("Info");
    setSelectedStockName(name);
    setSelectedStockValue(value);
  };

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const data = await getStocks();
        setStocks(data);
      } catch (error) {
        console.error("Error when loading stocks: " + error);
      }
    };

    fetchStocks();
  }, []);
  return (
    <>
      <div className="header">
        <div className="flex items-center h-10 gap-2 text-bold p-2 bg-blue-700 text-white rounded-t-lg">
          <BsRobot size={30} />
          <span className="font-semibold">LSEG Chatbot</span>
        </div>
      </div>
      <ul className="messages-container">
        <li className="flex items-end gap-2 m-3">
          <BsRobot size={25} className="inline" />
          <span className="simple-message">
            Hello! Welcome to LSEG. I'm here to help you.
          </span>
        </li>
        {displayedMessages.map((message: any) => message)}
        {botState === "Home" ? (
          HomeMessage(stocks, setStockState, setDisplayedMessages)
        ) : botState === "Stocks" ? (
          StocksMessage(
            selectedStockExchangeName,
            selectedStockExchangeCode,
            stocks,
            setInfoState,
            setDisplayedMessages
          )
        ) : botState === "Info" ? (
          InfoMessage(
            selectedStockName,
            selectedStockValue,
            setBotState,
            setDisplayedMessages
          )
        ) : (
          <></>
        )}
      </ul>
      <div className="footer">
        <div className="flex items-center justify-between">
          <span>Please pick an option.</span>
          <IoSend />
        </div>
      </div>
    </>
  );
};

export default Chatbot;
