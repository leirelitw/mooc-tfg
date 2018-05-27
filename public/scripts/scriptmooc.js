function displayBar(){
  document.getElementById("bar-graphs-container").style.display="block";
  document.getElementById("linear-graphs-container").style.display="none";
  document.getElementById("comparison-graphs-container").style.display="none";
  document.getElementById("maps-container").style.display="none";

  document.getElementById('bar-chart-menu').style.color="white";
  document.getElementById('maps-menu').style.color="grey";
  document.getElementById('linear-graph-menu').style.color="grey";
  document.getElementById('comparison-chart-menu').style.color="grey";
}

function displayComparisonCharts(){
  document.getElementById("bar-graphs-container").style.display="none";
  document.getElementById("linear-graphs-container").style.display="none";
  document.getElementById("comparison-graphs-container").style.display="block";
  document.getElementById("maps-container").style.display="none";

  document.getElementById('bar-chart-menu').style.color="grey";
  document.getElementById('maps-menu').style.color="grey";
  document.getElementById('linear-graph-menu').style.color="grey";
  document.getElementById('comparison-chart-menu').style.color="white";
}

function displayMaps(){

  document.getElementById("bar-graphs-container").style.display="none";
  document.getElementById("linear-graphs-container").style.display="none";
  document.getElementById("comparison-graphs-container").style.display="none";
  document.getElementById("maps-container").style.display="block";

  document.getElementById('bar-chart-menu').style.color="grey";
  document.getElementById('maps-menu').style.color="white";
  document.getElementById('linear-graph-menu').style.color="grey";
  document.getElementById('comparison-chart-menu').style.color="grey";

}

function displayLinear(){
  document.getElementById("bar-graphs-container").style.display="none";
  document.getElementById("linear-graphs-container").style.display="block";
  document.getElementById("comparison-graphs-container").style.display="none";
  document.getElementById("maps-container").style.display="none";

  document.getElementById('bar-chart-menu').style.color="grey";
  document.getElementById('maps-menu').style.color="grey";
  document.getElementById('linear-graph-menu').style.color="white";
  document.getElementById('comparison-chart-menu').style.color="grey";
}
