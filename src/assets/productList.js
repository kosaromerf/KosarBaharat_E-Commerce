import BlackPepper from "./Products/BlackPepper.webp";
import CayennePepper from "./Products/CayennePepper.webp";
import Cumin from "./Products/Cumin.webp";
import Spearmint from "./Products/Spearmint.webp";
import Oregano from "./Products/Oregano.webp";
import Thyme from "./Products/Thyme.webp";
import Paprika from "./Products/Paprika.webp";
import Cinnamon from "./Products/Cinnamon.webp";
import GrindedCinnamon from "./Products/GrindedCinnamon.webp";
import BayLeaf from "./Products/BayLeaf.webp";
import IsotPepper from "./Products/IsotPepper.webp";
import UrfaPepper from "./Products/UrfaPepper.webp";
import Sinnemaqi from "./Products/Sinnemaqi.webp";
import TurmericPowder from "./Products/TurmericPowder.webp";
import CurryPowder from "./Products/CurryPowder.webp";
import Allspice from "./Products/Allspice.webp";
import Cloves from "./Products/Cloves.webp";
import PoppySeeds from "./Products/PoppySeeds.webp";
import MustardSeeds from "./Products/MustardSeeds.webp";
import placeholder from "./Products/placeholder.webp";

const productList = [
  {
    name: "Black Pepper",
    price: 1000,
    available: false,
    tags: "spice",
    image: BlackPepper,
  },
  {
    name: "Cayenne Pepper",
    price: 500,
    available: true,
    tags: "spice",
    image: CayennePepper,
  },
  {
    name: "Cumin",
    price: 100,
    available: true,
    tags: "spice",
    image: Cumin,
  },
  {
    name: "Spearmint",
    price: 400,
    available: true,
    tags: "spice",
    image: Spearmint,
  },
  { name: "Oregano", price: 100, available: true, tags: "tea", image: Oregano },
  { name: "Thyme", price: 100, available: true, tags: "spice", image: Thyme },
  {
    name: "Paprika",
    price: 100,
    available: true,
    tags: "spice",
    image: Paprika,
  },
  {
    name: "Cinnamon",
    price: 300,
    available: true,
    tags: "herb",
    image: Cinnamon,
  },
  {
    name: "Cinnamon(Grinded)",
    price: 300,
    available: true,
    tags: "spice",
    image: GrindedCinnamon,
  },
  {
    name: "Bay Leaf",
    price: 100,
    available: true,
    tags: "herb",
    image: BayLeaf,
  },
  {
    name: "Sumac",
    price: 100,
    available: true,
    tags: "spice",
    image: placeholder,
  },
  {
    name: "Urfa Pepper",
    price: 200,
    available: true,
    tags: "spice",
    image: UrfaPepper,
  },
  {
    name: "Isot Pepper",
    price: 100,
    available: true,
    tags: "spice",
    image: IsotPepper,
  },
  {
    name: "Sinnemaqi",
    price: 700,
    available: true,
    tags: "herb",
    image: Sinnemaqi,
  },
  {
    name: "Turmeric Powder",
    price: 100,
    available: true,
    tags: "spice",
    image: TurmericPowder,
  },
  {
    name: "Curry Powder",
    price: 800,
    available: true,
    tags: "spice",
    image: CurryPowder,
  },
  {
    name: "Allspice",
    price: 100,
    available: true,
    tags: "spice",
    image: Allspice,
  },
  { name: "Cloves", price: 100, available: true, tags: "spice", image: Cloves },
  {
    name: "Sesame Seeds",
    price: 100,
    available: true,
    tags: "seed",
    image: placeholder,
  },
  {
    name: "Poppy Seeds",
    price: 100,
    available: true,
    tags: "seed",
    image: PoppySeeds,
  },
  {
    name: "Mustard Seeds",
    price: 100,
    available: true,
    tags: "seed",
    image: MustardSeeds,
  },

  {
    name: "Fennel Seeds",
    price: 100,
    available: true,
    tags: "seed",
    image: placeholder,
  },
];

/* 
sumac
seseme
fennel
 */
export default productList;
