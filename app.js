let buttun1 = document.querySelector(".btn1");
let buttun2 = document.querySelector(".btn2");
let buttun3 = document.querySelector(".btn3");
let sum = document.querySelector(".natija");

let object = {
  buttun1: 0,
  buttun2: 1,
  buttun3: 2,
};
let aa = Object.values(object);

buttun1.addEventListener("click", () => {
  let random = Math.floor(Math.random() * aa.length);

  if (random === 0) {
    sum.textContent = "Durrang Boldi !";
  } else if (random === 1) {
    sum.textContent = "Yutqazdingiz";
  } else {
    sum.textContent = "Siz Yutdingiz";
  }
});


buttun2.addEventListener("click", () => {
    let random = Math.floor(Math.random() * aa.length);
  
    if (random === 0) {
      sum.textContent = "Siz Yutdingiz !";
    } else if (random === 1) {
      sum.textContent = "Durrang Boldi !";
    } else {
      sum.textContent = "Siz Yutqazdingiz";
    }
  });


  buttun3.addEventListener("click", () => {
    let random = Math.floor(Math.random() * aa.length);
  
    if (random === 0) {
      sum.textContent = "Siz Yutqazdingiz !";
    } else if (random === 1) {
      sum.textContent = "Yutdingiz";
    } else {
      sum.textContent = "Durrrang";
    }
  });