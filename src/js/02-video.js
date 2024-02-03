// ** Import vimeo i lodash - zainstalowane przez npm ** //
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// ** Z dokumentacji vimeo: query selector oraz zainicjowanie playera na iframe ** //
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

// ** deklaracja  klucza local storage ** //
const STORAGE_KEY = 'videoplayer-current-time';

// ** deklaracja funkcji onPlay, która ustawia w local storage key i value - key zadeklarowany wcześniej, value to czas w sekundach.
//** Zastosowano JSON.stringify(), ponieważ wysyłamy dane do local storage w najbardziej prymitywnej formie ** //
const onPlay = value => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value.seconds));
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
};

// ** z dokumentacji vimeo: player.on (metoda, która pozwala na uruchomienie odtwarzacza) ** //
// ** event (nasłuchiwanie zdarzenia): timeupdate, aby śledzić na bierząco czas odtwarzania ** //
player.on('timeupdate', throttle(onPlay, 1000));

// ** pobieranie aktualnego czasu odtwarzania z local storage ** //
const currentTime = localStorage.getItem(STORAGE_KEY);

// ** .setCurrentTime (z dokumentacji) - ustawia czas odtwarzania pobrany z local storage (currentTime) ** //
// ** .then.catch (pobrane z dokumentacji) to obsługa błędów ** //
player
  .setCurrentTime(currentTime)
  .then(function (seconds) {
    console.log('played the video!');
  })
  .catch(function (error) {
    console.log(error);
  });
