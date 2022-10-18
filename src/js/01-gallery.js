import "simplelightbox/dist/simple-lightbox.min.css";
import Lightbox from 'simplelightbox';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryItemsGrid = galleryItems
  .map(
    (item) => `
<a class="gallery__item" href="${item.original}">
<img class="gallery__image" 
src="${item.preview}" 
alt="${item.description}">
</a> `
  )
  .join("");
  const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML("beforeend", galleryItemsGrid);

let galleryLightbox = new Lightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
