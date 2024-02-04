import throttle from 'lodash.throttle';

const form = document.querySelector(`.feedback-form`);
// console.log(form);

//** klucz do local storage */
const STORAGE_KEY = 'feedback-form-state';

//** nadsłuchianie zdarzenia na inpucie + przesyłanie danych do local storage*/
form.addEventListener(
  'input',
  throttle(() => {
    const data = {
      email: `${form['email'].value}`,
      message: `${form['message'].value}`,
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.log(error.name);
    }
  }),
  500
);

//** nasłuchiwanie zdarzeń na przycisku `submit` - wysyłanie danych na formularzu i pobieranie je z lokal storage (zapisywanie) */
form.addEventListener(
  'submit',
  throttle(event => {
    event.preventDefault();

    const data = {
      email: `${form['email'].value}`,
      message: `${form['message'].value}`,
    };

    if (data.email.trim() === '' || data.message.trim() === '') {
      return alert('Uzupełnij wszystkie pola!');
    } else {
      localStorage.getItem(STORAGE_KEY);
      console.log(data);
      form.reset();
    }
  }),
  500
);
