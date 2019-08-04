
    var link = document.querySelector(".button-search");
    var popup = document.querySelector(".modal-search");
    var form = popup.querySelector(".search-form");
    var arrival = popup.querySelector("[name=arrival-date]");
    var departure = popup.querySelector("[name=departure-date]");
    var children = popup.querySelector("[name=children]");
    var adult = popup.querySelector("[name=adult]");

  link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.classList.toggle("modal-hide");
    arrival.focus();
  })

  form.addEventListener("submit", function(evt) {
    if (!arrival.value || !departure.value || !children.value || !adult.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      localStorage.setItem("arrival", arrival.value);
      localStorage.setItem("departure", departure.value);
      localStorage.setItem("children", children.value);
      localStorage.setItem("adult", adult.value);
    }
  })
