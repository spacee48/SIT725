const clickMe = () => {
  alert("Thank you for your interest in Samsung phones!");
};

const submitForm = () => {
  let formData = {
    first_name: $('#first_name').val(),
    last_name: $('#last_name').val(),
    email: $('#email').val()
  };

  $.ajax({
    url: '/api/form',
    type: 'POST',
    data: JSON.stringify(formData),
    contentType: 'application/json',
    success: function (response) {
      alert("Form submitted successfully!");
      $('#first_name').val('');
      $('#last_name').val('');
      $('#email').val('');
    },
    error: function () {
      alert("There was an error submitting the form.");
    }
  });
};

const addCards = (items) => {
  $("#card-section").empty(); 
  items.forEach(item => {
    let itemToAppend = `
      <div class="col s12 m4 center-align">
        <div class="card medium">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="${item.image}" alt="${item.title}">
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
              ${item.title}<i class="material-icons right">more_vert</i>
            </span>
            <p><a href="#">${item.link}</a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">
              ${item.title}<i class="material-icons right">close</i>
            </span>
            <p class="card-text">${item.description}</p>
          </div>
        </div>
      </div>`;
    $("#card-section").append(itemToAppend);
  });
};

const fetchCards = () => {
  $.get("/api/cards", (data) => {
    console.log("Cards from DB:", data);
    addCards(data);
  }).fail(() => {
    alert("Failed to load card data from server.");
  });
};

$(document).ready(function () {
  $('.materialboxed').materialbox();
  $('.modal').modal();
  $('#clickMeButton').click(() => clickMe());
  $('#formSubmit').click(() => submitForm());
  fetchCards(); 
});
