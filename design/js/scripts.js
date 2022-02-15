/* modal */
// const modalBtns = document.querySelectorAll("#modal-btn");

// les functions
// function deletesProd(deletesId) {
//   // console.log(deletesId);
//   // confirm("Êtes-vous sûr de vouloir supprimer?");

//   if (window.XMLHttpRequest) {
//     xmlhttp = new XMLHttpRequest();
//   } else {
//     xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
//   }
//   xmlhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       document.getElementById("txt").innerHTML = this.responseText;
//       // let sucess = document.querySelector(".success");
//       // if (sucess) {
//       // }
//     }
//   };
//   xmlhttp.open(
//     "GET",
//     "../../controllers/delete-product.php?read=" + deletesId,
//     true
//   );
//   xmlhttp.send();
// }

modalBtns.forEach((modalBtn) => {
  modalBtn.addEventListener("click", (e) => {
    let rep = confirm("voulez-vous vraiment supprimer ce produit?");
    if (rep == true) {
      // deletesProd(modalBtn.value);
      // setTimeout(openModal, 1000);
    } else {
      alert("Suppression annulée");
    }
  });
});
