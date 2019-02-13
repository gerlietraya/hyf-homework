let numbers = [1, 2, 3, 4];
let newNumbers = [];


const oddNumber = numbers.filter(number => number % 2 !== 0).map(number => number * 2);
// console.log(oddNumber);
console.log("The doubled numbers are ", oddNumber);
// Using this json file as the source, build a function which does the following:
const url = 'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json'
//getting the movie titles//
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then((res) => res.json())
    .then((movies) => {
       const movieRatings = movies.map((movie) => movie.rating)
       console.log(movieRatings)
    })
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then((res) => res.json())
    .then((movies) => {    
        const goodMovies = movies.filter(goodMovies => goodMovies.rating >= 7);
        const averageMovies = movies.filter(averageMovies => averageMovies.rating >= 4 && averageMovies.rating < 7);
        const badMovies = movies.filter(badMovies => badMovies.rating < 4);
        console.log(goodMovies);
        console.log(averageMovies);
        console.log(badMovies);
        const movies80to89 = movies.filter(movies80to89 => movies80to89.year > 80 && movies80to89 < 89);
        console.log(movies80to89);
        const movies80to89summary = movies.map(movies80to89 => movies80to89.length);
        console.log(movies80to89summary)
        
    })