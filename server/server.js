// express 모듈 호출
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
 
// http://localhost:4000/ 으로 접속 시 응답메시지 출력
app.get('/', (req,res) => {
    res.send('Server Response Success');
})
 
app.listen(PORT, () => {
    console.log(`Server run : http://localhost:${PORT}/`)
})



/*
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded((extended:true)));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port : conf.port,
    database : conf.database
});
connection.connect();

app.get('/api/customers', (req,res) => {
    connection.query(
        "select * from (데이터베이스 이름)",
        (err, rows, fields) => {
            res.send(rows);
        }
    )
});

app.listen(port, () => console.log('Listening on port $(port)'));
*/
