import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const divGallery = document.querySelector('div.gallery');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
});

export function showMarkup(arrayOfQuery) {
  const mapArrayResult = arrayOfQuery.map(el => renderSingleElement(el));
  divGallery.insertAdjacentHTML('beforeend', mapArrayResult.join(''));
  lightbox.refresh();
}

function renderSingleElement({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  //   console.log(singleEl);

  return `<a href="${largeImageURL}">
  <div class="photo-card">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes ${likes}</b>
    </p>
    <p class="info-item">
      <b>Views ${views}</b>
    </p>
    <p class="info-item">
      <b>Comments ${comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads ${downloads}</b>
    </p>
  </div>
</div>
</a>`;
}
