// Chèn url root
function getRoot() {
  return (
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname.split("/").slice(0, 2).join("/") +
    "/"
  );
}

const ROOT = getRoot();
console.log(ROOT);

// load ảnh
$(document).ready(function () {
  $(".set-bg").each(function () {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + ROOT + bg + ")");
  });
});

function applySetBg() {
  $(".set-bg").each(function () {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + ROOT + bg + ")");
  });
}

// Tự động ẩn thông báo sau 5 giây
setTimeout(function () {
  var notify = document.querySelector(".notify-show");
  if (notify) {
    notify.style.display = "none";
  }
}, 8000);

// Load func dynamic
function loadHTML(url, target) {
  fetch(url)
    .then((res) => res.text())
    .then((html) => {
      const element = document.getElementById(target);

      // Tạo DOM an toàn
      const temp = document.createElement("div");
      temp.innerHTML = html;

      // Tách script
      const scripts = temp.querySelectorAll("script");
      scripts.forEach((script) => {
        const newScript = document.createElement("script");
        if (script.src) {
          newScript.src = script.src;
        } else {
          newScript.textContent = script.textContent;
        }
        document.body.appendChild(newScript);
        script.remove();
      });

      element.innerHTML = temp.innerHTML;
      applySetBg();

      // load link web-logo
      document.querySelectorAll("#header [data-href]").forEach((el) => {
        el.parentElement.href = ROOT + el.getAttribute("data-href");
      });
    });
}
