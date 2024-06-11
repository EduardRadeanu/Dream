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
    label: "Oras",
    icon: <MdOutlineVilla />,
    description: "This property is modern!",
  },
  {
    img: "assets/farm.jpg",
    label: "Ferma",
    icon: <GiWindmill />,
    description: "This property is has a ferm!",
  },
  {
    img: "assets/beach.jpg",
    label: "Mare",
    icon: <TbBeach />,
    description: "This property is close to the beach!",
  },
  {
    img: "assets/mountains.jpg",
    label: "Munte",
    icon: <TbMountain />,
    description: "This property is in the countryside!",
  },
  
];

export const types = [
  {
    name: "Vanzare",
    description: "Oaspetii vor cumpara locuinta",
    icon: <FaHouseUser />,
  },
  {
    name: "Inchiriere",
    description:
      "Oaspetii vor inchiria locuinta",
    icon: <BsFillDoorOpenFill />,
  },
  {
    name: "Inchiriere(comuna)",
    description:
      "Oaspetii vor inchiria locuinta, impreuna cu altcineva",
    icon: <FaPeopleRoof />,
  },
];

export const facilities = [
  {
    name: "Cada",
    icon: <PiBathtubFill />,
  },
  {
    name: "Ingrijire personala",
    icon: <FaPumpSoap />,
  },
  {
    name: "Dus",
    icon: <FaShower />,
  },
  {
    name: "Masina de spalat",
    icon: <BiSolidWasher />,
  },
  {
    name: "Uscator",
    icon: <BiSolidDryer />,
  },
  {
    name: "Umerase",
    icon: <PiCoatHangerFill />,
  },
  {
    name: "Fier de calcat",
    icon: <TbIroning3 />,
  },
  {
    name: "Televizor",
    icon: <PiTelevisionFill />,
  },
  {
    name: "Aer conditionat",
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
    name: "Trusa de prim ajutor",
    icon: <BiSolidFirstAid />,
  },
  {
    name: "Internet",
    icon: <BiWifi />,
  },
  {
    name: "Set de gatit",
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
    name: "Gratar",
    icon: <GiBarbecue />,
  },
  {
    name: "Balcon",
    icon: <MdBalcony />,
  },
  {
    name: "Gradina",
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
