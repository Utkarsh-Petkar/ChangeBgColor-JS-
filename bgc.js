var color = ["#73C6B6", "#884EA0", "#F1C40F", "#148F77", "#2E86C1", "#F7DC6F", "#28B463"];
var i = 0;
document.querySelector("button").addEventListener("click", function() {
    i = i < color.length ? ++i : 0;
    document.querySelector("body").style.background = color[i]
})