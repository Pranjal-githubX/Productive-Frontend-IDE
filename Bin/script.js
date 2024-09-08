files.forEach((file) => {
    lineCountFunc()
    file.addEventListener('click', () => {
        if (file.innerText == "index.html") {
            HTML.style.zIndex = 10;
            CSS.style.zIndex = 2;
            JS.style.zIndex = 0;
            lang.innerText = "HTML"
            currentArea = 'index.html'

            let lines = HTML.value;
            let countOf = 1;

            linesDiv.innerHTML = '';

            for (let n of lines) {
                if (n === "\n") {
                    countOf++;
                }
            }

            for (let i = 1; i <= countOf; i++) {
                let newDiv = document.createElement("div");
                newDiv.style.color = 'gray';
                newDiv.innerText = i;
                linesDiv.append(newDiv);
            }
            lineCounter.innerHTML = `lines: ${countOf}`
            // lineCounter.innerHTML = ""

            let len = lines.split(" ").length - 1;
            spaceDiv.innerText = `spaces: ${len}`;

            syncScroll();

        } else if (file.innerText == "style.css") {
            CSS.style.zIndex = 10;
            HTML.style.zIndex = 2;
            JS.style.zIndex = 1;
            lang.innerText = "CSS"
            currentArea = 'style.css'

            let lines = CSS.value;
            let countOf = 1;

            linesDiv.innerHTML = '';

            for (let n of lines) {
                if (n === "\n") {
                    countOf++;
                }
            }

            for (let i = 1; i <= countOf; i++) {
                let newDiv = document.createElement("div");
                newDiv.style.color = 'gray';
                newDiv.innerText = i;
                linesDiv.append(newDiv);
            }
            lineCounter.innerHTML = `lines: ${countOf}`

            let len = lines.split(" ").length - 1;
            spaceDiv.innerText = `spaces: ${len}`;
            syncScroll();
        } else if (file.innerText == "script.js") {
            JS.style.zIndex = 10;
            HTML.style.zIndex = 2;
            CSS.style.zIndex = 1;
            lang.innerText = "JS"
            currentArea = 'script.js'

            let lines = JS.value;
            let countOf = 1;

            linesDiv.innerHTML = '';

            for (let n of lines) {
                if (n === "\n") {
                    countOf++;

                }
            }

            for (let i = 1; i <= countOf; i++) {
                let newDiv = document.createElement("div");
                newDiv.style.color = 'white';
                newDiv.innerText = i;
                linesDiv.append(newDiv);
            }
            lineCounter.innerHTML = `lines: ${countOf}`
            let len = lines.split(" ").length - 1;
            spaceDiv.innerText = `spaces: ${len}`;
            syncScroll();
        }
        // Highlight clicked file tab
        files.forEach((e) => {
            e.classList.remove("active");
        });
        file.classList.add("active");
    });

});



runBtn.addEventListener("click", () => {
    outputFunc()
})
function outputFunc() {
    document.querySelectorAll("textarea").forEach((textarea) => {
        textarea.addEventListener('input', () => {
            let combinedCode = `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <style>${CSS.value}</style>
            </head>
            <body>
                ${HTML.value}
                <script>${JS.value}</script>
            </body>
            </html>`;
            iframe.srcdoc = combinedCode;

        });
    });
}
runBtn.addEventListener("click", () => {
    if (isopen == false) {
        output.style.top = '0';
        runBtn.innerText = "Code Back";
        isopen = true;
        // outputFunc();
        output.style.zIndex = 20; // Adjust z-index of output div
        // Adjust z-index of textareas
        HTML.style.zIndex = 0;
        CSS.style.zIndex = 0;
        JS.style.zIndex = 0;
    } else {
        output.style.top = '-100vh';
        runBtn.innerText = "Run Code";
        isopen = false;
        output.style.zIndex = 0; // Adjust z-index of output div
        files.forEach((e) => {
            if (e.innerText === "index.html") {
                if (e.classList.contains("active")) {
                    console.log(true + " html");
                    HTML.style.zIndex = 3
                    CSS.style.zIndex = 2
                    JS.style.zIndex = 2
                    // HTML.style.zIndex = 3
                } else {
                    console.log("Not found in HTML");
                }
            } else if (e.innerText === "style.css") {
                if (e.classList.contains("active")) {
                    console.log(true + " CSS");
                    CSS.style.zIndex = 3
                    JS.style.zIndex = 2
                    HTML.style.zIndex = 2
                } else {
                    console.log("Not found in CSS");
                }
            } else if (e.innerText === "script.js") {
                if (e.classList.contains("active")) {
                    console.log(true + " JS");
                    CSS.style.zIndex = 2
                    JS.style.zIndex = 2
                    HTML.style.zIndex = 2
                } else {
                    console.log("Not found in JS");
                }
            }
        });

    }
});
// outputFunc();

files.forEach((e) => {
    e.addEventListener('click', () => {
        lineAdder()
    })
})
editors.forEach((e) => {
    e.addEventListener("scroll", () => {
        let lineDivs = e.parentElement.querySelectorAll(".line div");
        let scrollTop = e.scrollTop;
        let lineHeight = parseInt(getComputedStyle(e).lineHeight);

        lineDivs.forEach((lineDiv, index) => {
            lineDiv.style.top = `${index * lineHeight + scrollTop}px`;
        });
    });
});

function syncScroll() {
    const textareas = document.querySelectorAll("textarea");
    textareas.forEach((textarea) => {
        textarea.addEventListener("scroll", () => {
            const linesDiv = textarea.parentElement.querySelector(".line");
            linesDiv.scrollTop = textarea.scrollTop;
        });
    });
}

function lineAdder() {
    editors.forEach((e) => {
        e.addEventListener("input", () => {
            let lines = e.value;
            let countOf = 1;

            linesDiv.innerHTML = '';

            for (let n of lines) {
                if (n === "\n") {
                    countOf++;
                }
            }

            for (let i = 1; i <= countOf; i++) {
                let newDiv = document.createElement("div");
                newDiv.style.color = 'grey';
                newDiv.innerText = i;
                linesDiv.append(newDiv);
            }

            syncScroll(); // Ensure syncScroll is called after lines are added
        });
    });
}

function lineCountFunc() {
    document.querySelectorAll("textarea").forEach((e) => {
        e.addEventListener('input', () => {
            let lines = e.value;
            let len = lines.split(" ").length - 1;
            spaceDiv.innerText = `spaces: ${len}`;
            let countOf = 1;
            for (let name of lines) {
                if (name === "\n") {
                    countOf++;
                }
            }
            lineCounter.innerText = "lines: " + countOf;
        });
    });
}

syncScroll();
lineAdder();
lineCountFunc();

document.querySelectorAll("textarea").forEach((f) => {
    f.addEventListener("keydown", (e) => {
        if (e.key === "{") {
            e.preventDefault();
            const textarea = e.target;
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;

            // Insert "{}" and place the cursor between them
            textarea.value = textarea.value.substring(0, start) + "{}" + textarea.value.substring(end);
            // Set the cursor position between the braces
            textarea.selectionStart = textarea.selectionEnd = start + 1;
        }
    })
});



document.querySelectorAll("textarea").forEach((e) => {
    e.style.fontSize = "18px"
})
document.querySelector(".box>input").addEventListener("input", () => {
    document.querySelectorAll("textarea").forEach((e) => {
        e.style.fontSize = document.querySelector(".box>input").value + "px"
    })
})