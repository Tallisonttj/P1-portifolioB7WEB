const menu = document
  .querySelector(".menu-opener")
  .addEventListener("click", () => {
   let nav = document.querySelector("nav");
    nav.classList.toggle('opener')
})

const toggleSlider = () => {
  const slides = document.querySelectorAll('input[name=sider]');
  if (slides.length === 0) return;

  let current = document.querySelector('input[name=sider]:checked');
  if (!current) {
      current = document.querySelector('input[name=sider]');
      current.setAttribute('checked', true);
  }

  let id = parseInt(current.getAttribute('id').split('-')[1]);
  if (id + 1 <= slides.length) {
      id++;
  } else {
      id = 1;
  }

  for (let slider of slides) slider.removeAttribute('checked');
  document.querySelector(`#sider-${id}`).setAttribute('checked', true);
}
setInterval(toggleSlider, 5000);