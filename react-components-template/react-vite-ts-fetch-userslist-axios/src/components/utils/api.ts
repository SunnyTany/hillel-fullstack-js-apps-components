import axios from 'axios'

const API_URL:string = 'https://jsonplaceholder.typicode.com/users'

export const fetchData = async () => {
  try {
    const response = await axios.get(API_URL)
    return response.data
  } catch (error) {
    throw new Error('Error fetching data')
  }
}


// export const fetchData = async () => {
//   try {

//     const response = await fetch(API_URL)

//     if (!response.ok) {
//       throw new Error('Error fetching data')
//     }

//     const data = await response.json()
//     return data

//   } catch (error) {
//     throw new Error('Error fetching data')
//   }
// }