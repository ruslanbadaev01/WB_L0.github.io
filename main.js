const imgChange = document.getElementById("img");
const hide = document.getElementById("swiper");

imgChange.addEventListener("click", function () {
  imgChange.classList.toggle("swipe_on");
  hide.classList.toggle("hiden");
});

const imgChange2 = document.getElementById("img2");
const hide2 = document.getElementById("swiper2");

imgChange2.addEventListener("click", function () {
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

let check = document.getElementById("chek_form");
check = Boolean(check);
const check_on = check.classList.toggle("check_on");

function debitButton() {
  console.log(check);
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

const chek = document.getElementById("check");
chek.addEventListener("click", function () {
  chek.classList.toggle("check");
  const chek1 = document.getElementById("chek1");
  const chek2 = document.getElementById("chek2");
  const chek3 = document.getElementById("chek3");

  if (chek.classList.value === "check_on check") {
    chek1.classList.toggle("check");
    chek2.classList.toggle("check");
    chek3.classList.toggle("check");
  }
});
