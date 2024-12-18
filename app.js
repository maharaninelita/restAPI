const express = require('express'); 
const bodyParser = require('body-parser'); 
const koneksi = require('./config/database'); 

const app = express(); 

const PORT = process.env.PORT || 4000; 
// Set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/latihanrestapi', (req, res) => {
    // Buat variabel penampung data dan query SQL
    const data = req.body; // Perbaiki penugasan data
    const querySql = 'INSERT INTO latihanrestapi SET ?'; // Perbaiki penugasan querySql

    // Jalankan query
    koneksi.query(querySql, data, (err, rows, fields) => { // Perbaiki penulisan fields
        // Error handling
        if (err) {
            return res.status(500).json({ message: 'Gagal insert data!', error: err }); // Perbaiki penulisan JSON
        }

        // Jika request berhasil
        return res.status(200).json({ message: 'Data berhasil disimpan!', data: rows }); // Tambahkan respons sukses
    });
});

// Buat server
app.listen(PORT, () => console.log("Server running at port: ${PORT}")); // Perbaiki penulisan console.log