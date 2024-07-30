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

let filmList:any[] = []

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

                displayMovies

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
            btn.style.backgroundColor = '#828181'
            displayMovies()
        })
    }
}

function updatePaginationButtons() {
    // Math.floor(maxPageButtons / 2 всегда 2
    const startPage = 1
    const endPage = Math.min(totalPages, startPage + maxPageButtons - 1)

    pageNumbers.innerHTML = ''

    for (let i = startPage; i <= endPage; i++) {
        let btn = document.createElement('button')
        btn.textContent = `${i}`
        btn.classList.add('buttonResult')
        pageNumbers.appendChild(btn)

        btn.addEventListener('click', () => {
            btn.style.backgroundColor = '#828181'
            activePage = i
            displayMovies()
        })
    }
}

function displayMovies() {
    const startIndex = (activePage - 1) *moviesPerPage
    const endIndex = startIndex + moviesPerPage
    const moviesToShow = filmList.slice(startIndex, endIndex)

    for (let i = 0; i < moviesPerPage; i++) {
        if (i < moviesToShow.length) { 
            imgPoster[i].src = moviesToShow[i].Poster
            typeName[i].textContent = selectType.value
            filmName[i].textContent = moviesToShow[i].Title
            yearName[i].textContent = moviesToShow[i].Year
            movieElements[i].style.display = 'flex'
        }else {
            movieElements[i].style.display = 'none'// Скрываем элемент, если фильмов меньше
        }
    }
    updatePaginationButtons()
}