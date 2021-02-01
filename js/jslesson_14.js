
const form = document.querySelector("form");
const quizResult = document.getElementById("quizResult");

let result = 0;
form.addEventListener("submit", event=> {
    event.preventDefault();
    if(form.q1.value === "" || form.q2.value === "" || form.q3.value === "" || form.q4.value === "" ){
        alert("Kérlek hogy minden kérdésre adj választ!!!")
    } else {
        if(form.q1.value === "A" || form.q2.value === "A" || form.q3.value === "A" ||form.q4.value === "A") {
            result += 0;
        }
        if(form.q1.value === "B") {
            result += 25;
        }
        if(form.q2.value === "B") {
            result += 25;
        }
        if(form.q3.value === "B") {
            result += 25;
        }
        if(form.q4.value === "B") {
            result += 25;
        }
        quizResult.innerText = "Te " + result + "%-ban vagy programozó";
        window.scrollBy(0, -1400);
    }
})




