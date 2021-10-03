// set time out

 setTimeout(() => {
  console.log("Hello World");
}, 3500);
 
// prompt

document.getElementById("prompt").addEventListener("click", () => {
  const input = prompt("Enter a number");
  const number = Number(input);
  if (number > 0) {
    alert(`Your Number is : ${number + 200}`);
  } else {
    alert("Please Enter a Number");
  }
});

// confirm

document.getElementById("confirm").addEventListener("click", () => {
  const isWant = confirm("Are You Sure?");
  if (isWant) {
    document.getElementById("output").innerText = document.location.href;
  } else {
    document.getElementById("output").innerText = "Dure Giya Mor";
  }
});

// ----------------------------------------

document.getElementById('submit').addEventListener('click',()=>{
  const productNameInput = document.getElementById('product__name')
  const productPriceInput = document.getElementById('product__price')
  const productName = productNameInput.value
  const productPrice = productPriceInput.value
})


// --------------------------------------------
