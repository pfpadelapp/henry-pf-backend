const express = require('express')

const app = express()
const port = process.env.PORT || 9000;


//Routes
app.get("/owner", (req, res) => {
    res.json([
        {
            "id": "owner1",
            "username": "criskol",
            "name": "cristian",
            "email": "cristian@gmail.com",
            "contact": 1456928639,
            "padelField": ["padelC1","padelC2"]
        },
        {
            "id": "owner2",
            "username": "juansin",
            "name": "juan",
            "email": "juan@gmail.com",
            "contact": 3563373796,
            "padelField": ["padelC3"]
        },
        {
            "id": "owner3",
            "username": "jpajon",
            "name": "jose",
            "email": "jose@gmail.com",
            "contact": 4676251471,
            "padelField": ["padelC4","padelC5","padelC6"]
        },
        {
            "id": "owner4",
            "username": "srpablo",
            "name": "pablo",
            "email": "pablo@gmail.com",
            "contact": 4462553567,
            "padelField": ["padelC7"]
        },
        {
            "id": "owner5",
            "username": "mrego",
            "name": "eugenio",
            "email": "eugenio@gmail.com",
            "contact": 6894683567,
            "padelField": ["padelC8","padelC9"]
        },
        {
            "id": "owner6",
            "username": "pedrito",
            "name": "pedro",
            "email": "pedro@gmail.com",
            "contact": 2462361386,
            "padelField": ["padelC10"]
        },
        {
            "id": "owner7",
            "username": "guicho",
            "name": "luis",
            "email": "luis@gmail.com",
            "contact": 2451461568,
            "padelField": ["padelC11"]
        },
        {
            "id": "owner8",
            "username": "billy",
            "name": "bill",
            "email": "bill@gmail.com",
            "contact": 3571858575,
            "padelField": ["padelC12"]
        },
        {
            "id": "owner9",
            "username": "fer",
            "name": "fernanda",
            "email": "fernanda@gmail.com",
            "contact": 6842684612,
            "padelField": ["padelC13","padelC14"]
        },
        {
            "id": "owner10",
            "username": "mary",
            "name": "mariana",
            "email": "mariana@gmail.com",
            "contact": 3532759376,
            "padelField": ["padelC15"]
        }
    ]);
});

app.get("/user", (req, res) =>
{
    res.json([
        {
            "id": 1,
            "name": "Carlos",
            "email": "carlos@gmail.com",
            "contact": 1257542564,
            "username": "carl",
            "lastName": "Sosa",
            "score": 8,
            "history": ["padelC2","padelC7","padelC9","padelC11"]
        },
        {
            "id": 2,
            "name": "Karla",
            "email": "karla@gmail.com",
            "contact": 4571935284,
            "username": "karl",
            "lastName": "Robles",
            "score": 8,
            "history": ["padelC2", "padelC1", "padelC12", "padelC14"]
        },
        {
            "id": 3,
            "name": "Emma",
            "email": "emma@gmail.com",
            "contact": 1364739462,
            "username": "emm",
            "lastName": "Vara",
            "score": 7,
            "history": ["padelC4", "padelC8", "padelC7"]
        },
        {
            "id": 4,
            "name": "Fernanda",
            "email": "fernanda@gmail.com",
            "contact": 3285393653,
            "username": "fer",
            "lastName": "Uribe",
            "score": 9,
            "history": ["padelC10", "padelC6", "padelC12"]
        },
        {
            "id": 5,
            "name": "Roberto",
            "email": "roberto@gmail.com",
            "contact": 1593728574,
            "username": "robert",
            "lastName": "Alvarez",
            "score": 6,
            "history": ["padelC6","padelC13", "padelC1", "padelC9"]
        },
        {
            "id": 6,
            "name": "Enrique",
            "email": "enrique@gmail.com",
            "contact": 1243753943,
            "username": "quique",
            "lastName": "Montoya",
            "score": 8,
            "history": ["padelC10","padelC4", "padelC13"]
        },
        {
            "id": 7,
            "name": "Gustavo",
            "email": "gustavo@gmail.com",
            "contact": 8493756243,
            "username": "gus",
            "lastName": "Galindo",
            "score": 7,
            "history": ["padelC11","padelC14", "padelC8"]
        }
    ]);
});

