import confetti from 'canvas-confetti';

const colorPalettes = {
  gentle: ['#ffe3fa', '#beffdf', '#bddbff', '#fffbbe', '#e1bcff'],
  light: ['#ff9999', '#db97ff', '#9ab9ff', '#9affc1', '#fdffa6'],
  popular: ['#ff5353', '#ffee53', '#53ffa9', '#5395ff', '#ef53ff'],
};

export const confettiSchoolPride = (
  colors: string[] | keyof typeof colorPalettes,
  duration: number,
  interval: number = 0.5
) => {
  colors = typeof colors === 'string' ? colorPalettes[colors] : colors;
  const end = Date.now() + duration * 1000;

  const traverseConfetti = (colors: string[], interval: number) => {
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 100,
      origin: { x: 0, y: 0.6 },
      colors: colors,
    });
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 100,
      origin: { x: 1, y: 0.6 },
      colors: colors,
    });

    if (Date.now() < end) {
      setTimeout(() => {
        requestAnimationFrame(() => traverseConfetti(colors, interval));
      }, interval * 1000);
    }
  };
  traverseConfetti(colors, interval);
};

export const confettiOnClick = (event: MouseEvent) => {
  const randomInRange = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  // Calculate normalized x and y (0~1)
  const x = event.clientX / window.innerWidth;
  const y = event.clientY / window.innerHeight;

  confetti({
    angle: randomInRange(55, 125),
    spread: randomInRange(50, 70),
    particleCount: randomInRange(50, 100),
    origin: { x, y },
  });
};
