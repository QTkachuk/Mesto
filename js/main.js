const openPopUp = document.querySelector('#open-pop-up');
const closePopUp = document.querySelector('#popup-close');
const popup = document.querySelector('#popup');

openPopUp.addEventListener('click', function(e) {
  e.preventDefault();
  popup.classList.add('active');
});

closePopUp.addEventListener('click', () => {
  popup.classList.remove('active');
});

popup.addEventListener('click', (e) => {
  if (!e.target.closest('.popup__body')) {
    popup.classList.remove('active');
  }
});

let formElement = document.querySelector('#popup-body-form');

function formSubmitHandler (evt) {
	evt.preventDefault();

	let nameInput = document.querySelector('#name-Input');
	let jobInput = document.querySelector('#job-Input');

  let nameInputValue = nameInput.value;
  let jobInputValue = jobInput.value;

  let profileName = document.querySelector('.profile__info__name');
  let profileDescription = document.querySelector('.profile__info__description');

  profileName.textContent = nameInputValue;
  profileDescription.textContent = jobInputValue;
}

formElement.addEventListener('submit', formSubmitHandler);