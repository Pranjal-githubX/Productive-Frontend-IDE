function runDefault() {
    box[0].classList.add("boxactive")
    editors.forEach((e) => {
        e.setAttribute("spellcheck", "false")
    })
    document.querySelectorAll("img").forEach(e => {
        e.setAttribute("draggable", "false")
    })
    

}
gsap.from(".file", {
    opacity: 0,
    duration: 1,
    stagger: 0.3
})
function fileListeners() {

    files.forEach((file) => {
        lineCounterUpdation()
        file.addEventListener('click', () => {
            if (file.innerText == "index.html") {
                HTML.style.zIndex = 10;
                CSS.style.zIndex = -1;
                JS.style.zIndex = -2;
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

                let len = lines.split(" ").length - 1;
                spaceDiv.innerText = `spaces: ${len}`;
                box.forEach((e) => {
                    if (e.classList.contains("boxactive")) {
                        e.classList.remove("boxactive")
                    }
                })
                box[0].classList.add("boxactive")

                syncScroll();

            } else if (file.innerText == "style.css") {
                CSS.style.zIndex = 10;
                HTML.style.zIndex = -1;
                JS.style.zIndex = -2;
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
                lineCounter.innerHTML = `Lines: ${countOf}`

                let len = lines.split(" ").length - 1;
                spaceDiv.innerText = `Spaces: ${len}`;
                syncScroll();
                box.forEach((e) => {
                    if (e.classList.contains("boxactive")) {
                        e.classList.remove("boxactive")
                    }
                })
                box[1].classList.add("boxactive")

            } else {
                JS.style.zIndex = 10;
                HTML.style.zIndex = -2;
                CSS.style.zIndex = -1;
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
                lineCounter.innerHTML = `Lines: ${countOf}`
                let len = lines.split(" ").length - 1;
                spaceDiv.innerText = `spaces: ${len}`;
                syncScroll();
                box.forEach((e) => {
                    if (e.classList.contains("boxactive")) {
                        e.classList.remove("boxactive")
                    }
                })
                box[2].classList.add("boxactive")

            }
            files.forEach((e) => {
                e.classList.remove("active");
            });
            file.classList.add("active");
        });

    });
}

document.querySelectorAll(".bar").forEach((bar) => {
    lineCounterUpdation()
    bar.addEventListener('click', () => {
        if (bar.innerText == "index.html") {
            HTML.style.zIndex = 10;
            CSS.style.zIndex = -2;
            JS.style.zIndex = -1;
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
            lineCounter.innerHTML = `Lines: ${countOf}`

            let len = lines.split(" ").length - 1;
            spaceDiv.innerText = `spaces: ${len}`;

            syncScroll();
            files.forEach((e) => {
                if (e.classList.contains("active")) {
                    e.classList.remove("active")
                }
            })
            files[0].classList.add("active")
            box.forEach((e) => {
                if (e.classList.contains("boxactive")) {
                    e.classList.remove("boxactive")
                }
            })
            box[0].classList.add("boxactive")

        } else if (bar.innerText == "style.css") {
            CSS.style.zIndex = 10;
            HTML.style.zIndex = -2;
            JS.style.zIndex = -1;
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
            lineCounter.innerHTML = `Lines: ${countOf}`

            let len = lines.split(" ").length - 1;
            spaceDiv.innerText = `spaces: ${len}`;
            syncScroll();
            files.forEach((e) => {
                if (e.classList.contains("active")) {
                    e.classList.remove("active")
                }
            })
            files[1].classList.add("active")
            box.forEach((e) => {
                if (e.classList.contains("boxactive")) {
                    e.classList.remove("boxactive")
                }
            })
            box[1].classList.add("boxactive")
        } else {
            JS.style. = 10;
            HTML.style. = -2;
            CSS.style. = -1;
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
            lineCounter.innerHTML = `Lines: ${countOf}`
            let len = lines.split(" ").length - 1;
            spaceDiv.innerText = `spaces: ${len}`;
            syncScroll();
            files.forEach((e) => {
                if (e.classList.contains("active")) {
                    e.classList.remove("active")
                }
            })
            files[2].classList.add("active")
            box.forEach((e) => {
                if (e.classList.contains("boxactive")) {
                    e.classList.remove("boxactive")
                }
            })
            box[2].classList.add("boxactive")
        }

    });

});

