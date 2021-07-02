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
