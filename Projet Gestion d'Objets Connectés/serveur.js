var express = require('express')
var fs = require("fs")
var vm = require('vm')
var app = express()

vm.runInThisContext(fs.readFileSync(__dirname + "/public/js/classes.js"))

// Répertoire contenant les données statiques
app.use(express.static(__dirname + '/public'));


// ---------------------------Gestion des Lieux--------------------------------------
var l1 = new Lieu('1','Palais de justice - Best', '2-4 Rue Des Archives', '25412521', '635241', 't1');
var l2 = new Lieu('2','La Mairie - Tours', '80 le gorgeu', '145288', '2365214', 't3');
var l3 = new Lieu('3','Complexe Sportif - Quimper', 'Boulevard Hassan II', '12452125', '963258', 't2');
var Lieux = [l1,l2,l3];
app.get('/Lieux', function(req, res){
res.json(Lieux);
});

// ---------------------------Gestion des Lieux--------------------------------------
// ---------------------------Gestion des Boissons--------------------------------------
var b1 = new Boisson('1','Coca Cola', 'img/coca.ico', 'limonade', 'Limonade Gazeuse');
var b2 = new Boisson('2','Red Bull', 'img/redbull.ico', 'Energetique', 'Limonade Gazeuse');
var b3 = new Boisson('3','Liptone Ice Tea', 'img/liptone.ico', 'Thé', 'Boisson non gazeuse à base de thé glacé');
var Boissons = [b1,b2,b3];
app.get('/Boissons', function(req, res){
res.json(Boissons);
});
// ---------------------------Gestion des Boissons--------------------------------------

// ---------------------------Gestion des Utilisateurs--------------------------------------
var u1 = new Utilisateur('1','Adnane', '40', 'Français', 'C1 C2 C3');
var u2 = new Utilisateur('2','Badr', '80', 'Anglais', 'C1 C2 C3');
var u3 = new Utilisateur('3','Laila', '66', 'Espagnole', 'C1 C2 C3');
var Utilisateurs = [u1,u2,u3];
app.get('/Utilisateurs', function(req, res){
res.json(Utilisateurs);
});
// ---------------------------Gestion des Utilisateurs--------------------------------------


// ---------------------------Gestion des Futs--------------------------------------
var f1 = new Fut('1','18', [b1,b2,b3]);

var Futs = [f1];
app.get('/Futs', function(req, res){
res.json(Futs);
});
// ---------------------------Gestion des Futs--------------------------------------

// ---------------------------Gestion des Tables--------------------------------------
var t1 = new Table('1','ROXY', '48-2C-6A-FE-22-C4', 'OFF', l1, 'img/fond1.ico',f1);
var t2 = new Table('2','ANNIK', 'A6-2C-6A-FG-33-F2', 'FREE', 'BREST', 'img/fond2.ico');
var t3 = new Table('3','CAROLE', 'E8-2C-6B-FE-22-B3', 'DISCONNECTED', 'TOURS', 'img/fond3.ico');
var Tables = [t1,t2,t3];

app.get('/Tables', function(req, res){
res.json(Tables);
});
// ---------------------------Gestion des Tables--------------------------------------


















// Démarrage du serveur
var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Serveur écoute http://localhost:%s', port);
});


// var tables = [
		
// 			{id:1,nom:"Table1",mac:"40-F0-2F-62-3A-A6",etat:"DISCONNECTED",
// 				lieu:{id:12,nom:"Brest",adresse:"Rue des archives",longitude:1252214,latitude:14425412,liste_table:"t1 t2 t3",prix_litre:15},
// 				fut:{id:45,volume:16,boisson:{id:10,fabriquant:"RedBull",logo:"",type:"Energie Sans Alcol",description:"fjhdshfksjhfsjhdfksjdhskhfkjfd",image:""}},
// 				fond:"img/fond1.ico"},
// 			{id:2,nom:"Table2",mac:"40-F0-2F-62-3A-A6",etat:"FREE",lieu:"Tours",fut:2,fond:"img/fond5.ico"},
// 			{id:3,nom:"Table3",mac:"40-F0-2F-62-3A-A6",etat:"OFF",lieu:"Quimper",fut:3,fond:"img/fond2.ico"},
// 			{id:4,nom:"Table4",mac:"40-F0-2F-62-3A-A6",etat:"TAG",lieu:"Nante",fut:1,fond:"img/fond3.ico"},
// 			{id:5,nom:"Table5",mac:"40-F0-2F-62-3A-A6",etat:"DISCONNECTED",lieu:"Angers",fut:3,fond:"img/fond4.ico"},
// 			{id:6,nom:"Table6",mac:"40-F0-2F-62-3A-A6",etat:"FREE",lieu:"Tours",fut:2,fond:"img/fond5.ico"},

// 			];
