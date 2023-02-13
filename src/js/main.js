const btn = document.querySelector('.btn')
btn.addEventListener('click', function(e){
    e.preventDefault()
    let background = document.querySelector('.results')
    let datahoje = document.querySelector('.data')
    let cidade = document.querySelector('.cidade-input').value;
    let name = document.querySelector('.name');
    let temp = document.querySelector('.temp');
    let min = document.querySelector('.min');
    let max = document.querySelector('.max');
   let wind = document.querySelector('.wind');
    let humid = document.querySelector('.humidity');
    let description = document.querySelector('.description')

    let api_key = '0bd102575ffe8913e5d6e09c7f6bcb9c';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&lang=pt_br&appid=${api_key}`;

    //pegando a data
    let data = new Date()
    let dia = String(data.getDate()).padStart(2,'0')
    let mes = String(data.getMonth() + 1 ).padStart(2, '0')
    let ano = data.getFullYear();
    let dataAtual = `${dia}/${mes}/${ano}`

    datahoje.innerHTML = dataAtual
   

    fetch(url)
    .then( function (resposta){
        return resposta.json();

    }).then(function(json){

        name.innerHTML = `<i class="bi bi-geo-alt"></i> ${json.name}`
        temp.innerHTML = ` <i class="bi bi-thermometer-sun"></i> ${json.main.temp}`;
        description.innerHTML = json.weather[0].description;
        min.innerHTML = `    Mínima: ${json.main.temp_min} |`;
        max.innerHTML = `    Máxima: ${json.main.temp_max}`;
        wind.innerHTML= `Vento: <i class="bi bi-wind"></i> ${json.wind.speed}`
        humid.innerHTML = ` | Umidade: <i class="bi bi-droplet-half"></i> ${json.main.humidity}`;

        let controlBackColor = json.main.temp

        if( controlBackColor < 10){
            background.style.backgroundImage = 'linear-gradient(to bottom, #ffff, #cccc)'
        } else if(controlBackColor < 16){
            background.style.backgroundImage = 'linear-gradient(to bottom, #ffff, #5d6b89cc)'
        } else if( controlBackColor > 16 && controlBackColor < 24){
            background.style.backgroundImage = 'linear-gradient(to bottom, #ffff, #378dcfcc)'
        }else{
            background.style.backgroundImage = 'linear-gradient(to bottom, #ffff,  #e9ee52e9)'
        };

        


    }).catch(function(error){
        alert('A cidade buscada não se encontra em nossa base de dados')
    })
    
    
})