import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card';
import { Chip } from '@nextui-org/chip';
import { Divider } from '@nextui-org/divider';
import ImageCarousel from '@components/ImageCarousel';

import SquareFootRoundedIcon from '@mui/icons-material/SquareFootRounded';
import HotelRoundedIcon from '@mui/icons-material/HotelRounded';
import ShowerRoundedIcon from '@mui/icons-material/ShowerRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import FactoryRoundedIcon from '@mui/icons-material/FactoryRounded';
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';

const ListingCard = ({ listing, link }) => {
  const iconPropertyDict = {
    "House": <HomeRoundedIcon fontSize='md' />,
    "Apartment": <ApartmentRoundedIcon fontSize='md' />,
    "Industrial": <FactoryRoundedIcon fontSize='md' />,
    "Commercial": <LocalGroceryStoreRoundedIcon fontSize='md' />,
    "Skyscraper": <BusinessRoundedIcon fontSize='md' />
  };
  const formattedPrice = listing.price[1] // If listing.price has two values, format it as a range
    ? `${Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(listing.price[0])} - ${Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(listing.price[1])}`
    : Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(listing.price);

  return (
    <Card
      key={listing.plot}
      isPressable
      onClick={() => link && window.open(link, '_blank')}
      className="shadow-md !transition !duration-300 hover:shadow-2xl animate-fade bg-[#28292a]"
    >
      <div className="relative w-full" onClick={(e) => e.stopPropagation()}>
        {listing.property_type &&
          <Chip startContent={iconPropertyDict[listing.property_type]} color="secondary" radius="sm" size="sm" variant="shadow" className="absolute bottom-2 left-2 z-10">
            {listing.property_type}
          </Chip>
        }
        <ImageCarousel listing={listing} />
      </div>
      <CardBody className="overflow-hidden pt-2 pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <SquareFootRoundedIcon className="mr-1" fontSize="medium" />
            <p className="text-sm text-neutral-400">{listing.sq_meters || '--'} m<sup>2</sup></p>
          </div>
          <div className="flex items-center">
            <HotelRoundedIcon className="mr-1" fontSize="medium" />
            <p className="text-sm text-neutral-400">{listing.beds || '--'} bds</p>
          </div>
          <div className="flex items-center">
            <ShowerRoundedIcon className="mr-1" fontSize="medium" />
            <p className="text-sm text-neutral-400">{listing.bathrooms || '--'} ba</p>
          </div>
        </div>
      </CardBody>
      <Divider />
      <CardHeader className="pt-2">
        <p className="text-lg font-bold">{formattedPrice}</p>
      </CardHeader>
      <CardFooter className="flex items-center justify-between pt-0">
        <p className="text-sm text-neutral-400">{listing.plot}</p>
        <p className="text-sm text-neutral-400">Listed By {listing.created_by_user}</p>
      </CardFooter>
    </Card>
  );
};

export default ListingCard;