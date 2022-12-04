let counterDisplay1 = document.querySelector(".counter_value1");
let counterPlus1 = document.querySelector(".counter_plus1");
let counterMinus1 = document.querySelector(".counter_minus1");

let count1 = 1;

updateDisplay1();

counterPlus1.addEventListener("click", () => {
  count1++;
  updateDisplay1();
  priceCounter1();
});
counterMinus1.addEventListener("click", () => {
  count1--;
  nullSave();
  updateDisplay1();
  priceCounter1();
});
function nullSave() {
  if (count1 <= 0) {
    count1 = 0;
  }
}
function updateDisplay1() {
  counterDisplay1.innerHTML = count1;
}
let priceCount1 = document.getElementById("price1");
function priceCounter1() {
  let res = count1 * 522;
  priceCount1.innerHTML = res + " com";
}
let counterDisplay2 = document.querySelector(".counter_value2");
let counterPlus2 = document.querySelector(".counter_plus2");
let counterMinus2 = document.querySelector(".counter_minus2");

let count2 = 1;

updateDisplay2();

counterPlus2.addEventListener("click", () => {
  count2++;
  updateDisplay2();
  priceCounter2();
});
counterMinus2.addEventListener("click", () => {
  count2--;
  nullSave();
  updateDisplay2();
  priceCounter2();
});
function nullSave() {
  if (count2 <= 0) {
    count2 = 0;
  }
}
function updateDisplay2() {
  counterDisplay2.innerHTML = count2;
}
let priceCount2 = document.getElementById("price2");
function priceCounter2() {
  let res = count2 * 300;
  priceCount2.innerHTML = res + " com";
}

let counterDisplay3 = document.querySelector(".counter_value3");
let counterPlus3 = document.querySelector(".counter_plus3");
let counterMinus3 = document.querySelector(".counter_minus3");

let count3 = 1;

updateDisplay3();

counterPlus3.addEventListener("click", () => {
  count3++;
  updateDisplay3();
  priceCounter3();
});
counterMinus3.addEventListener("click", () => {
  count3--;
  nullSave();
  updateDisplay3();
  priceCounter3();
});
function nullSave() {
  if (count3 <= 0) {
    count3 = 0;
  }
}
function updateDisplay3() {
  counterDisplay3.innerHTML = count3;
}
let priceCount3 = document.getElementById("price3");
function priceCounter3() {
  let res = count3 * 494;
  priceCount3.innerHTML = res + " com";
}

const imgChange = document.getElementById("img");
const hide = document.getElementById("swiper");

imgChange.addEventListener("click", function () {
  document.getElementById("body").style.height = "1968px";
  if (document.getElementById("body").style.height > "1388px") {
    document.getElementById("body").style.height = "1388px";
  }
  imgChange.classList.toggle("swipe_on");
  hide.classList.toggle("hiden");
});

const imgChange2 = document.getElementById("img2");
const hide2 = document.getElementById("swiper2");

imgChange2.addEventListener("click", function () {
  document.getElementById("body").style.height = "1388px";
  if (document.getElementById("body").style.height > "1388px") {
    document.getElementById("body").style.height = "1388px";
  }
  imgChange2.classList.toggle("swipe_on");
  hide2.classList.toggle("hiden");
});

const trash1 = document.getElementById("trash1");
trash1.addEventListener("click", function () {
  trash1.classList.toggle("trash_on");
});
const trash2 = document.getElementById("trash2");
trash2.addEventListener("click", function () {
  trash2.classList.toggle("trash_on");
});
const trash3 = document.getElementById("trash3");
trash3.addEventListener("click", function () {
  trash3.classList.toggle("trash_on");
});
const trash4 = document.getElementById("trash4");
trash4.addEventListener("click", function () {
  trash4.classList.toggle("trash_on");
});
const trash5 = document.getElementById("trash5");
trash5.addEventListener("click", function () {
  trash5.classList.toggle("trash_on");
});
const trash6 = document.getElementById("trash6");
trash6.addEventListener("click", function () {
  trash6.classList.toggle("trash_on");
});
const trash7 = document.getElementById("trash7");
trash7.addEventListener("click", function () {
  trash7.classList.toggle("trash_on");
});
const trash8 = document.getElementById("trash8");
trash8.addEventListener("click", function () {
  trash8.classList.toggle("trash_on");
});
const trash9 = document.getElementById("trash9");
trash9.addEventListener("click", function () {
  trash9.classList.toggle("trash_on");
});
const eclipse1 = document.getElementById("eclipse1");
eclipse1.addEventListener("click", function () {
  eclipse1.classList.toggle("eclipse_on");
});
const eclipse2 = document.getElementById("eclipse2");
eclipse2.addEventListener("click", function () {
  eclipse2.classList.toggle("eclipse_on");
});
const eclipse3 = document.getElementById("eclipse3");
eclipse3.addEventListener("click", function () {
  eclipse3.classList.toggle("eclipse_on");
});
const eclipse4 = document.getElementById("eclipse4");
eclipse4.addEventListener("click", function () {
  eclipse4.classList.toggle("eclipse_on");
});
const eclipse5 = document.getElementById("eclipse5");
eclipse5.addEventListener("click", function () {
  eclipse5.classList.toggle("eclipse_on");
});
const eclipse6 = document.getElementById("eclipse6");
eclipse6.addEventListener("click", function () {
  eclipse6.classList.toggle("eclipse_on");
});
const eclipse7 = document.getElementById("eclipse7");
eclipse7.addEventListener("click", function () {
  eclipse7.classList.toggle("eclipse_on");
});

