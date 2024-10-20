var main = document.querySelector("#main")
var mycursore = document.querySelector(".cursore")

main.addEventListener("mousemove", function(dets) {
    mycursore.style.left = dets.x+"px"
    mycursore.style.top = dets.y+"px"
})