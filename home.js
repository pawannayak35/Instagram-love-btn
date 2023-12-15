var img = document.querySelector("img");
var love = document.querySelector("i");

img.addEventListener("dblclick", function () {
    love.style.transform = "translate(-50%, -50%) scale(2)";
    love.style.opacity = 0.8;

    setTimeout(function () {
        love.style.opacity = 0;
    }, 1000);
    setTimeout(function () {
        love.style.transform = "translate(-50%, -50%) scale(0)";
    }, 2000);
});

