let border = false;

document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "z") {
        e = document.body.getElementsByTagName("*");
        if (!border) {
            for (i = 0; i < e.length; i++) {
                e[i].style.border = "1px solid white";
                border = true;
            }
        } else {
            for (i = 0; i < e.length; i++) {
                e[i].style.border = "none";
                border = false;
            }
        }
    }
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navigation").style.top = "0";
    } else {
        document.getElementById("navigation").style.top = "-6em";
    }
    prevScrollpos = currentScrollPos;
};

/* Dá pra refatorar legal isso. */
function showDescription(work) {
    if (work == "cent") {
        document.getElementsByClassName("wk1")[0].style.display = "none";
        document.getElementsByClassName("wk3")[0].style.display = "none";
        document.getElementsByClassName("wk2")[0].style.display = "inline-block";
    } else if (work == "hnsc") {
        document.getElementsByClassName("wk2")[0].style.display = "none";
        document.getElementsByClassName("wk3")[0].style.display = "none";
        document.getElementsByClassName("wk1")[0].style.display = "inline-block";
    } else if (work == "tec") {
        document.getElementsByClassName("wk1")[0].style.display = "none";
        document.getElementsByClassName("wk2")[0].style.display = "none";
        document.getElementsByClassName("wk3")[0].style.display = "inline-block";
    }
}
