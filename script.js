const image = document.getElementById("mainImage")

//Section2 with kaz image
document.getElementById("section2").addEventListener("mouseover", () => {
    image.src = "Image/kaz.jpeg"
})

document.getElementById("section2").addEventListener("mouseleave", () => {
    image.src = "Image/livre.webp"
})

document.getElementById("section3").addEventListener("mouseover", () => {
    image.src = "Image/gants.jpeg"
})

document.getElementById("section3").addEventListener("mouseleave", () => {
    image.src = "Image/livre.webp"
})

document.getElementById("section4").addEventListener("mouseover", () => {
    image.src = "Image/Star.png"
})

document.getElementById("section4").addEventListener("mouseleave", () => {
    image.src = "Image/livre.webp"
})


