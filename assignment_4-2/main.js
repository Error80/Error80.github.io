const images = [
    { filename: "pic1.jpg", alt: "an image of an eye" },
    { filename: "pic2.jpg", alt: "an image"},
    { filename: "pic3.jpg", alt: "an image"},
    { filename: "pic4.jpg", alt: "an image"},

]

const baseURL = "https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic1.jpg"

for (const image of images) {

}

const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");