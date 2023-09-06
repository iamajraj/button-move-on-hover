const btn = document.querySelector('.btn');

const lerp = (a, b, t) => a + (b - a) * t;

btn.addEventListener('mousemove', (ev) => {
  const dimens = btn.getBoundingClientRect();
  const xStart = dimens.x;
  const xEnd = xStart + dimens.width;

  const yStart = dimens.y;
  const yEnd = yStart + dimens.height;

  const xValue = gsap.utils.mapRange(xStart, xEnd, 0, 1, ev.clientX);
  const yValue = gsap.utils.mapRange(yStart, yEnd, 0, 1, ev.clientY);

  gsap.to(btn, {
    transform: `translate(${lerp(-50, 50, xValue)}px, ${lerp(
      -50,
      50,
      yValue
    )}px)`,
  });
});
btn.addEventListener('mouseleave', (ev) => {
  gsap.to(btn, {
    transform: `translate(0px)`,
  });
});
