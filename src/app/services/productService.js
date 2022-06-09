import { v4 as uuidv4 } from "uuid";

const products = [
  {
    _id: uuidv4(),
    productName: "ตู้เย็น",
    quantity: 8,
    createdDate: "2022-06-09T09:54:28.955Z",
    weight: 54.4,
    tisiNumber: "2258-445-74658",
  },
  {
    _id: uuidv4(),
    productName: "เครื่องซักผ้า",
    quantity: 4,
    createdDate: "2022-06-09T09:54:28.955Z",
    weight: 44.4,
    tisiNumber: "2255-874-59658",
  },
];

const getProductList = () => {
  return { data: products }
}

export default {
  getProductList,
}
