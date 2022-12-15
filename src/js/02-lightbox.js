import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector('.gallery');
const galleryList = createGalleryList(galleryItems);


function createGalleryList(items) {
    return items.map(({ preview, original, description }) => `<a class = "gallery__item" href= ${original}>
    <img class="gallery__image"
    src =${preview} 
    alt =${description}
    />
    </a>
    `).join('');
};

galleryBox.insertAdjacentHTML("beforeend", galleryList);


const lightbox = new SimpleLightbox('.gallery a', {
    
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250

});
