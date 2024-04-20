import axios from 'axios';

const getData = async (url) => {
  try {
    const response = await axios.get(url);
    console.log(response);
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

export default getData;

// ! отримання данних та перетворенняв їх у формат JSON
// const getData = url => fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     if (!data || !data.Search) {
//       renderErrorSearchMessage();
//       throw Error('No data');
//     }
//     if (errorSearchMessage) {
//       removeErrorSearchMessage();
//     }
//     return data.Search;
//   })
//   .catch(err => {
//     console.log(err);
//   });