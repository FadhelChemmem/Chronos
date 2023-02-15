var rechercheProjet = document.getElementById("rechercheProjet");
var listeProjets = document.getElementById("listeProjets");
var listeNomProjets = new Array();
listeNomProjets = ['1872D_La poste macouria', '1872P_La poste macouria', '1872X_La poste macouria', '1878D_CIG', '1878X_CIG', '18B5D_Crosystème', '18B5X_Crosystème', '18C4D_Cabinet médical', '18C4X_Cabinet médical', '18C9D_chambres funéraires', '18C9P_chambres funéraires', '19004P_CIS Sinnamary', '19004X_CIS Sinnamary', '19015D_Paserelle maripasoula', '19015P_Paserelle maripasoula', '19015X_Paserelle maripasoula', '19032D_Jardins d amelie', '19032P_Jardins d amelie', '19032X_Jardins d amelie', '19041X_Villa BLS', '19042P_Villa Koese', '19042X_Villa Koese', '20006X_Tour CIS Sinnamary', '19051D_Boulangerie', '19055X_Tourmaline', '19089X_Maxidis', '19098X_MILLE PALMIER', '19113X_serre solaire', '20010D_Hangars BADER', '20003P_Tennis club', '20003X_Tennis club', '20008D_Super U', '20003D_Tennis club', '20063X_SCI concrete', '20088X_hangar maintenance spreader', '20010X_Hangars BADER', '20022D_646 concours', '20022P_646 concours', '20022X_646 concours', '20023X_fondation auplata', '20026D_SCCV HADALI', '20026X_SCCV HADALI', '20031X_maison des plages', '20036X_villa Azor', '20038P_Reformer LH2', '20038X_Reformer LH2', '20044D_Belle terre 2', '20044X_Belle terre 2', '20045X_villa Berthelot', '20053D_Bureau la liberté', '20053X_Bureau la liberté', '20055P_Batiment Y', '20008X_Super U', '20064D_67 Mango', '20064P_67 Mango', '20064X_67 Mango', '20067X_Kapline', '20071X_ANAMA', '20087X_Villa les marcelins', '20115X_escalier EZ space', '20094X_Galiléo', '20098bD_CDPS', '20100D_Villa Hermann', '20100X_Villa Hermann', '20101D_Villa Valypo', '20101X_Villa Valypo', '20102D_cuisines caraibes', '20102X_cuisines caraibes', '20103X_Lissajous', '20104P_Maisons ARA', '20112D_Silver PALM', '19051X_Boulangerie', '20117P_BHNS', '20117X_BHNS', '20118bX_Bonaretto', '20118P_Sofavic', '20118X_Sofavic', '20119X_Alto', '20120X_Tri bagage', '20121X_Réhabilitation', '20122X_Frangipane Semsamar', '20123X_Chantier Themis', '20124X_Villas RAIBAUT 2', '20125X_charpente SLM', '20126X_Cuve pompier', '20127P_La rocade', '20128X_SECMON', '21001X_OUEDRAOGO', '21003X_Ouvrages RIBAL TP', '21004D_ELSA', '21005X_KALIMA', '21006D_YAWAPA', '21006P_YAWAPA', '21007P_23 Duplex', '21008X_Mur de soutènement Iris', '21009D_CHEN SLM', '21010P_AMARENCO', '21011X_Toiture Hyper U', '21012X_GPM dalle de répartition', '21012X_GPM dalle de répartition', '21013X_massif antenne', '21014X_Villa les marcelins 2', '21015P_Chronopost', '21016X_Espace consulaire', '21015X_Chronopost', '21021D_Adapei', '21023X_Enseigne JO', '21024X_Pont Roulant Saint Georges', '21017X_Pole famille réha', '21018X_Villa gonnet 2', '21019D_Florilège réhab', '21019P_Florilège réhab', '21020X_Quai super u SLM', '21015D_Chronopost', '21022X_REHAB VILLA JAN DU', '21033P_Les cotonniers', '21042X_Local technique SKF', '21025X_NARACAZ-BLS', '21026X_Pont du RSMA', '21027P_massifs CI-ERYMA', '21043P_Jaquinandi', '21028P_Résidence Harmony', '21029D_MANGO CAY', '21030X_Villa Mme SENE', '21031X_CCDS', '21032D_Le val de bourda', '21033bX_BHNS dalle de répartition', '21037bX_Gaine fumée BMK', '21045X_Mezzanine Prison', '21033X_Les cotonniers', '21034X_Massifs ombrières', '21035X_Rorota', '21036bX_Dalots RD2 SOGEA', '21036X_Villa DUPUY BLS', '21046X_Mezzanine PLAZA', '21037X_Villa KONG BLS', '21038D_Jardins de KYMIA', '21038D_Jardins de Kymia', '21038X_Jardins de Kymia', '21047X_Mezzanine Kiosque', '21041X_Reprise soutènement GUYANAMAZONE', '21052X_BHNS pont', '21043D_Jaquinandi', '21053X_Massifs GIG', '21056X_Hyper U SLM', '21027X_Massifs CI-ERYMA', '21047bD_Extension Lodge Balourou', '21062D_Liberty Gym Extension', '21048X_Dalot michotte', '21049X_BHNS GLO', '21050X_Broca', '21051P_Villa VERDEROSA', '21052X_BHNS pont', '21016bP_CEI de st laurent', '21040X_Pylône Nouragues CNRS', '21054X_Villa Jean-fils BLS', '21055P_Villa Norma', '21067X_SYSTEKO', '21057bD_Parc de Frema', '21057bX_Parc de Frema', '21057X_BHNS Colas', '21069X_support gaine CNES', '21058X_MSAP', '21061X_Rives de soula 2', '21016bD_CEI st laurent', '21076X_plateforme CIG', '21064X_Dalot BALATE', '21065D_Grandroro', '21065X_Grandroro', '21066X_Dalot la ROSERAIE', '21077X_Ecole de Camopi', '21068X_Remplacement alternateur BMK', '21077X_Ecole de Camopi 2', '21070X_Villa Marie dominique', '21071X_Villa Amoda', '21072X_Villa Smith', '21073P_Vivaldi', '21074D_Maison Prevot', '21074X_maison Prevot', '21075X_massif lestage', '21078X_Charpente destockeur', '21083P_Siège Colas', '21095X_Passerelle tresor', '21096X_charpente armé', '21079X_Dalle AVIO', '21080P_MI soula', '21081D_Villa jean marie', '21081X_Villa jean marie', '21082P_SAS hibiscus', '22002P_Mediatheque', '21084X_Ordinaire de kourou', '21085X_Dalot ONF', '21086D_3 bureaux 3 logements', '21086P_3 bureaux 3 logements', '21087X_BHNS Mirza', '21088X_BHNS regards', '21089X_Dalot tigre', '21090X_mur soutènement RD2', '21091X_GPM dalot', '21093D_immeuble Wolf', '21093D_immeuble Wolf', '21093P_immeuble Wolf', '21094X_Mur LYCEE MP', '21033D_Les cotonniers', '21098X_Duty free', '21097X_Lestage PEHD', '21101P_3H st laurent', '21099X_Soutènement megalops', '21100X_gradins SLM', '21111P_Somasco', '21102X_OH MARTYR', '21103X_Villa LI', '21104X_Crique CCDS', '21105X_Clos d\'osiris', '21106X_regard déporté', '21107X_Mur naracaz', '21108X_BHNS Secteur 7', '21109P_Cuve cacao', '21109X_Cuve cacao', '21110X_dalot caniveau ribal gpm', '21114X_Siemens', '21118P_musée du CNES', '21112X_Villas FLY', '21113X_Centre de transit Sinnamary', '21125X_Tirant Mezzanine', '21115P_Raibaut 2', '21116X_La comte RN2', '21117X_Voltalisa Easy box', '21111D_Somasco', '21132X_Toiture Super U SLM', '21134D_Systeko2', '21058bX_Toiture super U Kourou', '22014X_Mezzanine Bader', '21119X_SCU SLM', '21120P_immeuble TSANG', '21121X_muret BA Cogit', '21122X_monte charge', '21123X_Chantalou', '21124X_Villa Bruley', '22019X_charpente SKID', '21126P_Caenis', '22025X_OPRF', '21127X_Massif Mât', '21128X_Flamboyants', '21129X_Hangars Credo', '21130X_CHOG COGIT', '21131P_CMGMISGUYA2', '21131X_CMGMISGUYA2', '22029D_Faisabilité 3H', '21133X_Cloture RABAN', '22021D_Usine Finotte Agri Kourou', '21135X_Massif broyeur', '21136X_Mur CF', '21137X_Salle polyvalente', '22001P_Poste frontalier', '21118D_musée du CNES', '21118D_musée du CNES', '22003D_Résidence Mahe', '22003P_Résidence Mahe', '22003X_Résidence Mahe', '22004D_KOADEG ', '22004P_KOADEG ', '22008X_Piscine Bader', '22011X_Ecole Matoury', '22012X_Credo DDC', '22013D_Astrolabe', '21118D_musée du CNES', '22015P_6 Logements Montravel', '22016D_Villas Cannelle', '22016X_Villas Cannelle', '22018X_Eskol', '21118D_musée du CNES', '22020D_Villa MOANA', '22908X_Local biomasse', '22023D_Immeubles Belova', '22037D_Super U Extension', '22026X_Mur CNES', '22027X_Villa PIDERI', '22039X_STIM', '22030X_Villa PECE', '22036D_17 SAIMIRI', '22036X_17 SAIMIRI', '22041X_Centre nautique', '22038D_Cathy', '22915P_Poste kourou', '22040X_ETS felix eboué', '22045P_ALSG rack', '22042X_semelles TMI', '22043X_Villa Dupuy', '22044D_Carrefour Kourou', '22050X_EDF Lavirot', '22047D_Chenil police', '22048X_Scierie', '22049D_Squash', '22049X_Squach', '21126X_Caenis', '22052X_Piste cyclable', '22055X_Mur de soutènement ribal TP', '22056X_Piscine aquazonia', '22057D_SCCV LES DEUX MONTS', '22058X_Clos ferlette', '22059X_Clos ferlette WL', '22060X_Fondations silot soula', '22061P_Apromeos 44 T2T3', '22062D_FILAOS', '22062X_FILAOS', '22063X_Villa GALLESIO', '22928P_Passerelle piste cyclable', '22065X_SATCOM', '22066X_Local batterie', '22064X_Panneaux basket', '22068X_Villa Marie', '22067X_Toiture SAGIP', '22070D_Stockage 3H Cay', '22070P_Stockage 3H Cay', '22071D_Jardin d\'Eden 3H SLM', '22071P_Jardin d\'Eden 3H SLM', '22072D_ECOLOGIK 3H SLM', '22072P_ECOLOGIK 3H SLM', '22074X_BLAJER LOCATION', '22076D_Bureau BLS', '22073X_Rubis Vito DDC', '22077X_Extension Family Plaza', '22079X_SIAL', '22081X_Tetrix', '22083X_Villa Mezzo', '22084X_Station service CMR BHNS', '22087D_Encombrette', '22087X_Encombrette', '22091X_TISSERAND BLS', '22092X_Sinnamary BLS', '22093X_Hydrolien', '22095X_Villa Raibaut BLS', '22097X_Dalle de service BHNS', '22099X_GPM Adaptation phi 600', '22100X_Soutènement Belya', '22901X_Lestage Eiffage', '22902P_Lestage MINDEF', '22903X_Mur cacao BMC', '22904X_Totem', '22905X_Soutènement college 6', '22906X_Muret technique ZAC Palika', '21062X_Liberty Gym Extension', '22909P_Goulette neuve', '22910P_Extension family Plaza', '22911P_Casino et Labo', '22912X_Rives de soula 3', '22913P_Blue Olive', '22914X_Villa la chaumière', '22075X_Réhabilitation Anne Marie', '22002D_Mediatheque', '22916P_Atelier relais de copaya', '22917P_T3 jumelees', '22918P_Voltalia Kourou', '22919X_Villa THALYA', '22921X_Note d\'épreuve', '22922P_BA 367', '22923X_La palmeraie', '22924P_Careme', '22925P_Bondiri', '22926D_Enduit LEP', '22915D_Poste kourou', '22929P_Projet Hyguane', '22930P_Ecoquartier', '22931P_CAP CABASSOU', '22932X_Collecteur COGIT', '22933P_Wassai', '22934X_Charpente Seet 3D', '22935X_Centrale Larivot', '22936P_Belle terre 35', '22937X_Villa Haut du FORD BLS '];
for (var e of listeNomProjets) {
    var nvProjet = document.createElement("option");
    nvProjet.text = e;
    listeProjets.appendChild(nvProjet);
}
var nvProjet = document.createElement("option");
nvProjet.text = "nouveauprojet";
listeProjets.appendChild(nvProjet);

for (let option of listeProjets.options) {
    option.onmousedown = function (event) { event.preventDefault(); }
    option.onclick = function (event) {
        rechercheProjet.value = option.value;
        listeProjets.style.display = 'none';
    }
};
rechercheProjet.onblur = function (e) {
    setTimeout(500);
    listeProjets.style.display = "none";
}

rechercheProjet.oninput = function (e) {
    if (rechercheProjet.value != "") {
        listeProjets.style.display = 'block';
        let text = rechercheProjet.value.toUpperCase();
        for (let option of listeProjets.options) {
            if (option.value.toUpperCase().indexOf(text) > -1) {
                option.style.display = "block";
            } else {
                option.style.display = "none";
            }
        };
    } else { listeProjets.style.display = "none"; }
}
