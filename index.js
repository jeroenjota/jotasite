const express = require("express")
const app = express()
const path = require('path')
const port = 3000
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('express-flash');
const db = require('./database')


// de globale arrays met tour data
// let tours = []
// let fotos = []

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, "/views"))
app.use(express.static(path.join(__dirname, 'public')))

// routes
app.get("/", (req, res) => {
  let locals = { title: "Home" }
  res.render('index', locals)
})

app.get("/about", (req, res) => {
  let locals = { title: "Jeroen" }
  res.render('aboutme', locals)
})

app.get("/conditions", (req, res) => {
  let locals = { title: "Voorwaarden" }
  res.render('voorwaarden', locals)
})

app.get("/tours", (req, res) => {
  // open de recordsets tours en fotos 
  // tours is een tabel
  let qryTours = "select t.id, t.tournaam, t.duur, t.omschrijving, t.soort, t.tblLink "
  qryTours += " from tours t where actief = true order by t.duur"
  db.query(qryTours, (err, tours) => {
    if (err) throw err;
    // tourfotos is een view 
    let qryFotos = "select tourID, foto from tourfotos ORDER BY tourID, volgorde "
    db.query(qryFotos, (err, fotos) => {
      if (err) throw err;
      let locals = {
        title: "Tours",
        tours: tours,
        fotos: fotos
      }
      res.render('tours', locals)
    })
  })
})

app.post('/antwoord', (req, res) => {
  const data = {
    naam: req.body.naam,
    email: req.body.email,
    opmerking: req.body.opmerking
  }
  console.log(data.naam, data.email, data.opmerking)
  if (data.naam > "" && data.email > "")
    res.render('index', { msg: "Bericht is verstuurd." })
  else {
    res.render('index', { msg: "Controleer uw invoer" })
  }

})

app.get("*", (req, res) => {
  res.send("<h1>Pagina onbekend<h1>")
})

// server
app.listen(port, () => {
  console.log("Server gestart op poort " + port)
})

