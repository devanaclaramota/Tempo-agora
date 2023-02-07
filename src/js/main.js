const btn = document.querySelector('.btn')
btn.addEventListener('click', function(e){
    e.preventDefault()
    let cidade = document.querySelector('.cidade-input').value;
    let name = document.querySelector('.name');
    let temp = document.querySelector('.temp');
    let min = document.querySelector('.min');
    let max = document.querySelector('.max');
    let country = document.querySelector('.country');
   let wind = document.querySelector('.wind');
    let humid = document.querySelector('.humidity');
    let description = document.querySelector('.description')

    let api_key = '0bd102575ffe8913e5d6e09c7f6bcb9c';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&lang=pt_br&appid=${api_key}`;

    fetch(url)
    .then( function (resposta){
        return resposta.json();

    }).then(function(json){
        name.innerHTML = `<i class="bi bi-geo-alt"></i> ${json.name}`
        country.innerHTML =`- ${json.sys.country}` ;
        temp.innerHTML = ` <i class="bi bi-thermometer-sun"></i> ${json.main.temp}`;
        description.innerHTML = json.weather[0].description;
        min.innerHTML = `    Mínima: ${json.main.temp_min} |`;
        max.innerHTML = `    Máxima: ${json.main.temp_max}`;
        wind.innerHTML= `Vento: <i class="bi bi-wind"></i> ${json.wind.speed}`
        humid.innerHTML = ` | Umidade: <i class="bi bi-droplet-half"></i> ${json.main.humidity}`;

    })
})