  var link = document.querySelector(".title-button");
  var popup = document.querySelector(".search-form");
  var arrivalDate = popup.querySelector("[name=arrival-date]");
  var departureDate = popup.querySelector("[name=departure-date]");
  var adults = popup.querySelector("[name=adults]");
  var children = popup.querySelector("[name=children]");
  var isStorageSupport = true;
  var arrivalDateStorage = "";
  var departureDateStorage = "";
  var adultsStorage = "";
  var childrenStorage = "";

  try {
    arrivalDateStorage = localStorage.getItem("arrivalDate");
    departureDateStorage = localStorage.getItem("departureDate");
    adultsStorage = localStorage.getItem("adults");
    childrenStorage = localStorage.getItem("children");
  } catch (err) {
    isStorageSupport = false;
  }

  link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.toggle("search-form-show");

    if (arrivalDateStorage) {
      arrivalDate.value = arrivalDateStorage;
    }
    if (departureDateStorage) {
      departureDate.value = departureDateStorage;
    }
    if (adultsStorage) {
      adults.value = adultsStorage;
    }
    if (childrenStorage) {
      children.value = childrenStorage;
    }
  });

  popup.addEventListener("submit", function(evt) {
    if (!arrivalDate.value || !departureDate.value || !adults.value || !children.value) {
      evt.preventDefault();
      if (!arrivalDate.value) {
        arrivalDate.classList.add("input-invalid");
      }
      if (!departureDate.value) {
        departureDate.classList.add("input-invalid");
      }
      if (!adults.value) {
        adults.classList.add("input-invalid");
      }
      if (!children.value) {
        children.classList.add("input-invalid");
      }

    } else {
      if (isStorageSupport) {
        localStorage.setItem("arrivalDate", arrivalDate.value);
        localStorage.setItem("departureDate", departureDate.value);
        localStorage.setItem("adults", adults.value);
        localStorage.setItem("children", children.value);
      }
    }
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("search-form-show")) {
        popup.classList.remove("search-form-show");
      }
    }
  });
