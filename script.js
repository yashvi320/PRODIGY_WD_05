

let searchBar = document.getElementById("c");
let city = ""

function getWeather(){
    let url = `http://api.weatherapi.com/v1/current.json?key=4d5cdad1c192451191c112257242505&q=${city}`
    fetch(url)
    .then(res=> res.json())
    .then(data=>result(data))
}

let tempContainer = document.getElementById("temp");


function addtempText(){
    //Clearing previous h2 tags if any
    let len = tempContainer.getElementsByTagName("h2")
    if(len.length>0){
        for(let i=0;i<len.length;i++){
            tempContainer.removeChild(len[i]);
        }
    }

    //adding a new h2 tag
    let h2Tag = document.createElement("h2")
    h2Tag.id = "temp-t"
    tempContainer.appendChild(h2Tag)
}


function result(info){
    addtempText()

    document.getElementById("city-name").innerHTML = city.toUpperCase();
    document.getElementById("temp-t").innerHTML = Math.round(info.current.temp_c) + "°C";
    document.getElementById("humidity-t").innerHTML ="Humidity<br>" + info.current.humidity + "%";
    document.getElementById("heat-index-t").innerHTML = "Heat Index<br>"+info.current.heatindex_c + "°C";
    document.getElementById("wind-d-t").innerHTML = "Wind Direction: " + info.current.wind_dir;
    document.getElementById("wind-s-t").innerHTML = "Wind Speed: "+info.current.wind_kph + "kph";
    
}


function find(){
    city = searchBar.value
    getWeather()
}