function runHandle() {

    runBtn.addEventListener("click", () => {
        if (!isopen) {
            document.querySelectorAll(".newDiv").forEach(e => {
                e.style.display = "none"
                setTimeout(outputFunc, 400)
            })
        }
        else {
            combinedCode = ``
            setTimeout(() => {
                document.querySelectorAll(".newDiv").forEach(e => {
                    // e.style.display = "block"

                })
            }, 900)
        }
    })
}
function outputFunc() {
    document.querySelectorAll("textarea").forEach((textarea) => {
        var combinedCode = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta HTMLAnimme="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
        *{
        font-family: sans-serif;
        }
        ${CSS.value}</style>
    </head>
    <body>
        ${HTML.value}
        <script>${JS.value}</script>
    </body>
    </html>`;
        iframe.srcdoc = combinedCode;

    });
}
function modifiedOutputFunc() {
    document.querySelectorAll("textarea").forEach((textarea) => {
        textarea.addEventListener("input", () => {

            var combinedCode = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta HTMLAnimme="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
            *{
            font-family: sans-serif;
            }
            ${CSS.value}</style>
        </head>
        <body>
            ${HTML.value}
            <script>${JS.value}</script>
        </body>
        </html>`;
            iframe.srcdoc = combinedCode;
        })

    });
}
// function showFrame() {
//     runBtn.addEventListener("click", () => {
//         if (isopen == false) {
//             output.style.top = '0';
//             isopen = true;
//             HTML.style.zIndex = 0;
//             CSS.style.zIndex = 0;
//             JS.style.zIndex = 0;
//         } else {
//             output.style.top = '-100vh';
//             isopen = false;
//             files.forEach((e) => {
//                 if (e.innerText === "index.html") {
//                     if (e.classList.contains("active")) {
//                         HTML.style.zIndex = 3
//                         CSS.style.zIndex = 2
//                         JS.style.zIndex = 2
//                     }
//                 } else if (e.innerText === "style.css") {
//                     if (e.classList.contains("active")) {
//                         CSS.style.zIndex = 3
//                         JS.style.zIndex = 2
//                         HTML.style.zIndex = 2
//                     }
//                 } else {
//                     if (e.classList.contains("active")) {
//                         CSS.style.zIndex = 2
//                         JS.style.zIndex = 2
//                         HTML.style.zIndex = 2
//                     }
//                 }
//             });

//         }
//     });
// }


function syncScroll() {
    const textareas = document.querySelectorAll("textarea");
    textareas.forEach((textarea) => {
        textarea.addEventListener("scroll", () => {
            const linesDiv = textarea.parentElement.querySelector(".line");
            linesDiv.scrollTop = textarea.scrollTop;
        });
    });
}

function lineDivUpdation() {
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
                newDiv.style.color = 'gray';
                newDiv.innerText = i;
                linesDiv.append(newDiv);
            }

        });
    });
}

function lineCounterUpdation() {
    document.querySelectorAll("textarea").forEach((e) => {
        e.addEventListener('input', () => {
            let lines = e.value;
            let len = lines.split(" ").length - 1;
            spaceDiv.innerText = `spaces: ${len}`;
            let countOf = 1;
            for (let HTMLAnimme of lines) {
                if (HTMLAnimme === "\n") {
                    countOf++;
                }
            }
            lineCounter.innerText = "Lines: " + countOf;
        });
    });
}

