import { format } from "date-fns";
import Header from "../components/header/Header";
import { getSearchResult } from "../utils/api";
import ListCard from "./ListCard";
import { ListingCardType } from "@/types/app";

type searchParamsTyps = {
  startDate: string;
  endDate: string;
  guestsNumber: string;
  location: string;
};

async function SearchResult({
  searchParams: { location, startDate, endDate, guestsNumber },
}: {
  searchParams: searchParamsTyps;
}) {
  let formatedSatartDate;
  let formatedEndDate;
  if (startDate && endDate) {
    formatedSatartDate = format(new Date(startDate), "dd MMMM yy");
    formatedEndDate = format(new Date(endDate), "dd MMMM yy");
  }
  const range = `${formatedSatartDate} - ${formatedEndDate}`;
  const searchResultData: ListingCardType = await getSearchResult();
  return (
    <>
      <Header placeholder={`${location} | ${range} | ${guestsNumber} guests`} />
      <main className="myContainer">
        <section className="pt-14">
          <p className="text-xs">
            300+ - {range} - for {guestsNumber} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            {" "}
            Stays in {location}{" "}
          </h1>
          <div className="">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.182370726!2d-0.10159865000000001!3d51.52864165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2seg!4v1722439966515!5m2!1sen!2seg"
              className="mb-5 w-full shadow-lg rounded-lg h-[50vh]"
              loading="lazy"
            ></iframe>
          </div>
          <div>
            {searchResultData.map((item, index) => {
              return (
                <ListCard
                  key={index}
                  description={item.description}
                  location={item.location}
                  title={item.title}
                  img={item.img}
                  star={item.star}
                  price={item.price}
                  total={item.total}
                />
              );
            })}
          </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default SearchResult;
