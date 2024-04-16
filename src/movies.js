// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsArray = moviesArray.map(eachMovie => {
        return eachMovie.director
    })
    return directorsArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergMovies = moviesArray.filter(eachMovie => {
        return eachMovie.director === "Steven Spielberg"
            && eachMovie.genre.includes("Drama")
    })
    const totalSpielbergMovies = spielbergMovies.length
    return totalSpielbergMovies
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0
    const totalScoreAvg = moviesArray.reduce((acc, eachMovie) => {
        if (eachMovie.score) {
            return acc + eachMovie.score
        } else return acc
    }, 0)
    const roundedTotal = +(totalScoreAvg / moviesArray.length).toFixed(2)
    return roundedTotal
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const totalDramaMovies = moviesArray.reduce((acc, eachMovie) => {
        if (eachMovie.genre.includes('Drama')) {
            return acc + 1
        } else return acc
    }, 0)
    if (totalDramaMovies === 0) return 0
    const dramaScoreAvg = moviesArray.reduce((acc, eachMovie) => {
        if (eachMovie.score && eachMovie.genre.includes('Drama')) {
            return acc + eachMovie.score
        } else return acc
    }, 0)
    const roundedTotal = +(dramaScoreAvg / totalDramaMovies).toFixed(2)
    return roundedTotal
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const orderedMovies = new Array(...moviesArray)
    orderedMovies.sort((a, b) => {
        const yearA = a.year
        const yearB = b.year
        const titleA = a.title
        const titleB = b.title
        if (yearA > yearB) return 1
        else if (yearA < yearB) return -1
        else if (yearA === yearB) {
            if (titleA > titleB) return 1
            else if (titleA < titleB) return -1
            else return 0
        }
    })
    return orderedMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const orderedMovies = moviesArray.sort((a, b) => {
        const movieA = a.title
        const movieB = b.title
        if (movieA > movieB) return 1
        else if (movieA < movieB) return -1
        else return 0
    })

    const firstTwentyMovies = orderedMovies.filter((_, index) => {
        return index < 20
    })
    const firstTwentyTitles = firstTwentyMovies.map(elem => {
        return elem.title
    })

    return firstTwentyTitles
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    function minuteConverter(string) {

        let minutes
        const minuteLocation = string.indexOf('min')
        if (string[minuteLocation - 2] === ' ') {
            minutes = +string[minuteLocation - 1]
        } else minutes = +string.substring(minuteLocation - 2, minuteLocation)

        const hourLocation = string.indexOf('h')
        const hours = +string.substring(0, hourLocation)
        const totalMinutes = minutes + (hours * 60)

        return totalMinutes

    }

    const timeConvertedMovies = moviesArray.map((eachMovie) => {
        const timeInString = eachMovie.duration
        const timeInMinutes = minuteConverter(timeInString)

        const updatedMovie = {
            ...eachMovie
        }
        updatedMovie.duration = timeInMinutes

        return updatedMovie
    })

    return timeConvertedMovies
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) return null
    let bestYear
    let bestYearAvg

    const orderedMovies = moviesArray.sort((a, b) => {
        const movieA = a.year
        const movieB = b.year
        return movieA - movieB
    })

    function createArrayByYear(array, year) {
        const subArray = array.filter(elem => {
            return elem.year === year
        })
        return subArray
    }
}