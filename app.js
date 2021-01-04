let btnAdd = document.getElementById("btnAdd");
let btnAddIncome = document.getElementById("btnAddRent");
let btnCalcul = document.getElementById("btnCalcul");
let btnReset = document.getElementById("btnReset");

let outcome = 0;
let income = 0;

btnAdd.addEventListener("click", ()=> {
    let name = document.getElementById("nom");
    let amount = document.getElementById("number");
    let title = name.value;
    let amountValue = amount.value;
    let divMemo = document.getElementById("memo");

    divMemo.innerHTML += "<br>" + title + " - " + amountValue;
    outcome += parseFloat(amountValue);
})

btnAddIncome.addEventListener("click", ()=> {
    let nameRent = document.getElementById("rent");
    let amountRent = document.getElementById("numberRent");
    let titleRent = nameRent.value;
    let amountValueRent = amountRent.value;
    let divMemoRent = document.getElementById("memoRent");

    divMemoRent.innerHTML += "<br>" + titleRent + " - " + amountValueRent;
    income += parseFloat(amountValueRent);
})

btnCalcul.addEventListener("click", ()=> {
    let divResult = document.getElementById("result");
    let divImg = document.getElementById("imgStonk");
    let imgSrc = "stonk.gif";
    let imgSrc2 = "notStonks.gif";

    if (income-outcome > 0) {
        divResult.innerHTML += "Bilan : + " + (income-outcome);
        divResult.style.color = "green";
        divImg.style.backgroundImage = "url("+ imgSrc +")";
    }
    else if (income-outcome < 0) {
        divResult.innerHTML += "Bilan : " + (income-outcome);
        divResult.style.color = "red";
        divImg.style.backgroundImage = "url("+ imgSrc2 +")";
    }
    else {
        divResult.innerHTML += "Bilan : neutre";
    }
})