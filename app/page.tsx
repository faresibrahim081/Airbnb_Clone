import Header from "./components/header/Header";
import Banner from "./components/home/Banner";
import Explore from "./components/home/explore/Explore";
import GreatestOutdoor from "./components/home/GreatestOutdoor";
import Live from "./components/home/slider/Live";
import outDoorImage from "@/public/image/pexels-mikebirdy-126271.jpg";

export default function Home() {
  return (
    <>
      <Header />
    <main>
      <Banner />
      <Explore />
      <Live />
      <GreatestOutdoor
        img={outDoorImage}
        title={"The Greatest Outdoors"}
        desc={"Which Lists Created By airbnb"}
        linkText={'Get Enspired'}
      />
    </main>
    </>
  );
}
