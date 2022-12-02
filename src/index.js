// pixabay API key: 31644219-2f7acda799c999752853da478

import ApiService from './js/api_service';
import Notiflix from 'notiflix';

import { showMarkup } from './js/markup';
import { divGallery } from './js/markup';

const inputForm = document.querySelector('form#search-form');
const loadMore = document.querySelector('.load-more');
const apiService = new ApiService();

inputForm.addEventListener('submit', onSubmitForm);
loadMore.addEventListener('click', onLoadMore);

async function onSubmitForm(event) {
  event.preventDefault();

  try {
    apiService.page = 1;
    divGallery.innerHTML = '';
    loadMore.classList.add('hidden');

    apiService.query = event.currentTarget.elements.searchQuery.value;
    if (!apiService.query) {
      Notiflix.Notify.warning(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      return;
    }

    const responseBackend = await apiService.sendRequest();
    if (!responseBackend.data.totalHits) {
      Notiflix.Notify.warning(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      return;
    }
    if (responseBackend.data.totalHits > 40) {
      loadMore.classList.remove('hidden');
    }
    Notiflix.Notify.success(
      `Hooray! We found ${responseBackend.data.totalHits} images.`
    );
    showMarkup(responseBackend.data.hits);
    // showUserAmountResults(responseBackend.data.totalHits);
  } catch (error) {
    console.log(error);
  }
}

async function onLoadMore() {
  try {
    apiService.page += 1;
    const apiServiceResponce = await apiService.sendRequest();
    showMarkup(apiServiceResponce.data.hits);
    if (apiServiceResponce.data.hits.length < 40) {
      Notiflix.Notify.info(
        "We're sorry, but you've reached the end of search results."
      );
      loadMore.classList.add('hidden');
    }
  } catch (error) {
    console.log(error);
  }
}
