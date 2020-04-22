import i1 from 'assets/illustrations/illustration 1.png';
import i2 from 'assets/illustrations/illustration 2.png';
import i3 from 'assets/illustrations/illustration 3.png';
import i4 from 'assets/illustrations/illustration 4.png';
import i5 from 'assets/illustrations/illustration 5.png';
import i6 from 'assets/illustrations/illustration 6.png';
import i7 from 'assets/illustrations/illustration 7.png';
import i8 from 'assets/illustrations/illustration 8.png';
import i9 from 'assets/illustrations/illustration 9.png';

const illustrations = [i1, i2, i3, i4, i5, i6, i7, i8, i9];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let cache = [];

function useIllustration() {
  let nextIllustration = null;

  // determine if we should show an illustration
  const b = getRandomInt(0, 2);

  if (b === 0) {
    let pool = illustrations.filter((i) => !cache.includes(i));

    if (pool.length === 0) {
      cache = [];
      pool = [...illustrations];
    }

    nextIllustration = pool[getRandomInt(0, pool.length - 1)];
  }

  cache.push(nextIllustration);

  return nextIllustration;
}

export default useIllustration;
