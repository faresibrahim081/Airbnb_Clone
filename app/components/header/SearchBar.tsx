"use client";
import { SearchIcon, UsersIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useState } from "react";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const SearchBar = ({placeholder} : {placeholder?: string}) => {
  const [input, setInput] = useState("");
  const [numOfGuests, setNumOfGuests] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  }
  const handleSelect = (ranges: RangeKeyDict) => {
    setStartDate(ranges.selection.startDate as Date);
    setEndDate(ranges.selection.endDate as Date);
  }
  return (
    <>
    <div className="flex items-center rounded-full md:w-[40%] md:border-2 py-2 md:shadow-sm">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={placeholder || "Start Your Search"}
        className="text-sm text-gray-400 flex-grow pl-5 bg-transparent outline-none "
      />
      <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 rounded-full p-2 text-white mr-2 " />
    </div>
    {input && 
    <div className="absolute flex flex-col left-[50%] top-[130%] translate-x-[-50%] ">
      <DateRangePicker 
        rangeColors={['#fd5b61']}
        minDate={new Date}
        ranges={[selectionRange]}
        onChange={handleSelect}
      />
      <div className="flex items-center border-b bg-white p-4 ">
        <h2 className="text-2xl flex-grow  font-semibold">
          Number of guests
        </h2>
        <UsersIcon className="h-5 mr-1" />
        <input type="number" value={numOfGuests} onChange={(e) => setNumOfGuests(+e.target.value)} min={1} className="w-12 pl-2 text-lg outline-none text-red-400" />
      </div>
      <div className="flex items-center bg-white m-0 p-2">
        <button onClick={() => setInput('')} type="button" className="flex-grow text-gray-500">Cancel</button>
        <Link href={{pathname:'/search',search:`?location=${input}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&guestsNumber=${numOfGuests}`}} onClick={() => setInput('')} type="button" className="flex-grow text-center text-red-500">Search</Link>
      </div>
    </div>
    }
    </>
  );
};

export default SearchBar;
