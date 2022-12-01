export const divGallery = document.querySelector('div.gallery');

export function showMarkup(arrayOfQuery) {
  const mapArrayResult = arrayOfQuery.map(el => renderSingleElement(el));
  divGallery.insertAdjacentHTML('beforeend', mapArrayResult.join(''));
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
  return `<div class="photo-card">
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
</div>`;
}
