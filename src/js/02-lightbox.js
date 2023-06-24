import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector('.gallery');
const markup = galleryItems
  .map(
    (image) =>
    `<li class="gallery__item">
    <a class="gallery__link" href="${image.original}">
      <img
        src="${image.preview}" 
        data-source="${image.original}"
        alt="${image.description}" 
        class="gallery__image"
      />
    </a>
  </li>`
  )
  .join("");
galleryEl.insertAdjacentHTML("afterbegin", markup);

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 200 });

