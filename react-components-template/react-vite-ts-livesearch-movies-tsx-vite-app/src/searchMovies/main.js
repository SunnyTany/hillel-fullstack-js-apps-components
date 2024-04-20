// import axios from "axios" 

// const HEAD_STYLE = `

// .search {
//   margin-bottom: 2rem;
// }

// .search__group--input {
//   margin-bottom: 0.4375rem;
// }

// .search__group--checkbox {
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex;
//   -webkit-box-align: center;
//   align-items: center;
//   -ms-flex-align: center;

//   gap: 0.3125rem;
// }

// .search__label-input {
//   display: block;

//   margin-bottom: 0.5rem;

//   text-transform: uppercase;

//   color: #ffffff;

  
//   font-size: 1.4rem;
//   font-weight: 700;
// }

// .search__input {
//   display: block;

//   width: 100%;
//   max-width: 25rem;
//   margin-bottom: 0.625rem;
//   padding: 0.625rem 0.9375rem;

//   border: 0.0625rem solid lighsteelblue;
//   border-radius: 0.25rem;
// }
// .search__label-checkbox {
//   padding: 0.8rem 0.3rem;

//   -webkit-user-select: none;
//   -moz-user-select: none;
//   -ms-user-select: none;
//   user-select: none;

//   color: #ffffff;

//   font-size: 0.8rem;
// }

// .search__error-search {
//   padding: 2rem 3rem;
//   text-align: center;
//   color: rgb(80, 17, 17);
//   border: 0.125rem solid #fff;
//   margin-bottom: 1.6rem;
//   font-size: 2rem;
// }

// .search__start-message {
//   position: absolute;
//   bottom: 3rem;
//   left: 0;
//   right: 0;
//   max-width: 60%;
//   color: #cbce10;
//   font-size: 2.6rem;
//   text-shadow: 0.125rem 0.125rem 0.5rem #000000;
//   letter-spacing: 0.125rem;
//   text-align: center;
//   margin: 4.6rem auto;
// }

// @media (max-width: 768px) {
//   .search__start-message {
//     font-size: 1.6rem;
//   }
// }

// .movies {
//   display: grid;
//   margin-bottom: 3rem;
//   gap: 1.4rem;
//   grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
// }

// .movies__movie {
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex;
//   -ms-flex-line-pack: center;
//   align-content: center;
//   -webkit-box-orient: vertical;
//   -webkit-box-direction: normal;
//   -ms-flex-direction: column;
//   flex-direction: column;
//   border: 0.125rem solid #ffffff;
//   padding: 1rem;
//   border-radius: 1rem;
// }

// .movies__image {
//   width: 100%;
//   height: 20rem;
//   margin-bottom: 1rem;

//   border-radius: 0.5rem;

//   -o-object-fit: cover;
//   object-fit: cover;
// }

// .movies__info {
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex;
//   -webkit-box-orient: vertical;
//   -webkit-box-direction: normal;
//   -ms-flex-direction: column;
//   flex-direction: column;
//   -webkit-box-pack: justify;
//   -ms-flex-pack: justify;
//   justify-content: space-between;
// }

// .movies__title {
//   margin-bottom: 1.5rem;
//   letter-spacing: 0.2rem;
//   color: #ffffff;
//   text-shadow: 0.0625rem 0.0625rem 0.5rem #193d8b;
// }

// .movies__year {
//   color: #ffffff;
//   text-shadow: 0.0625rem 0.0625rem 0.5rem #193d8b;
//   font-size: 1.4rem;
// }
// `;

// let moviesList = null;
// let container = null;
// let inputSearch = null;
// export let triggerMode = true;
// let firstMessage = null;
// export let searchLast = null;
// let errorSearchMessage = null;

// ! видалення повідомлення про невдалий пошук
// const removeErrorSearchMessage = () => {
//   if (errorSearchMessage === null ) return;
//   document.querySelector('.search__error-search').remove();
//   errorSearchMessage = null;
// }

// ! створення повідомлення про невдалий пошук
// const renderErrorSearchMessage = () => {
//   if (errorSearchMessage!== null) return;
//   errorSearchMessage = createElement({
//     typeTag: 'h2',
//     attrs: {
//       class: "search__error-search",
//       innerHTML: `! &#129300; Нажаль, за цим запитом нічого не знайдено`
//     },
//     container,
//     position: 'prepend',
//   });
// }

// ! функція debounce
// export const debounceTime = (() => {
//   let timer = null;

//   return (cb, ms) => {
//     if (timer) {
//       clearInterval(timer);
//       timer = null;
//     }
//     timer = setTimeout(() => cb(), ms)
//   }
// })();


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

// http://www.omdbapi.com/?apikey=18b8609f&s=ads

// ! обробник подій в інпуті пошуку
// const inputSearchHandler = ({target}) => {
//   debounceTime(() => {
//     const searchString = target.value.trim();
  
//     if (searchString.length < 3 || searchString === searchLast) return;
//     if (!triggerMode) clearMoviesMarkup();
    
//     getData(`https://www.omdbapi.com/?apikey=18b8609f&s=${searchString}`)
//       .then(data => data.forEach(movie => addMovieToList(movie)))
//       .catch(err => console.log(err))
  
//     searchLast = searchString;
//   }, 2000);
// }

