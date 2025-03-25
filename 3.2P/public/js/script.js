const cardList = [
  {
    title: "Galaxy S25 Ultra",
    image: "images/s25.png",
    link: "Learn more about Galaxy S25 Ultra",
    description: "The latest Galaxy series."
  },
  {
    title: "Galaxy Z Fold6",
    image: "images/fold6.png",
    link: "Learn more about Galaxy Z Fold6",
    description: "The latest Fold series."
  }, 
  {
    title: "Galaxy Z Flip6", 
    image: "images/flip6.png", 
    link: "Learn more about Galaxy Z Flip6", 
    description: "The latest Flip series."
  }
];

const clickMe = () => {
  alert("Thank you for your interest in Samsung phones!");
};

const submitForm = () => {
  let formData = {
    first_name: $('#first_name').val(),
    last_name: $('#last_name').val(),
    email: $('#email').val()
  };
  console.log("Form Data Submitted: ", formData);
};

const addCards = (items) => {
  items.forEach(item => {
    let itemToAppend = `
      <div class="col s12 m4 center-align">
        <div class="card medium">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="${item.image}">
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

$(document).ready(function () {
  $('.materialboxed').materialbox();
  $('.modal').modal();
  $('#clickMeButton').click(() => clickMe());
  $('#formSubmit').click(() => submitForm());
  addCards(cardList);
});