function addFeature(a, b) {

    document.querySelectorAll("textarea").forEach((f) => {
        f.addEventListener("keydown", (e) => {
            if (e.key === a) {
                e.preventDefault();
                const textarea = e.target;
                const start = textarea.selectionStart;
                const end = textarea.selectionEnd;
                textarea.value = textarea.value.substring(0, start) + `${a}${b}` + textarea.value.substring(end);
                textarea.selectionStart = textarea.selectionEnd = start + 1;
            }
        })
    });

}
function newAddFeature(a, b) {

    editors[1].addEventListener("keydown", (e) => {
        if (e.key === a) {
            e.preventDefault();
            const textarea = e.target;
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            textarea.value = textarea.value.substring(0, start) + `${a}${b}` + textarea.value.substring(end);
            textarea.selectionStart = textarea.selectionEnd = start + 1;
        }
    })

}

function boilerplateAlert() {
    HTML.addEventListener("input", () => {
        if ((HTML.value).indexOf("<html>") !== -1 && isAlerted === false) {
            dialogBox.style.top = "70px"
            isAlerted = true
        }
    })
    dialogBox.querySelector("i").addEventListener('click', () => {
        dialogBox.style.top = "-70px"


    })
} 

// function changePreview() {
// gridBtn.addEventListener("click", () => {
// if (gridType === 'default') {
//     output.style.right = 0;
//     output.style.top = 0;
//     output.style.width = "50%";
//     main.style.width = "50%";
//     document.querySelector(".codearea").style.width = "50%";
//     editors.forEach(e=>{
//         e.style.width = "50vwr"
//     })
//     main.style.left = "0";
//     iframe.style.top = 0;
//     editors.forEach((e) => {
//         e.addEventListener("input", () => {
//             modifiedOutputFunc();
//         });
//     });
//     gridType = 'aside';
//     runBtn.style.display = "none"
// }
// else {
//     output.style.width = "100%";
//     output.style.right = "";
//     output.style.top = "";
//     main.style.width = "100%";
//     main.style.left = "";
//     iframe.style.top = "";
//     iframe.style.position = 'static';
//     gridType = 'default';
//     runBtn.style.display = "block"

// }
// });
// }
workspace.style.transition = "all .2s"
function dropdown() {
    document.querySelector(".workspace>h1 i").style.transition = "all .2s"
    document.querySelector(".workspace>h1 i").addEventListener('click', () => {
        if (!isExpanded) {
            workspace.style.height = "0px"
            document.querySelector(".workspace>h1 i").style.rotate = "-90deg"
            isExpanded = true
        }
        else {
            workspace.style.height = "140px"
            document.querySelector(".workspace>h1 i").style.rotate = "90deg"
            isExpanded = false

        }
    })
}
function tabHandler() {
    editors.forEach((elem) => {
        elem.addEventListener('keydown', function (e) {
            if (e.key === 'Tab') {
                e.preventDefault();
                let start = this.selectionStart;
                let end = this.selectionEnd;
                this.value = this.value.substring(0, start) + '\t' + this.value.substring(end);
                this.selectionStart = this.selectionEnd = start + 1;
            }
        });
    })
}
function sidebarHoveringAction() {
    sidebar.addEventListener("mouseenter", () => {
        minbarIcon.style.opacity = 1
    })
    sidebar.addEventListener("mouseleave", () => {
        minbarIcon.style.opacity = 0
    })

    minbarIcon.addEventListener("click", () => {
        if (!isExpanded) {
            console.log('object');
            // for (const i of arr2) {
            //     sidebar.style. = 0
            // }
            sidebar.style.minWidth = 0
            sidebar.style.width = 0
            rightBar.style.width = "100vw"
            isExpanded = true
        }
        else {
            console.log('object');
            rightBar.style.width = "80%"
            sidebar.style.minWidth = "300px"
            sidebar.style.width = "15%"
            isExpanded = false
        }
    })

    handleIcon.addEventListener("click", () => {
        if (!isExpanded) {
            console.log('object 2a');
            // for (const i of arr2) {
            //     sidebar.style. = 0
            // }
            sidebar.style.minWidth = 0
            sidebar.style.width = 0
            rightBar.style.width = "100vw"
            isExpanded = true
        }
        else {
            console.log('object 2b');
            rightBar.style.width = "80%"
            sidebar.style.minWidth = "300px"
            sidebar.style.width = "15%"
            isExpanded = false
        }
    })
}

