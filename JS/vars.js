var runBtn = document.querySelector(".bottom button");
var isopen = false;
var output = document.querySelector(".output");
var iframe = document.querySelector(".output iframe");
var files = document.querySelectorAll(".file");
var HTML = document.querySelector("#html");
var CSS = document.querySelector("#css");
var JS = document.querySelector("#js");
var lang = document.querySelector(".bottom #lang")
var editors = document.querySelectorAll("textarea")
var lineCounter = document.querySelector(".bottom #lineCount")
var currentArea = 'index.html'
var lineCode = 10
var linesDiv = document.querySelector(".line")
var currTab = 'html'
var spaceDiv = document.querySelector("#spaceCount")
var isExpanded = false
var gridtype = 'default'
var main = document.querySelector("main")
var output = document.querySelector(".output")
var arr = [main, output]
var isAlerted = false
var dialogBox = document.querySelector(".dialog")
var gridBtn = document.querySelector(".ri-arrow-left-right-line")
var bars = document.querySelectorAll(".bar")
var box = document.querySelectorAll(".box")
var workspace = document.querySelector(".filesbar")
var logos = ["HTML.png", "CSS.webp", "JS.svg"]
var isExpanded = false
var isClosed = false
var sidebar = document.querySelector(".sidebar")
var minbarIcon = document.querySelector('#min-bar')
var arr2 = ["minWidth", "width"]
var rightBar = document.querySelector(".rightBar")
var handleIcon = document.querySelector("#handleIcon")
var isActive = false
var filesTitle = document.querySelectorAll(".file>h1")
const htmlImg = document.querySelector("#html-img");
const cssImg = document.querySelector("#css-img");
const jsImg = document.querySelector("#js-img");
var lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus esse sequi tempore quod ipsa dignissimos veniam harum voluptates tenetur, eveniet quidem obcaecati distinctio doloremque voluptatem! Explicabo id fugiat earum at."
var keywords = []