const cardList = [
    {
        title: "Cricket",
        image: "images/cricket.jpg",
        description: "About cricket"
    },

    {
        title: "Football",
        image: "images/football.jpg",
        description: "About football"
    },

]
 


const submitForm = () =>{
  let formData = {};
  formData.first_name = $('#first_name').val();
  formData.last_name = $('#last_name').val();
  formData.password = $('#password').val();
  formData.email = $('#email').val();

  console.log("form Data Sumitted: ", formData);
}

const addCards = 
(items) => {
  items.forEach (
  item => {
    const itemToAppend = `
        <div class="col s4 center-align">
          <div class="card medium">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src="${item.image}" alt="${item.title}">
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">${item.title}<i class="material-icons right">more_vert</i></span>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">${item.title}<i class="material-icons right">close</i></span>
              <p>${item.description}</p>
            </div>
          </div>
        </div>`;
      $(".card-section").append(itemToAppend);
  });
  
};
 


$(document).ready(function () {
  
  const modalInstance = M.Modal.init(document.getElementById('modal1'));

  
  const openModal = () => {
      modalInstance.open();
  }

  
  $('#clickMeButton').click(openModal);

  $('#formSubmit').click(() =>{
      submitForm();
  })

});


