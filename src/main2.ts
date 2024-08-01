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
let typeName = document.querySelectorAll('.typeName') as NodeListOf<HTMLParagraphElement>
let filmName = document.querySelectorAll('.filmName') as NodeListOf<HTMLParagraphElement>
let yearName = document.querySelectorAll('.yearName') as NodeListOf<HTMLParagraphElement>
const movieElements = document.querySelectorAll('.resultCard') as NodeListOf<HTMLDivElement>

let activePage = 1
let totalPages = 1
const moviesPerPage = 3
const maxPageButtons = 100

let filmList: any[] = []

searchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    activePage = 1

    axios(`http://www.omdbapi.com/?apikey=c07de1fa&s=${inputTitle.value}&type=${selectType.value}`)
        .then((resp) => {
            console.log(resp.data.Response)
            if (resp.data.Response == 'False') {
                let errorMovie = document.createElement('div')
                errorMovie.textContent = 'Movie not found!'
                errorMovie.id = 'errorMovie'
                document.body.appendChild(errorMovie)
            } else if (resp.data.Response == 'True') {
                panelResult.hidden = false
                filmList = resp.data.Search

                totalPages = Math.ceil(filmList.length / moviesPerPage)
                createPaginationButtons(totalPages)

                displayMovies()

                nextBtn.addEventListener('click', () => {
                    if (activePage < totalPages) {
                        activePage++
                        displayMovies()
                    }

                })
                prevBtn.addEventListener('click', () => {
                    if (activePage > 1) {
                        activePage--
                        displayMovies()
                    }
                })

            }
        })
})
function createPaginationButtons(totalPages: number) {
    pageNumbers.innerHTML = ''
    for (let i = 0; i < Math.min(totalPages, maxPageButtons); i++) {
        let btn = document.createElement('button')
        btn.textContent = `${i + 1}`
        btn.classList.add('buttonResult')
        pageNumbers.appendChild(btn)
        btn.addEventListener('click', () => {
            activePage = i + 1
            displayMovies()
        })
    }
}

function updatePaginationButtons() {
    const startPage = 1
    const endPage = Math.min(totalPages, startPage + maxPageButtons - 1)

    pageNumbers.innerHTML = ''

    for (let i = startPage; i <= endPage; i++) {
        let btn = document.createElement('button')
        btn.textContent = `${i}`
        btn.classList.add('buttonResult')
        pageNumbers.appendChild(btn)

        btn.addEventListener('click', () => {
            activePage = i
            displayMovies()
        })
    }
}

function displayMovies() {
    const startIndex = (activePage - 1) * moviesPerPage
    const endIndex = startIndex + moviesPerPage
    const moviesToShow = filmList.slice(startIndex, endIndex)

    for (let i = 0; i < moviesPerPage; i++) {
        if (i < moviesToShow.length) {
            imgPoster[i].src = moviesToShow[i].Poster
            typeName[i].textContent = selectType.value
            filmName[i].textContent = moviesToShow[i].Title
            yearName[i].textContent = moviesToShow[i].Year
            movieElements[i].style.display = 'flex'
        } else {
            movieElements[i].style.display = 'none'
        }
    }
    updatePaginationButtons()
}

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
let mainMovieImg = document.querySelector('.mainMovieImg') as HTMLImageElement

document.addEventListener('click', (e) => {
    let target = e.target as HTMLElement
    let btn = target.closest('.detailsBtn') as HTMLButtonElement
    if (!btn) return false

    let movie = btn.closest('.detailsBtn')?.parentElement?.querySelector('.filmName')?.textContent
    let realList: any[] = []
    for (let el = 0; el < filmList.length; el++) {
        if (movie == filmList[el].Title) {
            realList.push(filmList[el].imdbID)
            console.log(filmList[el])
        }
    }
    console.log(realList[0])
    axios(`http://www.omdbapi.com/?apikey=c07de1fa&i=${realList[0]}`)
        .then((resp) => {
            displayMainFilmInfo(resp.data)
        })
    modalContainer.style.opacity = '1'
    modalContainer.style.pointerEvents = 'all'
})
modalContainer.addEventListener('click', () => {
    modalContainer.style.opacity = '0'
    modalContainer.style.pointerEvents = 'none'
})

function displayMainFilmInfo(movie: any) {
    mainMovieImg.src = movie.Poster
    title.textContent = movie.Title
    released.textContent = movie.Released
    genre.textContent = movie.Genre
    country.textContent = movie.Country
    director.textContent = movie.Director
    writer.textContent = movie.Writer
    actors.textContent = movie.Actors
    awards.textContent = movie.Awards
}