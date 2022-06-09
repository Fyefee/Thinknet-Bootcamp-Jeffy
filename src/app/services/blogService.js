import { response } from 'express'
import { indexOf } from 'lodash'
import { v4 as uuidv4 } from 'uuid'

// service for DEMO, data build-in
const Media = [
  {
    _id: uuidv4(),
    title: "สยาม สุดยอดกีฬา",
    description: "เพื่อความบันเทิง เต็มอิ่มทุกความตื่นเต้น",
    category: "SPORT",
    author: "Surapon Mahavithaya",
    estimatedReadTime: 12
  },
  {
    _id: uuidv4(),
    title: "สยาม สุดยอดธุรกิจ",
    description: "เพื่อเพิ่มฐานความรู้ด้านธุรกิจ",
    category: "BUSINESS",
    author: "Surasit Mahavithaya",
    estimatedReadTime: 20
  },
  {
    _id: uuidv4(),
    title: "สยาม สุดยอดศิลปะ",
    description: "เพื่อความบันเทิง ทางศิลปะ",
    category: "ART",
    author: "Surathikan Mahavithaya",
    estimatedReadTime: 6
  },
  {
    _id: uuidv4(),
    title: "สยามศิลป์",
    description: "เพื่อความบันเทิง ทางศิลปะ",
    category: "ART",
    totalPage: 10,
    ISBN: "fk42kf2k4"
  },
  {
    _id: uuidv4(),
    title: "วีดีโอ สยามศิลป์",
    description: "เพื่อความบันเทิง ทางศิลปะ",
    category: "ART",
    owner: "Supawat Kitthipadha",
    totalTime: 10
  },
]

const getBlogList = () => {
  return { data: Media }
}

const getBlogByID = (id) => {
  const response = blog.find(x => x._id === id)
  return { data: response }
}

const createBlog = (blogData) => {
  const response = { _id: uuidv4(), ...blogData }
  blog.push(response)
  return { data: response}
}

const updateBlog = (id, blogData) => {
  const oldData = blog.find(x => x._id === id)
  const index = blog.map(x => { return x._id }).indexOf(id)
  Object.assign(oldData, { ...blogData })
  return { 
    httpCode: '201',
    message: `${oldData?.title} has been updated.`
  }
}

const deleteBlog = (id) => {
  const response = blog.find(x => x._id === id)
  const index = blog.map(x => {return x._id}).indexOf(id)
  if (response) blog.splice(index, 1)
  return { 
    httpCode: '201',
    message: `${response?.title} has been deleted.`
  }
}

const getCategoryList = () => { 
  return { data: 
    {
      ART: 'ศิลปะ',
      BUSINESS: 'ธุรกิจ',
      HISTORY: 'ประวัติศาสตร์',
      JOURNAL: 'ท่องเที่ยว',
      MATH: 'คณิตศาสตร์',
      REVIEW: 'รีวิว',
      SPORT: 'กีฬา'
    }
  }
}

const getCategoryByENUM = (category) => {
  let data
  switch (category) {
    case "ART":
      data = { value: "ศิลปะ" }
      break
    case "BUSINESS":
      data =  { value: "ธุรกิจ" }
      break
    case "HISTORY":
      data = { value: "ประวัติศาสตร์" }
      break
    case "JOURNAL":
      return { value: "ท่องเที่ยว" }
      break
    case "REVIEW":
      data = { value: "รีวิว" }
      break
    case "SPORT":
      data = { value: "กีฬา" }
      break
    default:
      data = { value: null }
  }
  return { data }
}

export default {
  getBlogList,
  getBlogByID,
  createBlog,
  updateBlog,
  deleteBlog,
  getCategoryList,
  getCategoryByENUM
}


