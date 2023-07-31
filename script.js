let weather = {
'apiKey':'178e086d1b0999a8cfc00a1df759138e',


fetchWeather:function(city)
{
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+
    city+
   '&units=metric&appid='+
    this.apiKey
    )
    .then ((response) => {
        return response.json();
      })
      .then((data) => {
        this.showWeather(data);
      })
},
showWeather : function(data){
const {name} = data;
const {icon, description} = data.weather[0];
const {temp, humidity} = data.main;
const {speed} = data.wind;
document.querySelector('.city').innerText = 'Weather in ' + name;
document.querySelector('.temp').innerText = temp + ' °C';
document.querySelector('.icon').src = 'https://openweathermap.org/img/wn/' + icon +'.png';
document.querySelector('.description').innerText = description;
document.querySelector('.wind').innerText = 'Wind: ' + speed + ' m/s';
document.querySelector('.humidity').innerText = 'Humidity: ' + humidity + ' %'
},

search : function(){
  this.fetchWeather( document.querySelector('.searchBar').value);
}}

document.querySelector('.search-button').addEventListener("click", function(){weather.search()})

let picture = {
    'apiKey': 'sYVjdXOynmIvd_OMEKdgMF9nmNRT054lEPybDimw9UM',
    fetchPicture: function(){
        fetch("https://api.unsplash.com/photos/?client_id=sYVjdXOynmIvd_OMEKdgMF9nmNRT054lEPybDimw9UM").then((response)=>response.json)
        .then((data) => console.log(data));
    }
    
}