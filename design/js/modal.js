// window.addEventListener("load", function () {
//   function sendData() {
//     var XHR = new XMLHttpRequest();

//     // Liez l'objet FormData et l'élément form
//     var FD = new FormData(form);

//     // Définissez ce qui se passe si la soumission s'est opérée avec succès
//     XHR.addEventListener("load", function (event) {
//       alert(event.target.responseText);
//     });

//     // Definissez ce qui se passe en cas d'erreur
//     XHR.addEventListener("error", function (event) {
//       alert("Oups! Quelque chose s'est mal passé.");
//     });

//     // Configurez la requête
//     XHR.open("POST", "../../controllers/auth-product.php");

//     // Les données envoyées sont ce que l'utilisateur a mis dans le formulaire
//     XHR.send(FD);
//   }

//   // Accédez à l'élément form …
//   var form = document.getElementById("myForm");

//   // … et prenez en charge l'événement submit.
//   form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     sendData();
//   });
// });

// Get DOM Elements
const modals = document.querySelectorAll("#my-modal");
const modalBtns = document.querySelectorAll("#btn-danger");
const closeBtns = document.querySelectorAll(".close");

// Events

// modalBtns.forEach((modalBtn, index) => {
//   modalBtn.addEventListener("click", () => {
//     let rep = confirm("voulez-vous vraiment supprimer ce produit?");
//     // console.log(index);
//     if (rep === true) {
//       setTimeout(openModal, 1000);
//     }
//   });
// });
closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", closeModal);
});
window.addEventListener("click", outsideClick);

// Open
function openModal() {
  modals.forEach((modal) => {
    modal.style.display = "block";
    let modalTitle = document.querySelector(".modal-title");
    // modalTitle.innerHTML = "Notification";
    // let modalTextContent = document.querySelector(".modal--text-content");
    // modalTextContent.innerHTML = "Supression effectué avec success..!!!";
    // let modalContent = document.querySelector(".modal-content");
    // modalContent.style.borderLeft = "8px solid green";
    // setTimeout("location.reload(true);", 5000);
  });
}

// Close
function closeModal() {
  modals.forEach((modal) => {
    modal.style.display = "none";
    // location.load();
  });
}

// Close If Outside Click
function outsideClick(e) {
  modals.forEach((modal) => {
    if (e.target == modal) {
      modal.style.display = "none";
      // location.load();
    }
  });
}
