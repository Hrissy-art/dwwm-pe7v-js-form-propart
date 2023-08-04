//  afficher les formulaire l'un ou l'autre en fonction du clique de l'utilisateur
let blocEl_1 = document.querySelector("#bloc_1");
let blocEl_2 = document.querySelector("#bloc_2");
let individuForm = document.getElementById("individu");
let companyForm = document.getElementById("company");

function handlerForm() {
    if (blocEl_1.classList.contains("active")) {
        individuForm.style.display = "none";
        companyForm.style.display = "block";
        blocEl_1.classList.remove("active");
        blocEl_2.classList.add("active");
    } else {
        companyForm.style.display = "none";
        individuForm.style.display = "block";
        blocEl_2.classList.remove("active");
        blocEl_1.classList.add("active");
    }
}

blocEl_1.addEventListener("click", handlerForm);
blocEl_2.addEventListener("click", handlerForm);
