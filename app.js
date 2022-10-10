const Ecris = document.querySelector('#htmlCode');
const Lis = document.querySelector('#resultatHtml');
const Lis2 = document.querySelector('#resultatHtml2');
let progressBar = document.querySelector(".bar");
let count = 0;


function miroir(){
    let resultat = Ecris.value; // resultat = <b><i><u>BONJ<br>OUR</b></i></u>
    Lis.innerHTML = resultat; 
    let tmp = resultat.replace("<b>","")// tmp = <i><u>BONJ<br>OUR</b></i></u>
    let tmp2 = tmp.replace("</b>","")   // tmp2 = <i><u>BONJ<br>OUR</i></u>
    let tmp3 = tmp2.replace("<i>","")   // tmp3 = <u>BONJ<br>OUR</i></u>
    let tmp4 = tmp3.replace("</i>","")  // tmp4 = <u>BONJ<br>OUR</u>
    let tmp5 = tmp4.replace("<u>","")   // tmp5 = BONJ<br>OUR</u>
    let tmp6 = tmp5.replace("</u>","")  // tmp6 = BONJ<br>OUR
    let tmp7 = tmp6.replace("<br>","")  // tmp7 = BONJOUR 
    let final = tmp7.length             // final = 7  
    Lis2.innerHTML = final; 
  };


  Ecris.addEventListener("keyup", miroir); // Crée un évenement (addEventListener) ou, chaque relachement de touche (keyup) execute la fonction (miroir) 

  // Boutons, appele l'html (document), choisi l'ID spécifique (getElementById) et ajoute une valeur (les balises)
  function gras()
  {
    let htmlCode = document.getElementById("htmlCode").value += "<b></b>"; // appele l'html (document), choisi l'ID spécifique (getElementById) et ajoute une valeur (les balises)
  };
  function italic()
  {
    let htmlCode = document.getElementById("htmlCode").value += "<i></i>";
  };
  function souligner()
  {
    let htmlCode = document.getElementById("htmlCode").value += "<u></u>";
  };
  function revenir()
  {
    let htmlCode = document.getElementById("htmlCode").value += "<br>";
  };
  // Bouton différent pour effacer appel une variable (btn_effacer) créer un evénement (click) et entre la valeur void ("")
let btn_effacer = document.querySelector(".effacer");
  btn_effacer.addEventListener("click", () => {
    Ecris.value = "";
    Lis.textContent = "";

  });
  

// Darkmode, utilise les variables de css (--ecriture, --background et -- border) et les remplace par les couleurs défini.
let toggleTheme = 0;
let btn_dark = document.querySelector(".darkmode");
btn_dark.addEventListener("click", () => {
  if (toggleTheme === 0) {
    btn_dark.innerHTML = "Dark Mode";
    document.documentElement.style.setProperty("--ecriture", "#ffffff");
    document.documentElement.style.setProperty("--background", "#171717")
    document.documentElement.style.setProperty("--border", "#ffffff");
    toggleTheme++;
  } else {
    document.documentElement.style.setProperty("--ecriture", "#171717");
    document.documentElement.style.setProperty("--background", "#f5a741")
    document.documentElement.style.setProperty("--border", "#171717");
    ;
    btn_dark.innerHTML = "Light Mode";
    toggleTheme--;
  }
});

// Barre de progression, ATTENTION une const ne se modifie pas et restera tel qu'elle est définie donc utiliser un let à la place.
Ecris.addEventListener("input", () => {
  count = Lis.textContent.length;
  progressBar.style.width = count * 0.5 + "%";
  if (count > 0 && count <= 100) {
    progressBar.style.backgroundColor = "green";
  } else if (count >= 101 && count <= 170) {
    progressBar.style.backgroundColor = "orange";
  } else {
    progressBar.style.backgroundColor = "red";
  }
});

// Limite de caractère et Pop up
Ecris.addEventListener("keypress", () => {
  if (resultatHtml.textContent.length >= 200) {
    alert("Maximum de caractéres est atteint!!");
  }
});

//Animation survol zone Texte
Ecris.addEventListener("mouseover", mouseOver); // Mouseover, change en entrant la souris du champ visé
Ecris.addEventListener("mouseout", mouseOut);   // Mousout, rétabli en sortant la souris du champ visé

function mouseOver () {
  Ecris.style.backgroundColor = "#ADA897"; // Change la couleur du background de la cible
  Ecris.style.cursor = "pointer"; // Change le curseur de la souris
}
function mouseOut () {
  Ecris.style.backgroundColor = ""; // Rétabli la couleur du background de la cible
  Ecris.style.cursor = ""; // Rétabli le curseur de la souris
}