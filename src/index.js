// pixabay API key: 31644219-2f7acda799c999752853da478

import ApiService from './js/api_service';
import Notiflix from 'notiflix';

const inputForm = document.querySelector('form#search-form');
const divGallery = document.querySelector('div.gallery');
const apiService = new ApiService();

inputForm.addEventListener('click', onSubmitForm);

async function onSubmitForm(event) {
  event.preventDefault();

  try {
    apiService.query = event.currentTarget.elements.searchQuery.value;
    const responseBackend = await apiService.sendRequest();
    // console.log(responseBackend);
    showUserAmountResults(responseBackend.data.totalHits);
    showMarkup(responseBackend.data.hits);
  } catch (error) {
    console.log(error);
  }
}

function showUserAmountResults(result) {
  Notiflix.Notify.info(`Hooray! We found ${result} images.`);
}

function showMarkup(arrayOfQuery) {
  console.log(arrayOfQuery);
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
