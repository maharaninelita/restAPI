const mysql = require('mysql');

const koneksi = mysql.createConnection({
    host: 'localhost', // Perbaiki tanda kutip
    user: 'root', // Ganti dengan username MySQL Anda
    password: '', // Ganti dengan password MySQL Anda
    database: 'latihanrestapi' // Perbaiki nama database
});

koneksi.connect((err) => {
    if (err) throw err; // Perbaiki tanda kurung dan penanganan error
    console.log('MySQL Connected...'); // Perbaiki tanda kutip
});


module.exports = koneksi; // Perbaiki penulisan ekspor