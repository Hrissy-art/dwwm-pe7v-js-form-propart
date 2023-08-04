// 1. le code postal doit être sur 5 chiffres (on suppose qu’on n’a que des utilisateurs français)

function postalLength() {
    let postalInput = document.querySelectorAll(".postal");
    let warningEl = document.querySelector(".warning_postal");

    if (isNaN(postalInput.value) || postalInput.value.length !== 5) {
        warningEl.classList.add("warning_color");
        warningEl.textContent =
            "Il faut saisir le code postale en 5 chiffres valables!";
        warningEl.style.display = "block";

        return false;
    } else {
        warningEl.classList.remove("warning_color");
        warningEl.textContent = "";
        warningEl.style.display = "none";
        return true;
    }
}

// 2. la date de naissance doit être une date valide, et bien évidemment, elle doit être dans le passé (l’utilisateur doit avoir au moins 13 ans pour s’inscrire)

// 3. si l’utilisateur n’a pas coché la case pour accepter les CGV, il faut y remettre le focus et l’afficher en rouge

function conditionFocus() {
    let acceptEls = document.querySelectorAll(".accept");
    acceptEls.forEach((acceptEl) => {
        if (!acceptEl.checked) {
            acceptEl.classList.add("warning_focus");
            acceptEl.focus();
            return false;
        } else {
            acceptEl.classList.remove("warning_focus");
        }
    });

    return true;
}

function main() {
    console.log("start");
    postalLength();
    conditionFocus();
    console.log("end");
}
main();
