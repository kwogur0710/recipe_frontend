const express = require("express");
const router = express.Router();
const request = require("request");
const converter = require("xml-js");

let url = 'http://openapi.foodsafetykorea.go.kr/api/3e16c996818747e3b342/COOKRCP01/xml/1/200';

router.get("/", (req, res) => {
    request(
        {
            url: url,
            method:"GET",
        },
        (error, response, body) => {
            const xmlToJson = converter.xml2json(body);
            res.send(xmlToJson);
        }
    );
});

module.exports = router;