const like1 = document.getElementById("like1");
like1.addEventListener("click", function () {
  like1.classList.toggle("like_on");
});
const like2 = document.getElementById("like2");
like2.addEventListener("click", function () {
  like2.classList.toggle("like_on");
});
const like3 = document.getElementById("like3");
like3.addEventListener("click", function () {
  like3.classList.toggle("like_on");
});
const like4 = document.getElementById("like4");
like4.addEventListener("click", function () {
  like4.classList.toggle("like_on");
});
const like5 = document.getElementById("like5");
like5.addEventListener("click", function () {
  like5.classList.toggle("like_on");
});

const like6 = document.getElementById("like6");
like6.addEventListener("click", function () {
  like6.classList.toggle("like_on");
});

const paybut1 = document.getElementById("pay_but1");
paybut1.addEventListener("click", function () {
  paybut1.classList.toggle("button_active");
});
const paybut2 = document.getElementById("pay_but2");
paybut2.addEventListener("click", function () {
  paybut2.classList.toggle("button_active");
});

let check = document.getElementById("chek_form");
check = Boolean(check);
function debitButton() {
  if (check == true) {
    document.getElementById("chek_form").style.backgroundImage =
      "url(/img/checkbox.png)";
    document.getElementById("change_html").innerHTML = "Оплатить 1 016 сом";
    check = false;
  } else if (check == false) {
    document.getElementById("chek_form").style.backgroundImage =
      "url(/img/unchekbox.png)";
    document.getElementById("change_html").innerHTML = "Заказать";
    check = true;
  }
}

let checkBox = document.getElementById("check");
checkBox = Boolean(checkBox);
function setCheck() {
  if (checkBox == true) {
    resultPrice();

    document.getElementById("check").style.backgroundImage =
      "url(/img/unchekbox.png)";
    document.getElementById("chek1").style.backgroundImage =
      "url(/img/unchekbox.png)";
    document.getElementById("chek2").style.backgroundImage =
      "url(/img/unchekbox.png)";
    document.getElementById("chek3").style.backgroundImage =
      "url(/img/unchekbox.png)";
    checkBox = false;
  } else if (checkBox == false) {
    document.getElementById("check").style.backgroundImage =
      "url(/img/checkbox.png)";
    document.getElementById("chek1").style.backgroundImage =
      "url(/img/checkbox.png)";
    document.getElementById("chek2").style.backgroundImage =
      "url(/img/checkbox.png)";
    document.getElementById("chek3").style.backgroundImage =
      "url(/img/checkbox.png)";
    checkBox = true;
  }
}

function resultPrice() {
  if (checkBox == true) {
    console.log(price1 + price2 + price3);
  }
}

function changePayMethod() {
  document.getElementById("pointer").style.pointerEvents = "none";
  const pay_met = document.getElementById("pay_met");
  pay_met.classList.add("payment_method2_container_on");
}

const closer2 = document.getElementById("close2");
closer2.addEventListener("click", function () {
  document.getElementById("pointer").style.pointerEvents = "all";
  const pay_met = document.getElementById("pay_met");
  pay_met.classList.toggle("payment_method2_container_on");
});

function changeDelivery() {
  document.getElementById("pointer").style.pointerEvents = "none";
  const pay = document.getElementById("pay_cont");
  pay.classList.add("payment_method_on");
}

const closer = document.getElementById("close");
closer.addEventListener("click", function () {
  document.getElementById("pointer").style.pointerEvents = "all";
  const pay = document.getElementById("pay_cont");
  pay.classList.toggle("payment_method_on");
});
const pen = document.getElementById("pen");
pen.addEventListener("click", function () {
  document.getElementById("pointer").style.pointerEvents = "none";
  const pay = document.getElementById("pay_cont");
  pay.classList.toggle("payment_method_on");
});
const pen2 = document.getElementById("pen2");
pen2.addEventListener("click", function () {
  document.getElementById("pointer").style.pointerEvents = "none";

  const pay2 = document.getElementById("pay_met");
  pay2.classList.toggle("payment_method2_container_on");
});
