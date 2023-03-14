import {createUserPhotos} from './data.js';

const pictureList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPictures = createUserPhotos();

const pictureFragment = document.createDocumentFragment();

createPictures.forEach(({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureFragment.append(pictureElement);
});

pictureList.append(pictureFragment);

export {};
