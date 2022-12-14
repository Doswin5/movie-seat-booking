const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const count = document.querySelector('#count')
const total = document.querySelector('#total')
const movieSelect = document.querySelector('#movie')

// let ticketPrice = parseInt(movieSelect.value)
let ticketPrice = +movieSelect.value

// Save selected movie and price
function setMovieDate(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex)
    localStorage.setItem('selectedMoviePrice', moviePrice)
}

// Update Total and Count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected')
    const seatsIndex = [...selectedSeats].map(seat => {
        return [...seats].indexOf(seat)
    })
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))
    const selectedSeatsCount = selectedSeats.length
    count.innerText = selectedSeatsCount
    total.innerText = selectedSeatsCount * ticketPrice
}

// Movie select event 
movieSelect.addEventListener('change', e => {
    // +e.target.value means you are turning its value type to a number
    ticketPrice = +e.target.value
    setMovieDate(e.target.selectedIndex, e.target.value)
    updateSelectedCount()
})

// Seat click event
container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && 
    !e.target.classList.contains('occupied')
    ) {
        e.target.classList.toggle('selected')
        updateSelectedCount()
    }
})


