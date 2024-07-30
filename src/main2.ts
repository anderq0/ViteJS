import './newStyle.scss'
import axios from 'axios'
// a3b56e1a
// c07de1fa

let inputTitle = document.getElementById('inputTitle') as HTMLInputElement
let selectType = document.querySelector('#selectType') as HTMLSelectElement
let searchBtn = document.querySelector('#searchBtn') as HTMLButtonElement

let panelResult = document.querySelector('#panelResult') as HTMLDivElement

let prevBtn = document.querySelector('#prevBtn') as HTMLButtonElement
let nextBtn = document.querySelector('#nextBtn') as HTMLDivElement
let pageNumbers = document.querySelector('.pageNumbers') as HTMLDivElement


let imgPoster = document.querySelectorAll('.imgPoster') as NodeListOf<HTMLImageElement>
let typeName = document.querySelectorAll('.filmName') as NodeListOf<HTMLParagraphElement>
let filmName = document.querySelectorAll('.filmName') as NodeListOf<HTMLParagraphElement>
let yearName = document.querySelectorAll('.yearName') as NodeListOf<HTMLParagraphElement>
const movieElements = document.querySelectorAll('.resultCard') as NodeListOf<HTMLDivElement>

let activePage = 1
let totalPages = 1
const moviesPerPage = 3
const maxPageButtons = 5

let filmList: any[] = [{ "Title": "Teenage Mutant Ninja Turtles", "Year": "2014", "Rated": "PG-13", "Released": "08 Aug 2014", "Runtime": "101 min", "Genre": "Action, Adventure, Comedy", "Director": "Jonathan Liebesman", "Writer": "Josh Appelbaum, André Nemec, Evan Daugherty", "Actors": "Megan Fox, Will Arnett, William Fichtner", "Plot": "When a kingpin threatens New York City, a group of mutated turtle warriors must emerge from the shadows to protect their home.", "Language": "English, Japanese", "Country": "United States", "Awards": "1 win & 11 nominations", "Poster": "https://m.media-amazon.com/images/M/MV5BNjUzODQ5MDY5NV5BMl5BanBnXkFtZTgwOTc1NzcyMjE@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "5.8/10" }, { "Source": "Rotten Tomatoes", "Value": "21%" }, { "Source": "Metacritic", "Value": "31/100" }], "Metascore": "31", "imdbRating": "5.8", "imdbVotes": "221,385", "imdbID": "tt1291150", "Type": "movie", "DVD": "N/A", "BoxOffice": "$191,204,754", "Production": "N/A", "Website": "N/A", "Response": "True" }]

// searchBtn.addEventListener('click', (e) => {
//     e.preventDefault()
//     activePage = 1

//     axios(`http://www.omdbapi.com/?apikey=c07de1fa&s=${inputTitle.value}&type=${selectType.value}`)
//         .then((resp) => {
//             console.log(resp.data.Response)
//             if (resp.data.Response == 'False') {
//                 let errorMovie = document.createElement('div')
//                 errorMovie.textContent = 'Movie not found!'
//                 errorMovie.id = 'errorMovie'
//                 document.body.appendChild(errorMovie)
//             } else if (resp.data.Response == 'True') {
//                 panelResult.hidden = false
//                 filmList = resp.data.Search
//                 totalPages = Math.ceil(filmList.length / moviesPerPage)

//                 createPaginationButtons(totalPages)

//                 displayMovies()

//                 nextBtn.addEventListener('click', () => {
//                     if (activePage < totalPages) {
//                         activePage++
//                         displayMovies()
//                     }

//                 })
//                 prevBtn.addEventListener('click', () => {
//                     if (activePage > 1) {
//                         activePage--
//                         displayMovies()
//                     }
//                 })

//             }
//         })
// })
// function createPaginationButtons(totalPages: number) {
//     pageNumbers.innerHTML = ''
//     for (let i = 0; i < Math.min(totalPages, maxPageButtons); i++) {
//         let btn = document.createElement('button')
//         btn.textContent = `${i + 1}`
//         btn.classList.add('buttonResult')
//         pageNumbers.appendChild(btn)
//         btn.addEventListener('click', () => {
//             activePage = i + 1
//             displayMovies()
//         })
//     }
// }

// function updatePaginationButtons() {
//     // Math.floor(maxPageButtons / 2 всегда 2
//     const startPage = 1
//     const endPage = Math.min(totalPages, startPage + maxPageButtons - 1)

//     pageNumbers.innerHTML = ''

//     for (let i = startPage; i <= endPage; i++) {
//         let btn = document.createElement('button')
//         btn.textContent = `${i}`
//         btn.classList.add('buttonResult')
//         pageNumbers.appendChild(btn)

//         btn.addEventListener('click', () => {
//             activePage = i
//             displayMovies()
//         })
//     }
// }

// function displayMovies() {
//     const startIndex = (activePage - 1) * moviesPerPage
//     const endIndex = startIndex + moviesPerPage
//     const moviesToShow = filmList.slice(startIndex, endIndex)

//     for (let i = 0; i < moviesPerPage; i++) {
//         if (i < moviesToShow.length) {
//             imgPoster[i].src = moviesToShow[i].Poster
//             typeName[i].textContent = selectType.value
//             filmName[i].textContent = moviesToShow[i].Title
//             yearName[i].textContent = moviesToShow[i].Year
//             movieElements[i].style.display = 'flex'
//         } else {
//             movieElements[i].style.display = 'none'
//         }
//     }
//     updatePaginationButtons()
// }


let modalContainer = document.querySelector('.modalContainer') as HTMLDivElement
let closeBtn = document.querySelector('.closeBtn') as HTMLButtonElement
let title = document.querySelector('.Title') as HTMLParagraphElement
let released = document.querySelector('.Released') as HTMLParagraphElement
let genre = document.querySelector('.Genre') as HTMLParagraphElement
let country = document.querySelector('.Country') as HTMLParagraphElement
let director = document.querySelector('.Director') as HTMLParagraphElement
let writer = document.querySelector('.Writer') as HTMLParagraphElement
let actors = document.querySelector('.Actors') as HTMLParagraphElement
let awards = document.querySelector('.Awards') as HTMLParagraphElement

document.addEventListener('click', (e) => {
    let target = e.target as HTMLElement
    let btn = target.closest('.detailsBtn')
    let movie = target.closest('.filmName')?.textContent
    let realList: any[] = []
    if (!btn) return
    for (let el = 0; el < filmList.length; el++) {
        if (movie == filmList[el].Title) {
            console.log(filmList[el])
            realList.push(filmList[el])
        }
    }
    console.log(realList)
    console.log(movie)
    console.log(filmList)
    modalContainer.style.opacity = '1'
    modalContainer.style.pointerEvents = 'all'
    displayMainFilmInfo(realList)
})
closeBtn.addEventListener('click', () => {
    modalContainer.style.opacity = '0'
    modalContainer.style.pointerEvents = 'none'
})

function displayMainFilmInfo(movie: any) {
    title.textContent = movie.Title
    released.textContent = movie.Released
    genre.textContent = movie.Genre
    country.textContent = movie.Country
    director.textContent = movie.Director
    writer.textContent = movie.Writer
    actors.textContent = movie.Actors
    awards.textContent = movie.Awards
}
