let mode = document.querySelector('.mode')
const body = document.querySelector('body')
const search = document.querySelector('.search-btn')
const input = document.querySelector('.search input')
const temp = document.querySelector('.tempNumerical p')
const wind = document.querySelector('.windNumerical p')
const hum = document.querySelector('.humNumerical p')
let place = document.querySelector('.city')

mode.addEventListener("click",()=>{
    // console.log("hello hemant")
    body.classList.toggle('dark')
})
 
//Urls
const url = 'https://api.openweathermap.org/data/2.5/weather?'
const apiKey = '3e4fc2875579ce2a83c97886d1c72bb3'
let unit = 'units=metric'

let city;
// default
(async function getData() {
    city = 'q=tijara';
    fetch(url + `${city}&appid=${apiKey}&${unit}`)
    .then(res => res.json())
    .then(data =>{
        // let unix = 1754614063;
        // console.log(converter(unix))
        temp.textContent = data.main["temp"]
        wind.textContent = data.wind["speed"]+ " km/h"
        hum.textContent = data.main["humidity"]+ "% " 
        console.log("fetch successfully")
    })
}
)()
search.addEventListener("click",async()=>{
    city =input.value;
    fetch(url + `q= ${city}&appid=${apiKey}&${unit}`)
    .then(res => res.json())
    .then(data =>{

        temp.textContent = data.main["temp"]
        wind.textContent = data.wind["speed"]+ " km/h"
        hum.textContent = data.main["humidity"]+ "% " 
        place.textContent = city;
    })
})