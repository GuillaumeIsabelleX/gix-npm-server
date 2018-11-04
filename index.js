//Server code
var serverName = "MyServer";
var port = 3000;

console.log("------------------------");
console.log(serverName + " Server Starting...");
var debug = false;
var app = require("express")(),
  http = require("http").Server(app),
  cors = require("cors"),
  io = require("socket.io")(http),
  mysql = require("mysql"),
  config = require("config");

var fs = require("fs");

var sleep = require("sleep");
var eventName = "";
// var express = require("express");
// var app = express();

var moment = require("moment");

var tlid = moment().format("YYMMDDHHMMSS");

var idug = uuidv1();

//config
var chatConfig = config.get("ChatConfig");
//-------------------------------------------
//-- Routing index.html
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

//-- Routing js
app.get("/js", function(req, res) {
  res.sendFile(__dirname + "/index-app.js");
});

//-- Routing css
app.get("/css", function(req, res) {
  res.sendFile(__dirname + "/style.css");
});

http.listen(port, function() {
  console.log("listening on *:" + port);

  eventName = "started server";
  var msg = new Object();
  msg.name = eventName;

  io.emit(eventName, msg);
});
