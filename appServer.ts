/// <reference types="express" />

import { Request, Response } from "express";

const express = require("express")
const path = require("path");
const app = express();



app.use(express.static("dist"));
app.get("/", (req:Request, res:Response) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.get("/main.js", (req:Request, res:Response) => {
  res.sendFile(path.join(__dirname, "dist", "main.js"));
});

app.listen(3000, () => {
  console.log("앱 서버가 http://localhost:3000 에서 실행 중입니다.");
});
