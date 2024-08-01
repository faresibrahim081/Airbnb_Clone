import { StaticImageData } from "next/image";

export type ExploreItem = {
    img: string;
    location: string;
    distance: string;
}
export type ExploreData = ExploreItem[];

export type LiveItem = {
    img: string;
    title: string;
}
export type LiveData = LiveItem[];

export type GreatestOutdoorProps = {
    img: StaticImageData;
    title: string;
    desc: string;
    linkText: string;
}

export type ListingCard = {
    img:string,
    location:string,
    title:string,
    description:string,
    star:number,
    price:string,
    total:string,
    long:number,
    lat:number,
}
export type ListingCardType = ListingCard[];