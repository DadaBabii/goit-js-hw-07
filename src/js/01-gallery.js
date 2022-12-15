import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryBox = document.querySelector('.gallery');
const galleryList = createGalleryList(galleryItems);


function createGalleryList(items) {
    return items.map(({preview,original,description }) => `<div class = "gallery__item"> 
    <a class="gallery__link" href= ${original}>
    <img
    class="gallery__image"
    src =${preview} alt =${description}
    data-source='${original}'/>
    </a>
    </div>`).join('');
};

galleryBox.insertAdjacentHTML("beforeend", galleryList);


galleryBox.addEventListener('click', shownBigImage);


function shownBigImage(event) {
    event.preventDefault();
    console.dir(event.target);
    const instance = basicLightbox.create(`<img src=${event.target.dataset.source}>`)

    instance.show()
}





// Або так







// import { galleryItems } from './gallery-items.js';
// // Change code below this line

// const galleryBox = document.querySelector('.gallery');
// const galleryList = createGalleryList(galleryItems);


// function createGalleryList(items) {
//     return items.map(({preview,original,description }) => `<div class = "gallery__item"> 
//     <a class="gallery__link" href= ${original}>
//     <img
//     class="gallery__image"
//     src =${preview} alt =${description}/>
//     </a>
//     </div>`).join('');
// };

// galleryBox.insertAdjacentHTML("beforeend", galleryList);

// const bigImage = document.querySelector(".gallery__link");
// console.dir(bigImage);

// galleryBox.addEventListener('click', shownBigImage);


// function shownBigImage(event) {
//     event.preventDefault();
//     console.dir(event.target);
//     const instance = basicLightbox.create(`<img src=${event.target.parentElement.href}>`)

// instance.show()
// }