app.get('/padelFields', (req, res) =>
{
    res.json([
        {
            "id": "padelC1",
            "location": "street 1A, #24",
            "owner": "owner1",
            "image": "https://content.app-sources.com/s/8606158100980568/thumbnails/640x480/Images/Cancha_padel_panoramica_20200530_0020-4146634.jpg",
            "availability": true,
            "type": "type A",
            "score": 8,
            "price": 15
        },
        {
            "id": "padelC2",
            "location": "street 32A, #28",
            "owner": "owner1",
            "image": "https://civideportes.com.co/wp-content/uploads/2020/11/cancha-de-pa%CC%81del-de-vidrio--980x650.jpg",
            "availability": true,
            "type": "type B",
            "score": 9,
            "price": 20
        },
        {
            "id": "padelC3",
            "location": "street 32A, #28",
            "owner": "owner2",
            "image": "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/PETRTNQVQBHJRCDS3B6RF7IJK4.jpg",
            "availability": true,
            "type": "type B",
            "score": 7,
            "price": 15
        },
        {
            "id": "padelC4",
            "location": "street 12C, #17",
            "owner": "owner3",
            "image": "https://content.app-sources.com/s/8606158100980568/thumbnails/640x480/Images/IMG-20200212-WA0059-4079784.jpg",
            "availability": true,
            "type": "type C",
            "score": 9,
            "price": 20
        },
        {
            "id": "padelC5",
            "location": "street 25C, #5",
            "owner": "owner3",
            "image": "https://padelcanchas.com/wp-content/uploads/2021/06/Cancha-Muestra-Aerea.jpg",
            "availability": true,
            "type": "type A",
            "score": 7,
            "price": 25
        },
        {
            "id": "padelC6",
            "location": "street 5B, #13",
            "owner": "owner3",
            "image": "https://content.app-sources.com/s/8606158100980568/thumbnails/640x480/Images/Cancha_padel_wall20080410_0031-4146554.jpg",
            "availability": false,
            "type": "type A",
            "score": 8,
            "price": 20
        },
        {
            "id": "padelC7",
            "location": "street 4B, #12",
            "owner": "owner4",
            "image": "https://padelcanchas.com/wp-content/uploads/2021/06/Vista-Aerea-y-Lateral.jpg",
            "availability": true,
            "type": "type C",
            "score": 8,
            "price": 15
        },
        {
            "id": "padelC8",
            "location": "street 5B, #13",
            "owner": "owner5",
            "image": "https://padelcanchas.com/wp-content/uploads/2021/06/Vista-Aerea-y-Lateral.jpg",
            "availability": false,
            "type": "type B",
            "score": 9,
            "price": 15
        },
        {
            "id": "padelC9",
            "location": "street 5B, #14",
            "owner": "owner5",
            "image": "http://firmsport.com.mx/wp-content/uploads/2020/02/canchas-de-padel2.jpg",
            "availability": true,
            "type": "type A",
            "score": 9,
            "price": 20
        },
        {
            "id": "padelC10",
            "location": "street 5D, #14",
            "owner": "owner6",
            "image": "https://canchasdefutbol7.com/wp-content/uploads/2021/04/canchas-padel-01.jpg",
            "availability": true,
            "type": "type A",
            "score": 8,
            "price": 20
        },
        {
            "id": "padelC11",
            "location": "street 12A, #14",
            "owner": "owner7",
            "image": "https://image.made-in-china.com/155f0j00FvzhtsYcYgqR/2021-New-Model-Cancha-De-Padel-Tennis-Court-China-Youngman-Factory.jpg",
            "availability": false,
            "type": "type B",
            "score": 9,
            "price": 25
        },
        {
            "id": "padelC12",
            "location": "street 11D, #7",
            "owner": "owner8",
            "image": "https://canchasdepadel.com/wp-content/uploads/2020/10/cancha-padel-panoramica-08.png",
            "availability": true,
            "type": "type C",
            "score": 9,
            "price": 20
        },
        {
            "id": "padelC13",
            "location": "street 23B, #28",
            "owner": "owner9",
            "image": "https://sportmaster.mx/wp-content/uploads/cancha-de-padel-1.jpg",
            "availability": true,
            "type": "type A",
            "score": 9,
            "price": 20
        },
        {
            "id": "padelC14",
            "location": "street 23B, #29",
            "owner": "owner9",
            "image": "http://vive.lomasdeangelopolis.mx/wp-content/uploads/2017/01/Deportes02.jpg",
            "availability": true,
            "type": "type A",
            "score": 9,
            "price": 20
        },
        {
            "id": "padelC15",
            "location": "street 17C, #29",
            "owner": "owner10",
            "image": "http://www.mallasolcercas.com/images/uploads/cercado/3508-cancha-de-padel-2.jpg",
            "availability": false,
            "type": "type B",
            "score": 7,
            "price": 15
        },
    ])
})

app.listen(port, () => console.log('server listing in port', port))
