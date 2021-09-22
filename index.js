setTimeout(() => {
  console.log("Hello World");
}, 3500);

document.getElementById("prompt").addEventListener("click", () => {
  const input = prompt("Enter a number");
  const number = Number(input);
  if (number > 0) {
    alert(`Your Number is : ${number + 200}`);
  } else {
    alert("Please Enter a Number");
  }
});

document.getElementById("confirm").addEventListener("click", () => {
  const isWant = confirm("Are You Sure?");
  if (isWant === true) {
    document.getElementById("output").innerText = document.location.href;
  } else {
    document.getElementById("output").innerText = "Dure Giya Mor";
  }
});
