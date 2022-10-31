const express = require("express")
const app = express()
const path = require('path')
const port = 3000
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('express-flash');


app.set('view engine', 'pug')
app.set('views', path.join(__dirname, "/views"))
app.use(express.static(path.join(__dirname, 'public')))
// Middleware for parsing

// const middlewares = [
//   layout(),
//   express.static(path.join(__dirname, 'public')),
//   express.urlencoded({ extended: true }),
//   cookieParser(),
//   session({
//     secret: 'super-secret-key',
//     key: 'super-secret-cookie',
//     resave: false,
//     saveUninitialized: false,
//     cookie: { maxAge: 60000 }
//   }),
//   flash(),
// ];



// routes
app.get("/", (req, res) => {
  let locals = { title: "Main" }
  res.render('index', locals)
})

app.get("/about", (req, res) => {
  let locals = { title: "Jeroen" }
  res.render('aboutme', locals)
})

app.get("/tours", (req, res) => {
  let locals = {
    title: "Tours",
    tours: [
      {
        type: "Stad",
        name: 'Eerste kennismaking',
        duur: 2.5,
        inhoud: 'Wandel over de oudste straten en pleinen van Amsterdam en leer hoe de stad is ontstaan en zich ontwikkelde in 750 jaar.',
        fotos: [
          './img/Amsterdam-Dam-Square.jpg',
          './img/paleis.jpg',
          './img/waag.jpg',
          './img/schreiers-toren.jpg',
        ],
        tbl: 'https://www.toursbylocals.com/Amsterdam-FirstTime-WalkingTour',
      },
      {
        type: "Stad",
        name: 'Jordaan Wandeling',
        duur: 3,
        inhoud: 'Een wandeling door deze bijzondere buurt is altijd weer verrassend. Inclusief bezoek aan één of twee karakteristieke hofjes.',
        fotos: [
          './img/claeszhofje.jpg',
          './img/wester.jpg',
          './img/Johnnyjordaanplein.jpg',
        ],
        tbl: 'https://www.toursbylocals.com/amsterdam-jordaan-walkingtour',
      },
      {
        type: "Stad",
        name: 'Amsterdam Highlights',
        duur: 4,
        inhoud: 'Wandeling door het centrum. Nieuwmarkt, Waterlooplein, Begijnenhof, Dam, langs de grachten, de Westertoren en door de Jordaan.',
        fotos: [
          './img/Schreiers2.jpg',
          './img/dewaag.jpg',
          './img/wester.jpg',
          './img/RijksmuseumAmsterdam-main.jpg',
        ],
        tbl: 'https://www.toursbylocals.com/AmsterdamWalkingTourhighlights',
      },
      {
        type: "Stad",
        name: 'Complete Amsterdam Dag tour',
        duur: 7,
        inhoud: 'Centrum wandeling, Rondvaart, Anne Frank Museum, Jordaan en het Rijksmuseum in één. Boek ruim vantevoren!',
        fotos: [
          './img/amsterdam012.jpg',
          './img/canalcruise2.jpg',
          './img/centraal_station.jpg',
          './img/rembrandthuis01.jpg',
          './img/Anne_Frank.jpg',
          './img/rijks.png',
          './img/melkmeisje.jpg',
        ],
        tbl: 'https://www.toursbylocals.com/canal-tour-amsterdam-with-museums',
      },
      {
        type: "Land",
        name: 'Langs de Amstel',
        duur: 4,
        inhoud: 'Fietsen naar Oudekerk aan de Amstel met bezoek aan de Rembrandthoeve. Bij regen gaan we wandelen of het museum in!',
        fotos: [
          './img/ouderkerk aan de amstel.jpg',
          './img/fietsenAmstel01.jpg',
          './img/rembrandthoeve.jpg',
          './img/rembrandt_molen.jpg',
        ],
        tbl: 'https://www.toursbylocals.com/amstelbikeride',
      },
      {
        type: "Land",
        name: 'Fietsen naar de Zaanse Schans',
        duur: 5,
        inhoud: 'Fietsen door het Twiske naar dit speciale dorp. Inclusief Bezoek aan twee molens. Eventueel lunch (pannenkoeken!).',
        fotos: [
          './img/twiske-amsterdam-2020-©-lily-heaton-3.jpg',
          './img/jongeschaap_1.jpg',
          './img/twiske02.jpg',
          './img/zaanseschan002.jpg',
        ],
        tbl: 'https://www.toursbylocals.com/amsterdamcountrybike',
      },
      {
        type: "Land",
        name: 'Beemster tour',
        duur: 7,
        inhoud: 'Met de auto naar de Zaanse Schans en de Museummolen in Schermerhorn. Lunch in de Rijp en bezoek aan kaasboerderij.',
        fotos: [
          './img/beemster001.jpg',
          './img/beemster002.jpg',
          './img/beemster003.jpg',
          './img/zaanseschan001.jpg',
          './img/zaanseschan002.jpg',
          './img/zaanseschan001.jpg',
          './img/Museummolen-Schermerhorn.jpg',
          './img/derijp_raadhuis.jpg',
          './img/img_bij-ernst2.jpg',
          './img/beemster004.jpg',
        ],
        tbl: 'https://www.toursbylocals.com/daytrip-amsterdam',
      },
      {
        type: "Land",
        name: 'Kastelen',
        duur: 7,
        inhoud: 'Bezoek het Muiderslot, loop over de vesting in Naarden, lunchen in Weesp en daarna nog een bezoek aan het uitbundige kasteel De Haar.',
        fotos: [
          './img/muiderslot.jpg',
          './img/naarden01.jpg',
          './img/dehaar01.jpg',
          './img/dehaar02.jpg',
        ],
        tbl: 'https://www.toursbylocals.com/amsterdamcastles',
      },

    ]
  }

  // console.log(locals.tours)
  res.render('tours', locals)
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

