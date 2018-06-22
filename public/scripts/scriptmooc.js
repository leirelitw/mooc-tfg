function changeLanguage(language){
  if(language == 0){ //English
      document.getElementById("menu-item-about").innerHTML = "ABOUT";
      document.getElementById("menu-item-graphs").innerHTML = "GRAPHS";
      document.getElementById("menu-item-data").innerHTML = "DATA";
      document.getElementById("menu-item-home").innerHTML = "HOME";
  }
  else if(language == 1){ //Spanish
      document.getElementById("menu-item-about").innerHTML = "ACERCA DE";
      document.getElementById("menu-item-graphs").innerHTML = "GRÁFICOS";
      document.getElementById("menu-item-data").innerHTML = "DATOS";
      document.getElementById("menu-item-home").innerHTML = "INICIO";
  }
  else{
    console.log("No other languages are implemented");
  }
}