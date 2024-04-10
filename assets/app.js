function displayToday(data) {
    const box = document.getElementById('today-box');
    box.innerHTML = '';

    const tempText = document.getElementById('city-temp');
    const windText = document.getElementById('city-wind');
    const humidityText = document.getElementById('city-humidity');
    const cityText = document.getElementById('city-name');

    tempText.textContent = data.main.temp.toFixed() + '°F';
    windText.textContent = data.wind.speed.toFixed() + 'MPH';
    humidityText.textContent = data.main.humidity + '%';

    const date = new Date(data.dt * 1000);
    const formatDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    });

    cityText.textContent = data.name + ' ' + formatDate;

    const img = document.createElement('img');
    img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    box.appendChild(img);
}