import React, { useState } from "react";
import Button from "../commons/Button";
import { RiCalendarEventFill, RiHotelFill, RiTaxiFill } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import useLanguage from "@/hooks/useLanguage";

const options = [
  {
    id: "001",
    title: [
      { language: "es", content: "Sencillo" },
      { language: "en", content: "One way" },
    ],
  },
  {
    id: "002",
    title: [
      { language: "es", content: "Redondo" },
      { language: "en", content: "Rounded" },
    ],
  },
];

const text = {
  search: [
    { language: "es", content: "Redondo" },
    { language: "en", content: "Rounded" },
  ],
  destination: [
    { language: "es", content: "¿A dónde vas?" },
    { language: "en", content: "Where are you going?" },
  ],
};

const SearchBar = () => {
  const { translate } = useLanguage();
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  return (
    <div className="bg-white lg:w-[75%] w-[95%]  rounded-2xl bg-opacity-70 backdrop-blur-lg flex flex-col justify-between items-center p-4 shadow-xl -">
      <div className="flex w-full">
        <div className="relative flex flex-1 mr-2">
          <RiHotelFill className="absolute top-1/2 -translate-y-1/2 left-2 text-2xl text-gray-400" />
          <input
            type="text"
            className="w-full flex-flex-1  bg-white rounded-lg pl-10 pr-2 h-[50px]"
            placeholder={translate(text.destination)}
          />
        </div>
        <div className=" mr-2 hidden md:flex">
          <div className="relative w-[150px] mr-2">
            <RiTaxiFill className="absolute top-1/2 -translate-y-1/2 left-2 text-2xl text-gray-400" />
            <FaChevronDown className="absolute top-1/2 -translate-y-1/2 right-2 text-sm text-primary" />
            <select className="w-full flex-flex-1 text-gray-500  bg-white rounded-lg pl-10 pr-2 h-[50px]">
              {options.map((option) => (
                <option>{translate(option.title)}</option>
              ))}
            </select>
          </div>
          <div className="relative w-[150px]">
            <RiCalendarEventFill className="absolute top-1/2 -translate-y-1/2 left-2 text-2xl text-gray-400" />
            <input
              onChange={(e) => setSelectedDate(e.target.value)}
              value={selectedDate}
              type="date"
              className="w-full flex-flex-1 text-gray-500  bg-white rounded-lg pl-10 pr-2 h-[50px]"
            ></input>
          </div>
        </div>
        <Button className="bg-primary text-white">
          {translate(text.search)}
        </Button>
      </div>

      <div className="flex w-full mt-2 lg:hidden md:hidden">
        <div className="relative w-[150px] mr-2">
          <RiTaxiFill className="absolute top-1/2 -translate-y-1/2 left-2 text-2xl text-gray-400" />
          <FaChevronDown className="absolute top-1/2 -translate-y-1/2 right-2 text-sm text-primary" />
          <select className="w-full flex-flex-1  bg-white rounded-lg pl-10 pr-2 h-[50px]">
            {options.map((option) => (
              <option>{translate(option.title)}</option>
            ))}
          </select>
        </div>
        <div className="relative w-[150px]">
          <RiCalendarEventFill className="absolute top-1/2 -translate-y-1/2 left-2 text-2xl text-gray-400" />
          <input
            type="date"
            className="w-full flex-flex-1  bg-white rounded-lg pl-10 pr-2 h-[50px]"
          ></input>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
