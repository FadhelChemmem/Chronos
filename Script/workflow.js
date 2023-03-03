var rechercheProjet = document.getElementById("rechercheProjet");
var listeProjets = document.getElementById("listeProjets");

fetch("../Script/dataP.json")
  .then(function (res) {
    return res.json();
  })
  .then(function (projetsData) {
    //charger la liste des projets dans la liste déroulante
    for (var e of projetsData) {
      var nvProjet = document.createElement("option");
      nvProjet.text = e.designation;
      listeProjets.appendChild(nvProjet);
    }
    // selection directe de la liste des projets
    for (let option of listeProjets.options) {
      option.onmousedown = function (event) {
        event.preventDefault();
      };
      //click sur le projet
      option.onclick = function (event) {
        rechercheProjet.value = option.value;
        listeProjets.style.display = "none";
        remplissageInfoProjet(option.value);
      };
    }
    //appui hors du champ de recherche pour masquer la liste
    rechercheProjet.onblur = function (e) {
      setTimeout(500);
      listeProjets.style.display = "none";
    };
    //lors de la saisie dans le champ de recherche
    rechercheProjet.oninput = function (e) {
      if (rechercheProjet.value != "") {
        listeProjets.style.display = "block";
        let text = rechercheProjet.value.toUpperCase();
        for (let option of listeProjets.options) {
          if (option.value.toUpperCase().indexOf(text) > -1) {
            option.style.display = "block";
          } else {
            option.style.display = "none";
          }
        }
      } else {
        listeProjets.style.display = "none";
      }
    };
    function remplissageInfoProjet(el) {
      for (var e of projetsData) {
        if (e.designation == el) {

          console.log(e.code);
        }
      }
    }
  });
