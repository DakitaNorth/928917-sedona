var link  = document.querySelector(".close_open_button"),popup = document.querySelector(".modal_window"),arrival_data = popup.querySelector("[name=arrival_data]"),departure_data = popup.querySelector("[name=departure_data]"),grownup_form = popup.querySelector("[name=grownup]"),child_form = popup.querySelector("[name=child]"),search = popup.querySelector(".search_button");link.addEventListener("click",function(evt) {evt.preventDefault();popup.classList.toggle("modal_open");}),search.addEventListener("click", function (evt) {if (!arrival_data.value || !departure_data.value || !grownup_form.value || !child_form.value) {evt.preventDefault();search.classList.remove("search_button_shake");search.offsetWidth = search.offsetWidth;search.classList.add("search_button_shake");}else {localStorage.setItem("arrival_data",arrival_data.value);localStorage.setItem("arrival_data",departure_data.value);localStorage.setItem("grownup",grownup_form.value);localStorage.setItem("child",child_form.value);}});