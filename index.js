const express = require("express")
const app = express()
const path = require('path')
const port = 3000

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, "/views"))
app.use(express.static(path.join(__dirname, 'public')))

// routes
app.get("/", (req, res) => {
  let locals = { title: "Main" }
  res.render('index', locals)
})

app.get("/tours", (req, res) => {
  let locals = {
    title: "Tours",
    tours: [
      {
        type: "Stad",
        name: 'Eerste kennismaking',
        duur: 2.5,
        inhoud: 'Wandel over de oudste straten en pleinen van Amsterdam en leer hoe de stad is ontstaan en zich ontwikkelde in 750 jaar',
        foto: './img/Amsterdam-Dam-Square.jpg',
        tbl: 'https://www.toursbylocals.com/Amsterdam-FirstTime-WalkingTour',
      },
      {
        type: "Stad",
        name: 'Jordaan Wandeling',
        duur: 3,
        inhoud: 'Een wandeling door deze bijzondere buurt is altijd weer verrassend. Inclusief bezoek aan één of twee karakteristieke hofjes.',
        foto: './img/claeszhofje.jpg',
        tbl: 'https://www.toursbylocals.com/amsterdam-jordaan-walkingtour',
      },
      {
        type: "Stad",
        name: 'Amsterdam Highlights',
        duur: 4,
        inhoud: 'Langere wandeling door het centrum en de Jordaan. \nOver de Nieuwmarkt, het Waterlooplein, het Begijnenhof, de Dam, langs de grachten met de Westertoren en door de Jordaan',
        foto: './img/dewaag.jpg',
        tbl: 'https://www.toursbylocals.com/AmsterdamWalkingTourhighlights',
      },
      {
        type: "Stad",
        name: 'Complete Amsterdam Day tour',
        duur: 7,
        inhoud: 'Centrum wandeling, Rondvaart, Anne Frank Museum, Jordaan en het Rijksmuseum in één.',
        foto: './img/amsterdam012.jpg',
        tbl: 'https://www.toursbylocals.com/canal-tour-amsterdam-with-museums',
      },
      {
        type: "Land",
        name: 'Langs de Amstel',
        duur: 4,
        inhoud: 'Fietsen naar Oudekerk en bezoek de Rembrandthoeve',
        foto: './img/ouderkerk aan de amstel.jpg',
        tbl: 'https://www.toursbylocals.com/amstelbikeride',
      },
      {
        type: "Land",
        name: 'Fietsen naar de Zaanse Schans',
        duur: 5,
        inhoud: 'Prachtige route door het Twiske naar de molens. Inclusief bezoek aan twee molens. Eventueel lunch (pannenkoeken!) en weer terug naar de grote stad',
        foto: './img/beemster003.jpg',
        tbl: 'https://www.toursbylocals.com/amsterdamcountrybike',
      },
      {
        type: "Land",
        name: 'Beemster tour',
        duur: 7,
        inhoud: 'Met de auto naar de Zaanse Schans en de Museummolen in Schermerhorn. Lunchen in de Rijp en afsluitend bezoek aan kaasboerderij De Irenehoeve',
        foto: './img/jongeschaap_1.jpg',
        tbl: 'https://www.toursbylocals.com/daytrip-amsterdam',
      },
      {
        type: "Land",
        name: 'Kastelen',
        duur: 7,
        inhoud: 'Bezoek het Muiderslot, lunchen in Weesp, daarna nog een bezoek aan het uitbundige kasteel De Haar.',
        foto: './img/dehaar02.jpg',
        tbl: 'https://www.toursbylocals.com/amsterdamcastles',
      },

    ]
  }

  // console.log(locals.tours)
  res.render('tours', locals)
})

app.get("*", (req, res) => {
  res.send("<h1>Pagina onbekend<h1>")
})


// server
app.listen(port, () => {
  console.log("Server gestart op poort " + port)
})