function HTMLAnim() {
    htmlImg.style.opacity = 1;
    setTimeout(() => {
        gsap.to("#html-img", {
            opacity: 0,
            duration: .3
        });
    }, 150);
}
function CSSAnim() {
    cssImg.style.opacity = 1;
    setTimeout(() => {
        gsap.to("#css-img", {
            opacity: 0,
            duration: .3
        });
    }, 150);
}
function JSAnim() {
    jsImg.style.opacity = 1;
    setTimeout(() => {
        gsap.to("#js-img", {
            opacity: 0,
            duration: .3
        });
    }, 150);
}
function iconsAnimation() {
    files[0].addEventListener("click", () => {
        HTMLAnim()
    })
    files[1].addEventListener("click", () => {
        CSSAnim()
    })
    files[2].addEventListener("click", () => {
        JSAnim()
    })

    box[0].addEventListener("click", () => {
        HTMLAnim()
    })
    box[1].addEventListener("click", () => {
        CSSAnim()
    })
    box[2].addEventListener("click", () => {
        JSAnim()
    })

}
// function spec() {
// CSS.addEventListener("keyup", (e) => {
// if (e.key === 'Enter') {
//     e.preventDefault()
//     const start = CSS.selectionStart;
//     const end = CSS.selectionEnd;

//     // Set the new value with \n\t at the cursor position
//     CSS.value = CSS.value.substring(0, start) + "\t " + CSS.value.substring(end);

//     // Move the cursor to the right place
//     CSS.selectionStart = CSS.selectionEnd = start + 2; // After \n\t

// }
// })
// }
function spec() {
    CSS.addEventListener("keydown", (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent the default newline behavior
            const start = CSS.selectionStart;
            const end = CSS.selectionEnd;

            // Get the character before the cursor
            const charBeforeCursor = CSS.value[start - 1];

            // Check if the character is '{' or ';' to apply indent
            if (charBeforeCursor === '{' || charBeforeCursor === ';') {
                // Insert new line and tab for indentation
                CSS.value = CSS.value.substring(0, start) + "\n\t " + CSS.value.substring(end);

                // Move the cursor to the right place
                CSS.selectionStart = CSS.selectionEnd = start + 2; // After \n\t
            } else {
                // Default behavior if no special character is before the cursor
                CSS.value = CSS.value.substring(0, start) + "\n" + CSS.value.substring(end);
                CSS.selectionStart = CSS.selectionEnd = start + 1; // After \n
            }
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
            box.forEach((e) => {
                if (e.classList.contains("boxactive")) {
                    e.classList.remove("boxactive")
                }
            })
            box[0].classList.add("boxactive")

            syncScroll();

        }
    });
    lineDivUpdation()
}
function insertTagOnTab(keyword, openingTag, closingTag) {
    document.getElementById("html").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const textarea = this;
            const value = textarea.value;
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;

            // Get the text before and after the cursor
            let beforeCursor = value.substring(0, start);
            const afterCursor = value.substring(end);

            // Split the text before the cursor into words
            const words = beforeCursor.split(/(\s+)/); // Split by whitespace but keep separators

            // Find the last non-whitespace segment
            let lastWord = "";
            for (let i = words.length - 1; i >= 0; i--) {
                if (words[i].trim()) {
                    lastWord = words[i];
                    break;
                }
            }

            // Check if the last non-whitespace segment matches the keyword
            if (lastWord === keyword) {
                event.preventDefault(); // Prevent default Enter key behavior

                // Remove the keyword from the text before the cursor
                const newTextBeforeCursor = words.slice(0, words.length - 1).join("");

                // Insert the opening and closing tags
                const tag = `${openingTag}${closingTag}`;
                textarea.value = newTextBeforeCursor + tag + afterCursor;

                // Move the cursor inside the opening tag, right after it
                textarea.selectionStart = textarea.selectionEnd = newTextBeforeCursor.length + openingTag.length;
            }
        }
    });
}



