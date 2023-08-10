"use strict";

function checkSIREN(event)
{
    const siren_siret = document.querySelector('#sirenNumber').value;
    if ( (siren_siret.length == 9 || siren_siret.length == 14)
        && isNumeric(siren_siret)) {
        return true;
    }
    document.querySelector('#sirenNumberError').textContent = "Merci de saisir une valeur à 9 ou 14 chiffres";
    event.preventDefault();
    return false;
}

function checkVATNumberBeginsWithFR(VATNumber)
{
    const VATNumberBeginning = VATNumber.slice(0, 2).toLocaleUpperCase();
    if (VATNumberBeginning.localeCompare("FR") === 0) {
        return true;
    }
    return false;
}

function checkVATNumberEndsWithSIREN(VATNumber, SIREN)
{
    const VATNumberEnd = VATNumber.slice(-9);
    if (VATNumberEnd.localeCompare(SIREN) === 0) {
        return true;
    }
    return false;
}

function checkVATNumberKeyIsNumeric(VATNumber)
{
    const VATNumberKey = VATNumber.slice(2, 2);
    return isNumeric(VATNumberKey);
}

function getSIREN()
{
    return document.querySelector('#sirenNumber').value.slice(0, 9);
}

function checkVATNumber(event)
{
    let vatNumber = document.querySelector('#vatNumber').value;

    let regex = new RegExp("^FR\\d{2}" + getSIREN() + "$");
    if (regex.test(vatNumber))  {
        return true;
    }
    document.querySelector('#vatNumberError').textContent = "Erreur de numéro de TVA !";
    event.preventDefault();
    return false;
}


function attachProfessionnalAccountListeners()
{
    document.querySelector('#professionalForm').addEventListener('submit', checkSIREN);
    document.querySelector('#professionalForm').addEventListener('submit', checkVATNumber);
}