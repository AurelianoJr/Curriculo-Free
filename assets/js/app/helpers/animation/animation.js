var animation = bodymovin.loadAnimation({
  container: document.getElementById('animation'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: './assets/img/animation.json'
});

var $ = document.querySelector.bind(document);
var body = $("body");
body.style.overflow = "hidden";


setTimeout(() => {
    animation.pause();
    body.removeChild($("header"));
    body.style.overflow = "initial";
}, 3000);