// Function to play sound

// Function to add or remove event listeners based on `isAllowed`

// Initialize event handlers
// soundHandler();
// updateEventListeners(); // Ensure initial state is set correctly
insertTagOnTab('!', `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>

<body>
</body>
</html>`, '')
insertTagOnTab('html:5', `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>

<body>
</body>
</html>`, '')
// function syntaxHighlight() {
//     const editor = document.getElementById('html');
//     const highlighted = document.querySelector('codeShow');

//     editor.addEventListener('input', () => {
//         highlighted.textContent = editor.innerText;
//         Prism.highlightElement(highlighted);
//     });
// }

insertTagOnTab('a', '<a>', '</a>')
insertTagOnTab('html', '<html>', '</html>')
insertTagOnTab('head', '<head>', '</head>')
insertTagOnTab('abbr', '<abbr>', '</abbr>')
insertTagOnTab('address', '<address>', '</address>')
insertTagOnTab('article', '<article>', '</article>')
insertTagOnTab('aside', '<aside>', '</aside>')
insertTagOnTab('b', '<b>', '</b>')
insertTagOnTab('br', '<br>', '')
insertTagOnTab('bdi', '<bdi>', '</bdi>')
insertTagOnTab('bdo', '<bdo>', '</bdo>')
insertTagOnTab('blockquote', '<blockquote>', '</blockquote>')
insertTagOnTab('body', '<body>', '</body>')
insertTagOnTab('button', '<button>', '</button>')
insertTagOnTab('canvas', '<canvas>', '</canvas>')
insertTagOnTab('caption', '<caption>', '</caption>')
insertTagOnTab('cite', '<cite>', '</cite>')
insertTagOnTab('code', '<code>', '</code>')
insertTagOnTab('colgroup', '<colgroup>', '</colgroup>')
insertTagOnTab('data', '<data>', '</data>')
insertTagOnTab('datalist', '<datalist>', '</datalist>')
insertTagOnTab('dd', '<dd>', '</dd>')
insertTagOnTab('del', '<del>', '</del>')
insertTagOnTab('details', '<details>', '</details>')
insertTagOnTab('dfn', '<dfn>', '</dfn>')
insertTagOnTab('dialog', '<dialog>', '</dialog>')
insertTagOnTab('div', '<div>', '</div>')
insertTagOnTab('dl', '<dl>', '</dl>')
insertTagOnTab('dt', '<dt>', '</dt>')
insertTagOnTab('em', '<em>', '</em>')
insertTagOnTab('fieldset', '<fieldset>', '</fieldset>')
insertTagOnTab('figcaption', '<figcaption>', '</figcaption>')
insertTagOnTab('figure', '<figure>', '</figure>')
insertTagOnTab('footer', '<footer>', '</footer>')
insertTagOnTab('form', '<form>', '</form>')
insertTagOnTab('h1', '<h1>', '</h1>')
insertTagOnTab('lorem', lorem, '')
insertTagOnTab('h2', '<h2>', '</h2>')
insertTagOnTab('h3', '<h3>', '</h3>')
insertTagOnTab('h4', '<h4>', '</h4>')
insertTagOnTab('h5', '<h5>', '</h5>')
insertTagOnTab('h6', '<h6>', '</h6>')
insertTagOnTab('header', '<header>', '</header>')
insertTagOnTab('hgroup', '<hgroup>', '</hgroup>')
insertTagOnTab('hr', '<hr>', '') // Se)-closing tag
insertTagOnTab('hgroup', '<hgroup>', '</hgroup>')
insertTagOnTab('i', '<i>', '</i>')
insertTagOnTab('img', '<img>', ''), // Se)-closing tag
    insertTagOnTab('input', '<input>', ''), // Se)-closing tag
    insertTagOnTab('ins', '<ins>', '</ins>')
