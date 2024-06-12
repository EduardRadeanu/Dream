import { TbBeach, TbMountain } from "react-icons/tb";
import {
  GiWindmill,
} from "react-icons/gi";
import {
  FaPumpSoap,
  FaShower,
  FaFireExtinguisher,
  FaKey,
} from "react-icons/fa";
import {FaHouseUser, FaPeopleRoof, FaKitchenSet } from "react-icons/fa6";
import {
  BiSolidWasher,
  BiSolidDryer,
  BiSolidFirstAid,
  BiWifi,
  BiSolidFridge,
  BiWorld,
} from "react-icons/bi";
import { BsSnow, BsFillDoorOpenFill } from "react-icons/bs";
import { MdOutlineVilla, MdMicrowave, MdBalcony, MdYard, MdPets } from "react-icons/md";
import {
  PiBathtubFill,
  PiCoatHangerFill,
  PiTelevisionFill,
} from "react-icons/pi";
import { TbIroning3 } from "react-icons/tb";
import {
  GiCctvCamera,
  GiBarbecue,
  GiToaster,

} from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";

export const categories = [
  {
    label: "All",
    icon: <BiWorld />,
  },
  {
    img: "assets/city.jpg",
    label: "Oraș",
    icon: <MdOutlineVilla />,
    description: "Locuința la oraș!",
  },
  {
    img: "assets/farm.jpg",
    label: "Fermă",
    icon: <GiWindmill />,
    description: "Locuința la fermă!",
  },
  {
    img: "assets/beach.jpg",
    label: "Mare",
    icon: <TbBeach />,
    description: "Locuința la mare!",
  },
  {
    img: "assets/mountains.jpg",
    label: "Munte",
    icon: <TbMountain />,
    description: "Locuința la munte!",
  },
  
];

export const types = [
  {
    name: "Vânzare",
    description: "Oaspeții vor cumpără locuința",
    icon: <FaHouseUser />,
  },
  {
    name: "Închiriere",
    description:
      "Oaspeții vor închiria locuința",
    icon: <BsFillDoorOpenFill />,
  },
  {
    name: "Închiriere(comună)",
    description:
      "Oaspeții vor închiria locuința, împreună cu altcineva",
    icon: <FaPeopleRoof />,
  },
];

export const facilities = [
  {
    name: "Cadă",
    icon: <PiBathtubFill />,
  },
  {
    name: "Îngrijire personală",
    icon: <FaPumpSoap />,
  },
  {
    name: "Duș",
    icon: <FaShower />,
  },
  {
    name: "Mașină de spălat",
    icon: <BiSolidWasher />,
  },
  {
    name: "Uscător",
    icon: <BiSolidDryer />,
  },
  {
    name: "Umerașe",
    icon: <PiCoatHangerFill />,
  },
  {
    name: "Fier de călcat",
    icon: <TbIroning3 />,
  },
  {
    name: "Televizor",
    icon: <PiTelevisionFill />,
  },
  {
    name: "Aer condiționat",
    icon: <BsSnow />,
  },
  {
    name: "Camere de securitate",
    icon: <GiCctvCamera />,
  },
  {
    name: "Extinctor",
    icon: <FaFireExtinguisher />,
  },
  {
    name: "Trusă de prim ajutor",
    icon: <BiSolidFirstAid />,
  },
  {
    name: "Internet",
    icon: <BiWifi />,
  },
  {
    name: "Set de gătit",
    icon: <FaKitchenSet />,
  },
  {
    name: "Frigider",
    icon: <BiSolidFridge />,
  },
  {
    name: "Cuptor cu microunde",
    icon: <MdMicrowave />,
  },
  {
    name: "Cuptor",
    icon: <GiToaster />,
  },
  {
    name: "Grătar",
    icon: <GiBarbecue />,
  },
  {
    name: "Balcon",
    icon: <MdBalcony />,
  },
  {
    name: "Grădina",
    icon: <MdYard />,
  },
  {
    name: "Parcare",
    icon: <AiFillCar />,
  },
  {
    name: "Auto check-in",
    icon: <FaKey />
  },
  {
    name: "Acces cu animale permis",
    icon: <MdPets />
  }
];
