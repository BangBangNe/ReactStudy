// load ảnh
$(document).ready(function () {
  $(".set-bg").each(function () {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
  });
});

// Tự động ẩn thông báo sau 5 giây
setTimeout(function () {
  var notify = document.querySelector(".notify-show");
  if (notify) {
    notify.style.display = "none";
  }
}, 8000); // 8000 milliseconds = 8 seconds
