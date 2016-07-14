// `element` is the element you want to wrap

var lightingeffect = "url(../img/lighting.png)";

function dimension() {
    var element = document.querySelectorAll(".view3d .cover");

    for (var i = element.length - 1; i >= 0; i--) {
        var parent = element[i].parentNode;
        var img = element[i].querySelector(".cover img"); // grab the book IMG src

        var workingcover = "background-image: " + lightingeffect+", url(" + img.src + ")" ; // write it into some BG css
        var bookgroup = document.createElement('div');
        bookgroup.setAttribute("class", "bookgroup"); // set class
        // set the wrapper as child (instead of the element)
        var backcover = document.createElement('div');
        backcover.setAttribute("class", "backcover"); // set class
        backcover.setAttribute("style", workingcover);
        // set the wrapper as child (instead of the element)
        parent.replaceChild(bookgroup, element[i]);
        // set element as child of wrapper

        bookgroup.appendChild(backcover);
        bookgroup.appendChild(element[i]);
        //bookgroup.appendChild(color);
    }
}
dimension();
