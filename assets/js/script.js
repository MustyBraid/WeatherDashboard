let i = 0
let key = 'ADD KEY HERE'
let lang = 'en'
let units ='metric'

$(document).ready(() => {
    $("#searchButton").click((event) => {
        let cityName = $('#searchBar').val();
        localStorage.setItem('item' + i, cityName);
        //location = fetchLocation(cityName);
        //fetchWeather(location);
        //showWeather(weather);
        document.getElementById('history'+i).innerHTML = localStorage.getItem('item'+i);
        i ++ ;
        console.log(i);
        if (i > 4) {
            i = 0;
        }
    });
});

function fetchWeather(cityLocation) {
    //not sure if this is out of date api version
    let url = 'http://api.openweathermap.org/data/2.5/onecall?'
    fetch(url)

    .then(resp=> {
        if(!resp.ok) throw new Error(resp.statusText);
        return resp.json();
    })

    .then(data=>{
        showWeather(data)
    })
    .catch(console.err)
}

function showWeather(data) {

}

function fetchLocation (cityName) {
    let url = 'open weather geocoding api'
    fetch(url)

    .then(resp=> {
        if(!resp.ok) throw new Error(resp.statusText);
        return resp.json();
    })

    .then(data=> {
        //grab the hecking latitude and longitude
    })
}


//have to fetch geolocation before fetching openweather, because nothing is easy

