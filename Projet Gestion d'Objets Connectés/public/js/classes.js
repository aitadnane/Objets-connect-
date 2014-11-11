function Table(id,nom, mac, etat, lieu, fond,fut) {
	this.id = id;
	this.nom = nom;
	this.mac = mac;
	this.etat = etat;
	this.lieu = lieu;
	this.fond=fond;
	this.fut=fut;
}


function Lieu(id,nom, adresse, latitude, longitude, liste_table) {
	this.id = id;
	this.nom = nom;
	this.adresse=adresse;
	this.latitude=latitude;
	this.longitude=longitude;
	this.liste_table=liste_table
}



function Fut(id, volume, boisson) {
	this.id = id;
	this.volume=volume;
	this.boisson=boisson;
}


function Boisson(id, fabricant, logo, type, descriptif) {
	this.id = id;
	this.fabricant=fabricant;
	this.logo=logo;
	this.type=type;
	this.descriptif=descriptif;
}

function Utilisateur(id, nom, credit_courant, langue_defaut, liste_consommation) {
	this.id = id;
	this.nom=nom;
	this.credit_courant=credit_courant;
	this.langue_defaut=langue_defaut;
	this.liste_consommation=liste_consommation;
}