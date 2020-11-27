const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#input-amount");
const confirmBtn = document.querySelector("#btn-confirm");
const cancelBtn = document.querySelector("#btn-cancel");
const expenseList = document.querySelector("#expenses-list");
const totalExpensesOutput = document.querySelector("#total-expenses");
const alertCtrl = document.querySelector("ion-alert-controller");

let totalExpenses = 0;

const clear = () => {
  reasonInput.value = "";
  amountInput.value = "";
};

function presentAlert() {
  const alert = document.createElement("ion-alert");
  alert.message = "Please enter valid reason and amount!";
  alert.header = "Invalid inputs";
  alert.buttons = ["Okay"];
  document.body.appendChild(alert);
  return alert.present();
}

confirmBtn.addEventListener("click", () => {
  const enteredReason = reasonInput.value;
  const enteredAmount = amountInput.value;

  if (
    enteredReason.trim().length <= 0 ||
    enteredAmount <= 0 ||
    enteredAmount.trim().length <= 0
  ) {
    presentAlert();
    return;
  }
  const newItem = document.createElement("ion-item");
  newItem.textContent = enteredReason + ": $" + enteredAmount;

  expenseList.appendChild(newItem);

  totalExpenses += +enteredAmount;
  totalExpensesOutput.textContent = totalExpenses;
  clear();
});

cancelBtn.addEventListener("click", clear);
