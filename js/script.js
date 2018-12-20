var link  = document.querySelector(".close_open_button");
var popup = document.querySelector(".modal_window");
var search = document.querySelector(".search_button");

link.addEventListener("click",function(evt) {
    evt.preventDefault();
    if (popup.classList.contains("modal_close")) {
      popup.classList.remove("modal_close");
      popup.classList.add("modal_show");
    }
    else {
      popup.classList.remove("modal_show");
      popup.classList.add("modal_close");
    }
});
