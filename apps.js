const key ='aa254962eb51de58ea33fd8ae09c633d';
const apiBase = 'https://api.openweathermap.org/data/2.5/weather';

const getWeatherData = city =>{
    const url = `${apiBase}?q=${city}&units=metric&appid=${key}`
    fetch(url)
    .then(res => res.json())
    .then(data => updateUI(data)) 
    
}
    const searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click',function(){
        const inputCity = document.getElementById('searchText').value;
         getWeatherData(inputCity);
        
    })

function updateUI(data){
    document.getElementById('show-city').innerText = data.name || 'Unknown Location!';
    document.getElementById('show-temp').innerText = data.main.temp;
    document.getElementById('feels-like').innerText = data.main.feels_like;
    document.getElementById('weather-status').innerText = data.weather[0].main;
    document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);

}


//    getWeatherData('Chittagong');