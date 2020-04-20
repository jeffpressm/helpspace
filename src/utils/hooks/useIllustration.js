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

function useIllustration() {
  const b = getRandomInt(0, 2);

  if (!b) {
    return null;
  }

  return illustrations[getRandomInt(0, illustrations.length - 1)];
}

export default useIllustration;
