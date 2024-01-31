// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryPlace = document.querySelector('.gallery');

const gallery = galleryItems
  .map(
    item =>
      `<div class="gallery">
      <a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>
    </div>`
  )
  .join('');

galleryPlace.innerHTML = gallery;

new SimpleLightbox('.gallery a', {
  captions: true,

  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
