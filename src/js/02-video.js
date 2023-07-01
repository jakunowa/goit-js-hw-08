
import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const getDurationTime = data => {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  };
  const saveTimeDelay = throttle(getDurationTime, 1000)
  const getCurrentTime = localStorage.getItem('videoplayer-current-time');


  player.setCurrentTime(getCurrentTime).then();
  player.on('timeupdate',saveTimeDelay);
  