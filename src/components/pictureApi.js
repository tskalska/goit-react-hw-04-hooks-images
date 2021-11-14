export default function pictureApi(pageNumber, searchRequest) { 
  return fetch(`https://pixabay.com/api/?key=22111577-4bd8860a42557448db0edd034&q=${searchRequest}&image_type=photo&page=${pageNumber}&per_page=12`)
    .then(responce=>responce.json());
}