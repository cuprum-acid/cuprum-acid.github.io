import { formatDistanceToNow } from 'date-fns';

interface ComicDetailsResponse {
  img: string;
  alt: string;
  safe_title: string;
  year: number;
  month: number;
  day: number;
}

const fetchComicId = async (email: string): Promise<string> => {
  const response = await fetch(`https://fwd.innopolis.app/api/hw2?email=${email}`);
  const data = await response.text();
  return data;
};

const fetchComicDetails = async (comicId: string): Promise<ComicDetailsResponse> => {
  const response = await fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
  const comicData: ComicDetailsResponse = await response.json();
  return comicData;
};

const displayComic = (comicData: ComicDetailsResponse): void => {
  const comicContainer = document.querySelector('.comic-container');
  const comicImage = comicContainer?.querySelector('.comic-image') as HTMLImageElement;
  const comicTitle = comicContainer?.querySelector('.comic-title') as HTMLElement;
  const comicDate = comicContainer?.querySelector('.comic-date') as HTMLElement;
  const comicAgo = comicContainer?.querySelector('.comic-ago') as HTMLElement;

  if (comicImage && comicTitle && comicDate) {
    comicImage.src = comicData.img;
    comicImage.alt = comicData.alt;
    comicTitle.textContent = comicData.safe_title;

    const date = new Date(comicData.year, comicData.month - 1, comicData.day);
    comicDate.textContent = date.toLocaleDateString();
    comicAgo.textContent = formatDistanceToNow(date) + ' ago';
  }
};

const handleError = (error: Error): void => {
  console.error(error);
};


const email: string = 'e.bobkunov@innopolis.university';
const comicButton = document.querySelector('.comic-button') as HTMLButtonElement;

comicButton.addEventListener('click', async () => { 
  try {
    comicButton.disabled = true;
    comicButton.textContent = 'Loading...';
    const comicId = await fetchComicId(email);
    const comicData = await fetchComicDetails(comicId);
    displayComic(comicData);
    comicButton.disabled = false;
    comicButton.textContent = 'Next comic';
  } catch (error) {
    console.log("Error occured");
  }
});

fetchComicId(email)
  .then(comicId => fetchComicDetails(comicId))
  .then(comicData => displayComic(comicData))
  .catch(error => handleError(error));
