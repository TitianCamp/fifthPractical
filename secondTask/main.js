const button1 = document.getElementById("btn-1")
const button2 = document.getElementById("btn-2")
const button3 = document.getElementById("btn-3")
const button4 = document.getElementById("btn-4")
const button5 = document.getElementById("btn-5")

function sayQuote(numberOfButton, quote) {
    numberOfButton.addEventListener("click", () => alert(quote))
}

sayQuote(button1, "Вітчизна — ось і альфа, і омега!")
sayQuote(button2, "Нації вмирають не від інфаркту. Спочатку їм відбирає мову.")
sayQuote(button3, "Нема на світі України, немає другого Дніпра.")
sayQuote(button4, "Ще не вмерла України і слава, і воля.")
sayQuote(button5, "Я дуже люблю народну українську мову, звучну, барвисту й таку м'яку.")

function changeWindow(window_){
    window.location.href = window_;
}