insertTagOnTab('kbd', '<kbd>', '</kbd>')
insertTagOnTab('label', '<label>', '</label>')
insertTagOnTab('legend', '<legend>', '</legend>')
insertTagOnTab('li', '<li>', '</li>')
insertTagOnTab('main', '<main>', '</main>')
insertTagOnTab('map', '<map>', '</map>')
insertTagOnTab('mark', '<mark>', '</mark>')
insertTagOnTab('meter', '<meter>', '</meter>')
insertTagOnTab('nav', '<nav>', '</nav>')
insertTagOnTab('noscript', '<noscript>', '</noscript>')
insertTagOnTab('object', '<object>', '</object>')
insertTagOnTab('ol', '<ol>', '</ol>')
insertTagOnTab('optgroup', '<optgroup>', '</optgroup>')
insertTagOnTab('option', '<option>', '</option>')
insertTagOnTab('output', '<output>', '</output>')
insertTagOnTab('p', '<p>', '</p>')
insertTagOnTab('pre', '<pre>', '</pre>')
insertTagOnTab('progress', '<progress>', '</progress>')
insertTagOnTab('q', '<q>', '</q>')
insertTagOnTab('rp', '<rp>', '</rp>')
insertTagOnTab('rt', '<rt>', '</rt>')
insertTagOnTab('ruby', '<ruby>', '</ruby>')
insertTagOnTab('s', '<s>', '</s>')
insertTagOnTab('samp', '<samp>', '</samp>')
insertTagOnTab('section', '<section>', '</section>')
insertTagOnTab('select', '<select>', '</select>')
insertTagOnTab('small', '<small>', '</small>')
insertTagOnTab('span', '<span>', '</span>')
insertTagOnTab('strong', '<strong>', '</strong>')
insertTagOnTab('sub', '<sub>', '</sub>')
insertTagOnTab('summary', '<summary>', '</summary>')
insertTagOnTab('sup', '<sup>', '</sup>')
insertTagOnTab('table', '<table>', '</table>')
insertTagOnTab('tbody', '<tbody>', '</tbody>')
insertTagOnTab('td', '<td>', '</td>')
insertTagOnTab('template', '<template>', '</template>')
insertTagOnTab('textarea', '<textarea>', '</textarea>')
insertTagOnTab('tfoot', '<tfoot>', '</tfoot>')
insertTagOnTab('th', '<th>', '</th>')
insertTagOnTab('thead', '<thead>', '</thead>')
insertTagOnTab('time', '<time>', '</time>')
insertTagOnTab('tr', '<tr>', '</tr>')
insertTagOnTab('track', '<track>', ''), // Se)-closing tag
    insertTagOnTab('u', '<u>', '</u>')
insertTagOnTab('ul', '<ul>', '</ul>')
insertTagOnTab('var', '<var>', '</var>')
insertTagOnTab('video', '<video>', '</video>')
insertTagOnTab('wbr', '<wbr>', '') // Self-closing tag

spec()
tabHandler()
runDefault()
// changePreview()
runHandle()
syncScroll();
lineDivUpdation();
lineCounterUpdation();
addFeature("{", "\n}")
addFeature("(", ")")
addFeature('"', '"')
addFeature("'", "'")
addFeature("`", "`")
addFeature('<', '>')
addFeature('`', '`')
newAddFeature(':', ';')
showFrame()
fileListeners()
boilerplateAlert()
dropdown()
sidebarHoveringAction()
iconsAnimation()
