function updateMap(){
    var variableMap = '';
    var e = document.getElementById("continent-graph-selector");
    var continentMap = e.options[e.selectedIndex].value;

    if(continentMap == "Europe"){
        //countryMOOCsMap
        window.location.href = "/mapsEurope";
    }
    else if(continentMap == "America"){
        window.location.href = "/mapsAmerica";

    }
    else if(continentMap == "Asia"){
        window.location.href = "/mapsAsia";

    }
    else if(continentMap == "Oceania"){
        window.location.href = "/mapsOceania";

    }
    else if(continentMap == "Africa"){
        window.location.href = "/mapsAfrica";

    }
    else {
        window.location.href = "/worldmap";
    }

}