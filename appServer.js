"use strict";
/// <reference types="express" />
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var app = express();
app.use(express.static("dist"));
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});
app.get("/main.js", function (req, res) {
    res.sendFile(path.join(__dirname, "dist", "main.js"));
});
app.listen(3000, function () {
    console.log("앱 서버가 http://localhost:3000 에서 실행 중입니다.");
});
