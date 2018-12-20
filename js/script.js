var link  = document.querySelector(".close_open_button");
var popup = document.querySelector(".modal_window");
var arrival_data = popup.querySelector("[name=arrival_data]");
var departure_data = popup.querySelector("[name=departure_data]");
var grownup_form = popup.querySelector("[name=grownup]");
var child_form = popup.querySelector("[name=child]");
var search = popup.querySelector(".search_button");


link.addEventListener("click",function(evt) {
    evt.preventDefault();
    if (popup.classList.contains("modal_close")) {
      popup.classList.toggle("modal_close");
    }
    else {
      popup.classList.toggle("modal_close");
    }
});

search.addEventListener("click", function (evt) {
    if (!arrival_data.value || !departure_data.value || !grownup_form.value || !child_form.value) {
      evt.preventDefault();
      search.classList.remove("search_button_shake");
      search.offsetWidth = search.offsetWidth;
      search.classList.add("search_button_shake");
    }
  });
