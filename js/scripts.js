// `element` is the element you want to wrap

// served: https://cdn.staticaly.com/gh/alexmwalker/view3d/master/js/scripts.js

//var lightingeffect = "url(https://raw.githubusercontent.com/alexmwalker/view3d/master/img/lighting.png)";
var LEgradient = "linear-gradient(100deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 25%, rgba(0,0,0,0.25) 50%, rgba(255,255,255,0) 100%)";

function buildStructure() {
    var element = document.querySelectorAll(".view3d .cover");

    for (var i = element.length - 1; i >= 0; i--) {
        var parent = element[i].parentNode;
        var img = element[i].querySelector(".cover img"); // grab the book IMG src

        var backcoverBG = "background-image: " + LEgradient + ", url(" + img.src + ")" ; // write it into some BG css


        var bookgroup = document.createElement('div');
        bookgroup.setAttribute("class", "bookgroup"); // set class
        // set the wrapper as child (instead of the element)
        var backcover = document.createElement('div');
        backcover.setAttribute("class", "backcover"); // set class
        backcover.setAttribute("style", backcoverBG);
        // set the wrapper as child (instead of the element)
        parent.replaceChild(bookgroup, element[i]);
        // set element as child of wrapper

        bookgroup.appendChild(backcover);
        bookgroup.appendChild(element[i]);
        //bookgroup.appendChild(color);
    }
}
buildStructure();
