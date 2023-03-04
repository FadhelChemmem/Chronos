var rechercheProjet = document.getElementById("rechercheProjet");
var listeProjets = document.getElementById("listeProjets");
var nouveauProjet = document.getElementById("nvProjet");
var nouveauProjetAppliquer = document.getElementById("nvProjetAppliquer");
var projetAnnuler = document.getElementById("projetAnnuler");
let codeProjetRegEx = /^\d{5}[PDX]$/;
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
    function supprimerchamp() {
      // efface les informations du champ projet
      document.querySelector('#idProjet').closest('td').querySelector('p').innerHTML = "";
      document.querySelector('#nomProjet').closest('td').querySelector('p').innerHTML = "";
      document.querySelector('#dateDebutProjet').closest('td').querySelector('p').innerHTML = "";
      document.querySelector('#dateFinProjet').closest('td').querySelector('p').innerHTML = "";
      document.querySelector('#phaseProjet').closest('td').querySelector('p').innerHTML = "";
      document.querySelector('#etatProjet').closest('td').querySelector('p').innerHTML = "";
      document.querySelector('#lotProjet').closest('td').querySelector('p').innerHTML = "";
      // document.querySelector('#informationProjet').innerHTML = "";
    }


    function remplissageInfoProjet(el) {
      rechercheProjet.value = "";
      for (var e of projetsData) {
        if (e.designation == el) {
          supprimerchamp();
          cacherChampNouveauProjet()
          afficherChampAncienProjet();
          document.querySelector('#idProjet').closest('td').querySelector('p').innerHTML = e.code;
          document.querySelector('#nomProjet').closest('td').querySelector('p').innerHTML = e.libelle;
          document.querySelector('#dateDebutProjet').closest('td').querySelector('p').innerHTML = e.datesDebut;
          if (e.datesFin != "NULL") { document.querySelector('#dateFinProjet').closest('td').querySelector('p').innerHTML = e.datesFin; }

          switch (e.natureProjet) {
            case 1:
              document.querySelector('#phaseProjet').closest('td').querySelector('p').innerHTML = "APD";
              break;
            case 2:
              document.querySelector('#phaseProjet').closest('td').querySelector('p').innerHTML = "DCE";
              break;
            case 3:
              document.querySelector('#phaseProjet').closest('td').querySelector('p').innerHTML = "EXE";
              break;
            default:
              document.querySelector('#phaseProjet').closest('td').querySelector('p').innerHTML = "ND"
          }
          document.querySelector('#lotProjet').closest('td').querySelector('p').innerHTML = e.lots;

          switch (e.etatProjet) {
            case 1:
              document.querySelector('#etatProjet').closest('td').querySelector('p').innerHTML = "En cours";
              break;
            case 2:
              document.querySelector('#etatProjet').closest('td').querySelector('p').innerHTML = "Terminé";
              break;
            case 3:
              document.querySelector('#etatProjet').closest('td').querySelector('p').innerHTML = "Abandonné";
              break;
            default:
              document.querySelector('#etatProjet').closest('td').querySelector('p').innerHTML = "ND";
          }
          // document.querySelector('#informationProjet').innerHTML = e.Informations;
          console.log(e.etatProjet);
        }
      }
    }

    function cacherChampAncienProjet() {
      document.querySelector('#idProjet').closest('td').querySelector('p').hidden = true;
      document.querySelector('#nomProjet').closest('td').querySelector('p').hidden = true;
      document.querySelector('#dateDebutProjet').closest('td').querySelector('p').hidden = true;
      document.querySelector('#dateFinProjet').closest('td').querySelector('p').hidden = true
      document.querySelector('#phaseProjet').closest('td').querySelector('p').hidden = true;
      document.querySelector('#etatProjet').closest('td').querySelector('p').hidden = true;
      document.querySelector('#lotProjet').closest('td').querySelector('p').hidden = true;
    }

    function afficherChampAncienProjet() {
      document.querySelector('#idProjet').closest('td').querySelector('p').hidden = false;
      document.querySelector('#nomProjet').closest('td').querySelector('p').hidden = false;
      document.querySelector('#dateDebutProjet').closest('td').querySelector('p').hidden = false;
      document.querySelector('#dateFinProjet').closest('td').querySelector('p').hidden = false;
      document.querySelector('#phaseProjet').closest('td').querySelector('p').hidden = false;
      document.querySelector('#etatProjet').closest('td').querySelector('p').hidden = false;
      document.querySelector('#lotProjet').closest('td').querySelector('p').hidden = false;
    }

    function cacherChampNouveauProjet() {
      document.querySelector('#idProjet').hidden = true;
      document.querySelector('#nomProjet').hidden = true;
      document.querySelector('#dateDebutProjet').hidden = true;
      document.querySelector('#dateFinProjet').hidden = true;
      document.querySelector('#phaseProjet').hidden = true;
      document.querySelector('#etatProjet').hidden = true;
      document.querySelector('#lotProjet').hidden = true;
      // document.querySelector('#idProjet').value = "";
      // document.querySelector('#nomProjet').value = "";;
      // document.querySelector('#dateDebutProjet').value = "";
      // document.querySelector('#dateFinProjet').value = "";
      // document.querySelector('#phaseProjet').value = "";
      // document.querySelector('#etatProjet').value = "";
      // document.querySelector('#lotProjet').value = "";
    }

    function afficherChampNouveauProjet() {
      document.querySelector('#idProjet').hidden = false;
      document.querySelector('#nomProjet').hidden = false;
      document.querySelector('#dateDebutProjet').hidden = false
      document.querySelector('#dateFinProjet').hidden = false
      document.querySelector('#dateFinProjet').value = "";
      document.querySelector('#dateFinProjet').disabled = true;
      document.querySelector('#phaseProjet').hidden = false;
      document.querySelector('#etatProjet').hidden = false;
      document.querySelector('#lotProjet').hidden = false;
    }

    projetAnnuler.addEventListener("click", function () {
      supprimerchamp();
      cacherChampNouveauProjet()
      afficherChampAncienProjet()
      rechercheProjet.value = "";
      rechercheProjet.disabled = false;
    })

    nouveauProjet.addEventListener("click", function () {
      supprimerchamp();
      cacherChampAncienProjet()
      afficherChampNouveauProjet()
      rechercheProjet.value = "";
      rechercheProjet.disabled = true;
    })

    // function validate(input, regEx) {
    //   if (input.value.match(regEx)) {
    //     input.style.border = "1px solid green";
    //   } else {
    //     input.style.border = "1px solid red";
    //   }
    // }

    document.querySelector('#idProjet').oninput = function () {
      document.querySelector('#idProjet').style.color = "black";
    }

    nvProjetAppliquer.addEventListener("click", function () {
      let objetNouveauProjet = new Object();

      if (document.querySelector('#idProjet').value.match(codeProjetRegEx)) {
        for (var e of projetsData) {
          if (e.code != document.querySelector('#idProjet').value) {

          } else { document.querySelector('#idProjet').style.color = "red"; verifSaisie = 0; return; }
        }
      } else { document.querySelector('#idProjet').style.color = "red"; verifSaisie = 0; return; }

      objetNouveauProjet.code = document.querySelector('#idProjet').value;
      objetNouveauProjet.libelle = document.querySelector('#nomProjet').value;
      objetNouveauProjet.designation = document.querySelector('#idProjet').value + "-" + document.querySelector('#nomProjet').value;
      objetNouveauProjet.datesDebut = document.querySelector('#dateDebutProjet').value;
      objetNouveauProjet.datesFin = "NULL";
      switch (document.querySelector('#phaseProjet').value) {
        case "APD":
          objetNouveauProjet.natureProjet = "1";
          break;
        case "DCE":
          objetNouveauProjet.natureProjet = "2";
          break;
        case "EXE":
          objetNouveauProjet.natureProjet = "3";
          break;
        default:
          objetNouveauProjet.natureProjet = "?"
      }
      objetNouveauProjet.lots = document.querySelector('#lotProjet').value;
      objetNouveauProjet.etatProjet = 2;
      projetsData.push(objetNouveauProjet);
      // var rajoutProjet = document.createElement("option");
      // rajoutProjet.text = objetNouveauProjet.designation;
      // listeProjets.appendChild(rajoutProjet.text);
      console.log(projetsData);
      cacherChampNouveauProjet();
      rechercheProjet.disabled = false;
      afficherChampAncienProjet();
    })
  });
