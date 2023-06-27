
const fetchComicId = (email) => {
    return fetch(`https://fwd.innopolis.app/api/hw2?email=${email}`)
  .then(response => response.text())
  .then(data => {
    return data;
    });
  };

  const fetchComicDetails = (comicId) => {
    return fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`)
    .then(response => response.json())
    .then(comicData => {
      return comicData;
    });
  };

const displayComic = (comicData) => {
const comicContainer = document.querySelector('.comic-container');
const comicImage = comicContainer.querySelector('.comic-image');
const comicTitle = comicContainer.querySelector('.comic-title');
const comicDate = comicContainer.querySelector('.comic-date');

comicImage.src = comicData.img;
comicImage.alt = comicData.alt;
comicTitle.textContent = comicData.safe_title;
comicDate.textContent = new Date(comicData.year, comicData.month - 1, comicData.day).toLocaleDateString();
};

const handleError = (error) => {
console.error(error);
};

// Usage
const email = 'e.bobkunov@innopolis.university';
const comicButton = document.querySelector('.comic-button');

fetchComicId(email)
.then(comicId => fetchComicDetails(comicId))
.then(comicData => displayComic(comicData))
.catch(error => handleError(error));

comicButton.addEventListener('click', () => { 
fetchComicId(email)
.then(comicButton.disabled = true) 
.then(comicButton.textContent = 'Loading...')
.then(comicId => fetchComicDetails(comicId))
.then(comicData => displayComic(comicData))
.then(comicButton.disabled = false)
.then(comicButton.textContent = 'Next comic')
.catch(error => handleError(error));
});