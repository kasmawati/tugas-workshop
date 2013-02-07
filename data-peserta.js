var databaseUrl = "localhost/mydb";
var collections = ["dbtugas"];
var db = require("mongojs").connect(databaseUrl, collections);

// daftar peserta TBSW 8 HMJTI STMIK AKAKOM
db.dbtugas.find({nomor: "095410191"}, function(err, dbtugas) {
  if( err || !dbtugas) console.log("nomor mahasiswa sudah ada 095410191");
  else dbtugas.forEach( function(emps) {
    console.log(emps);
  });
});

// menyimpan daftar peserta TBSW 8: 
db.dbtugas.save({name : "kasmawati", address : "giwangan", password: "kasmacantik", sex: "vemale"}, function(err, saved) {
  if( err || !saved ) console.log("peserta '095410191' gagal disimpan");
  else console.log("Data peserta '095410191' tersimpan");
});

// mengupdate data peserta: 095410191
db.dbtugas.update({name : "emeralda"}, {$set: {address: "blok O"}}, function(err, updated) {
  if( err || !updated ) console.log("Data peserta '095410073' gagal diperbaharui");
  else console.log("Data '095410073' berhasil diperbaharui");
});