// ! функція для рендера повідомлення про початок пошуку
// const renderStartSearchMessage = () => {
//   if (moviesList!== null) return;
//   firstMessage = createElement({
//     typeTag: 'h2',
//     attrs: {
//       class: "search__start-message",
//       innerHTML: `! &#128521; Щоб знайти фільми введіть у пошук англійською назву чи частину назви фільму`
//     },
//     container,
//     position: 'append',
//   });
//   return firstMessage;
// }

// ! функція для видалення стартового повідомлення
// const removeStartSearchMessage = () => {
//   if (firstMessage === null) return; 
//   document.querySelector('.search__start-message').remove();
//   firstMessage = null;
// }


// ! створення елементу
// export const createElement = ({
//   typeTag = 'div', 
//   attrs = {}, 
//   container = null, 
//   position = 'append', 
//   event = null, 
//   handler = null
// }) => {
//   const el = document.createElement(typeTag);

//   // встановлення атрибутів елементу
//   Object.entries(attrs).forEach( ([key, value]) => {
//     if (key === 'innerHTML') {
//       el.innerHTML = value;
//     } else {
//       el.setAttribute(key, value);
//     }
//   });

//   // позиціонування елементу
//   if (container && position === 'prepend') container.prepend(el);
//   if (container && position === 'append') container.append(el);

//   // event
//   if (event && handler && typeof handler === 'function') {
//     el.addEventListener(event, handler);
//   }
  
//   return el;
// }

// ! створення стилю сторінки
// const createStyle = () => {
//   createElement({
//     typeTag:'style',
//     attrs: {
//       type: 'text/css',
//       innerHTML: HEAD_STYLE,
//     },
//     container: document.head,
//   });
// }

// ! створення розмітки
// export const createMarkup = () => {

//   // div.container
//   container = createElement({
//     attrs: {class: 'container'}, 
//     container: document.body,
//     position: 'prepend',
//   });

//   // h1.title
//   createElement({
//     typeTag: 'h1', 
//     attrs: {
//       class: 'title', 
//       innerHTML: 'Застосунок для пошуку фільмів'
//     }, 
//     container,
//   });

//   // div.search
//   const searchCont = createElement({
//     attrs: {class:'search'},
//     container,
//   });

//   // div.search__group.search__group--input
//   const searchGroupInput = createElement({
//     attrs: {class:'search__group search__group--input'},
//     container: searchCont,
//   });

//   // label.search__label-input
//   createElement({
//     typeTag: 'label',
//     attrs: {
//       class:'search__label-input',
//       for: 'search',
//       innerHTML: 'Пошук'
//     },
//     container: searchGroupInput,
//   });

//   // input.search__input
//   inputSearch = createElement({
//     typeTag: 'input',
//     attrs: {
//       class:'search__input',
//       id:'search',
//       type: 'search',
//       placeholder: 'Назва фільму...',
//     },
//     container: searchGroupInput,
//   });

//   // div.search__group.search__group--checkbox
//   const searchGroupCheckbox = createElement({
//     attrs: {class:'search__group search__group--checkbox'},
//     container: searchCont,
//   });

//   // input.search__input-checkbox
//   createElement({
//     typeTag: 'input',
//     attrs: {
//       class:'search__input-checkbox',
//       id: 'checkbox',
//       type: 'checkbox',
//       value: 'true',
//       checked: 'true',
//     },
//     container: searchGroupCheckbox,
//     event: 'click',
//     handler: () => {
//       triggerMode =!triggerMode;
//     }
//   });

//   // label.search__label-checkbox
//   createElement({
//     typeTag: 'label',
//     attrs: {
//       class:'search__label-checkbox',
//       for: 'checkbox',
//       innerHTML: 'Додавати фільми до вже існуючого списку',
//     },
//     container: searchGroupCheckbox,
//   });

//   renderStartSearchMessage();

//   // div.movies
//   moviesList = createElement({
//     typeTag: 'section',
//     attrs: {class:'movies'}, 
//     container
//   });
// }

// ! отримання карточки фільму
// export const addMovieToList = (movie) => {
//   removeStartSearchMessage();
//   // movie
//   const divMov = createElement({
//     attrs: {class:'movies__movie'},
//     container: moviesList,
//     position: 'prepend',
//   });
//   // imgMov
//   const imgMov = createElement({
//     typeTag: 'img',
//     attrs: {
//       class:'movies__image',
//       src: /(http|https):\/\//i.test(movie.Poster) ? movie.Poster : './assets/images/no-image.jpg',
//       alt: `${movie.Title} ${movie.Year}`
//     },
//     container: divMov,
//     position: 'append',
//   });
//   // infoMov
//   const infoMov = createElement({
//     typeTag: 'div',
//     attrs: {class:'movies__info'},
//     container: divMov,
//     position: 'append',
//   });
//   // yearMov
//   createElement({
//     typeTag: 'p',
//     attrs: {
//       class:'movies__year',
//       innerHTML: movie.Year,
//     },
//     container: infoMov,
//     position: 'append',
//   });
//   // titleMov
//   createElement({
//     typeTag: 'h2',
//     attrs: {
//       class:'movies__title',
//       innerHTML: movie.Title,
//     },
//     container: infoMov,
//     position: 'append',
//   });
// }

// ! видалення елементів розмітки зі списку фільмів
// export const clearMoviesMarkup = () => {
//   moviesList && (moviesList.innerHTML = '');
// }