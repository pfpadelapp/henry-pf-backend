const express = require('express')

const app = express()
const port = process.env.PORT || 9000;


//Routes
app.get("/", (req, res) => {
    res.json([{"id": 1, "username": "criskol", "name": "cristian", "sports_fields": 2, "Benefits": ["water", "rackets"], "price": 20, "img": "https://padelcanchas.com/wp-content/uploads/2021/06/Vista-de-Esquina.jpg"},
    { "id": 2, "username": "juansin", "name": "juan", "sports_fields": 3, "Benefits": ["water", "rackets", "cap", "sticker"], "price": 20, "img":"https://padelcanchas.com/wp-content/uploads/2021/06/Vista-Aerea-y-Lateral.jpg"},
    {"id": 3, "username": "jpajon", "name": "jose", "sports_fields": 2, "Benefits": ["rackets"], "price": 30, "img":"https://padelcanchas.com/wp-content/uploads/2021/06/Cancha-Muestra-Aerea.jpg"},
    {"id": 4, "username": "srpablo", "name": "pablo", "sports_fields": 4, "Benefits": ["sticker", "rackets"], "price": 15, "img":"https://assets.diarioconcepcion.cl/2021/02/P%C3%A1del-Country.jpg"},
    {"id": 5, "username": "mrego", "name": "eugenio", "sports_fields": 1, "Benefits": [], "price": 30, "img":"https://assets.diarioconcepcion.cl/2020/08/Todo-P%C3%A1del-e1597709845187.jpg"},
    {"id": 6, "username": "pedrito", "name": "pedro", "sports_fields": 1, "Benefits": ["cap", "rackets"], "price": 15, "img": "https://content.app-sources.com/s/8606158100980568/thumbnails/640x480/Images/Cancha_padel_wall20080410_0031-4146554.jpg"},
    {"id": 7, "username": "guicho", "name": "luis", "sports_fields": 3, "Benefits": ["water", "rackets", cap], "price": 25, "img": "https://padelcanchas.com/wp-content/uploads/2021/06/Cancha-Muestra-Aerea.jpg"},
    {"id": 8, "username": "lalo", "name": "eduardo", "sports_fields": 2, "Benefits": ["water", "rackets"], "price": 20, "img": "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/PETRTNQVQBHJRCDS3B6RF7IJK4.jpg"},
    {"id": 9, "username": "fer", "name": "fernanda", "sports_fields": 3, "Benefits": ["water", "rackets", "stickers", "cap"], "price": 25, "img": "https://civideportes.com.co/wp-content/uploads/2020/11/cancha-de-pádel-de-vidrio--980x650.jpg"},
    {"id": 10, "username": "mary", "name": "mariana", "sports_fields": 1, "Benefits": [], "price": 10, "img": "https://content.app-sources.com/s/8606158100980568/thumbnails/640x480/Images/Cancha_padel_panoramica_20200530_0020-4146634.jpg"}])
})

app.listen(port, () => console.log('server listing in port', port))
