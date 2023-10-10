import Head from 'next/head';
import { useState } from 'react';
import { isMobile } from 'react-device-detect';

import Map from '@components/MapComponent/Map';
import Listings from '@components/Listings';

// Testing Data
const saleListings = [
  {
    plot: "C023",
    city: "Reveille",
    location: [3102, 4096],
    price: 200,
    propertyType: "Commercial",
    propertySizeSq: 1000,
    status: "Sale",
    images: ["https://i.postimg.cc/9MR8F6FM/Bangla-1.png", "https://i.postimg.cc/8CFBhh8X/Bangla-2.png"],
    beds: 3,
    baths: 2,
    listedOn: 1677220233,
  },
  {
    plot: "S001",
    city: "Reveille",
    location: [2210, 3865],
    price: 300,
    propertyType: "Skyscraper",
    propertySizeSq: 2000,
    status: "Sale",
    images: ["https://i.postimg.cc/sxcswGFb/C-Suit-1.png", "https://i.postimg.cc/ryJT64bP/C-Suit-2.png"],
    beds: 4,
    baths: 3,
    listedOn: 1627776000,
  },
  {
    plot: "I005",
    city: "Klondike",
    location: [1853, 3483],
    price: 20,
    propertyType: "Apartment",
    propertySizeSq: 1500,
    status: "Sale",
    images: ["https://i.postimg.cc/cLbKJHdG/Penthouse-1.png", "https://i.postimg.cc/Qdwt3yqX/Penthouse-2.png"],
    beds: 2,
    baths: 2,
    listedOn: 1666848633,
  },
  {
    plot: "CBD001",
    city: "Willow",
    location: [2595, 3152],
    price: [500, 1050],
    propertyType: "Industrial",
    propertySizeSq: 3000,
    status: "Sale",
    images: ["https://i.postimg.cc/5tMN3VDc/Bunnings-Apt-1.png", "https://i.postimg.cc/PxXXgMt2/Bunnings-Apt-2.png"],
    beds: 5,
    baths: 4,
    listedOn: 1696552250,
  },
  {
    plot: "R010",
    city: "Aventura",
    location: [3022, 3656],
    price: 2445,
    propertyType: "House",
    propertySizeSq: 800,
    status: "Sale",
    images: ["https://i.postimg.cc/BvQZygZN/Martin-1.png", "https://i.postimg.cc/Nf6gjV5p/Martin-2.png"],
    beds: 2,
    baths: 1,
    listedOn: 1691299833,
  },
];

const rentListings = [
  {
    plot: "C203",
    city: "Reveille",
    location: [3339, 3856],
    price: 200,
    propertyType: "Commercial",
    propertySizeSq: 1000,
    status: "Rent",
    images: ["https://i.postimg.cc/9MR8F6FM/Bangla-1.png", "https://i.postimg.cc/8CFBhh8X/Bangla-2.png"],
    beds: 3,
    baths: 2,
    listedOn: 1677220233,
  },
  {
    plot: "C226",
    city: "Reveille",
    location: [3130, 3532],
    price: 300,
    propertyType: "Apartment",
    propertySizeSq: 2000,
    status: "Rent",
    images: ["https://i.postimg.cc/sxcswGFb/C-Suit-1.png", "https://i.postimg.cc/ryJT64bP/C-Suit-2.png"],
    beds: 4,
    baths: 3,
    listedOn: 1627776000,
  },
  {
    plot: "R005",
    city: "Klondike",
    location: [3210, 3266],
    price: 20,
    propertyType: "Apartment",
    propertySizeSq: 1500,
    status: "Rent",
    images: ["https://i.postimg.cc/cLbKJHdG/Penthouse-1.png", "https://i.postimg.cc/Qdwt3yqX/Penthouse-2.png"],
    beds: 2,
    baths: 2,
    listedOn: 1666848633,
  },
  {
    plot: "RH3035",
    city: "Willow",
    location: [3946, 3056],
    price: [500, 1050],
    propertyType: "Commercial",
    propertySizeSq: 3000,
    status: "Rent",
    images: ["https://i.postimg.cc/5tMN3VDc/Bunnings-Apt-1.png", "https://i.postimg.cc/PxXXgMt2/Bunnings-Apt-2.png"],
    beds: 5,
    baths: 4
  },
];

const listings = [...saleListings, ...rentListings];

export default function Home() {
  const [listingsInBounds, setListingsInBounds] = useState(listings);
  const [filteredListings, setFilteredListings] = useState(listings);

  return (
    <>
      <Head>
        <title>HFR | Listings</title>
        <meta name="description" content="Hamilton Family Realty is a premier real estate agency based in the Commonwealth of Redmont.
            We aim to be the top real estate firm in the nation, helping clients buy, sell, or rent the property of their dreams." />
      </Head>

      <div className="flex">
        <Map listings={listings} filteredListings={filteredListings} setListingsInBounds={isMobile ? null : setListingsInBounds} />
        <Listings listings={listingsInBounds} setFilteredListings={setFilteredListings} />
      </div>
    </>
  );
};
/*
export async function getStaticProps() {
  return {
    props: {},
    revalidate: 600,
  };
}
*/