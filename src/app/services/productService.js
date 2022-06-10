import { v4 as uuidv4 } from "uuid";

const products = [
  {
    _id: uuidv4(),
    productName: "ตู้เย็น",
    quantity: 8,
    producedDate: "2022-06-09T09:54:28.955Z",
    weight: 54.4,
    tisiCertificate: "2258-445-74658",
  },
  {
    _id: uuidv4(),
    productName: "เครื่องซักผ้า",
    quantity: 4,
    producedDate: "2022-06-09T09:54:28.955Z",
    weight: 44.4,
    tisiCertificate: "2255-874-59658",
  },
  {
    _id: uuidv4(),
    productName: "มาม่า",
    quantity: 120,
    producedDate: "2022-06-09T09:54:28.955Z",
    expireddate: "2022-06-09T09:54:28.955Z",
    description: "มาม่าอร่อยดี",
    producer: "คนทำมาม่า",
    distributor: "ร้านเจ้าสัว",
    fdaCertificate: "58-5-8-9-1234567"
  },
  {
    _id: uuidv4(),
    productName: "นม",
    quantity: 84,
    producedDate: "2022-06-09T09:54:28.955Z",
    expireddate: "2022-06-09T09:54:28.955Z",
    description: "นมหนองโพ นมโคจากเต้า",
    producer: "วัว",
    distributor: "ร้านเจ้าสัว",
    fdaCertificate: "89-7-4-1-7456321"
  },
  {
    _id: uuidv4(),
    productName: "ลดพุง เพิ่มแอล",
    quantity: 12,
    category: "SPORT",
    pageNumber: 100,
    isbnNumber: "978-3-16-148410-0",
    publisher: "นายอินทร์"
  },
  {
    _id: uuidv4(),
    productName: "กินยังไงให้หิว?",
    quantity: 45,
    category: "ENTERTAINMENT",
    pageNumber: 80,
    isbnNumber: "993-5-18-478516-3",
    publisher: "นายอาม"
  },
];

const getAllProducts = () => {
  return { data: products }
}

const createProduct = (productInput) => {
  const response = { _id: uuidv4(), ...productInput }
  products.push(response)
  return { data: response }
}

const updateProduct = (id, productInput) => {
  const oldProductData = products.find((product) => {
    return product._id === id
  })
  Object.assign(oldProductData, { ...productInput })
  return {
    status: '201',
    message: `Product ID: ${id} has been updated.`,
    data: oldProductData
  }
}

const getSportCategoryByENUM = (category) => {
  let data
  switch (category) {
    case "SPORT":
      data = { value: "กีฬา" }
      break
    case "ENTERTAINMENT":
      data = { value: "บันเทิง" }
      break
    case "NEWS":
      data = { value: "ข่าว" }
      break
    default:
      data = { value: null }
  }
  return { data }
}

export default {
  getAllProducts,
  getSportCategoryByENUM,
  createProduct,
  updateProduct,
}
