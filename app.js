const data = [
  {
    id: 1,
    title: "Iphone 15",
    price: 1000,
    count: 0,
    img: "https://images.macrumors.com/t/w71yM5sL7rq84kObeWpdXPq6yws=/1600x1200/smart/article-new/2022/09/iPhone-14-and-14-Plus-Newsroom.jpg",
  },
  {
    id: 2,
    title: "Iphone Pro",
    price: 1100,
    count: 0,
    img: "https://images.macrumors.com/t/w71yM5sL7rq84kObeWpdXPq6yws=/1600x1200/smart/article-new/2022/09/iPhone-14-and-14-Plus-Newsroom.jpg",
  },
  {
    id: 3,
    title: "Iphone 15 Pro Max",
    price: 1250,
    count: 0,
    img: "https://images.macrumors.com/t/w71yM5sL7rq84kObeWpdXPq6yws=/1600x1200/smart/article-new/2022/09/iPhone-14-and-14-Plus-Newsroom.jpg",
  },
];

const items = document.getElementById("container");

items.innerHTML = "";

for (let i = 0; i < data.length; i++) {
  items.innerHTML += `
    <div class="card">
        <img
          src="${data[i].img}"
          alt=""
        />
        <h1>${data[i].title}</h1>
        <div class="info">
          <p>$${data[i].price}</p>
          <button onclick="buy(${i})">+</button>
          <span id="count-${i}">${data[i].count}</span>
          <button onclick="cancel(${i})">-</button>
        </div>
      </div>
  `;
}

document.getElementById("payout").style.display = "none";

function buy(index) {
  let count = document.getElementById(`count-${index}`);
  count.innerHTML = parseInt(count.innerHTML) + 1;
  document.getElementById("payout").style.display = "block";
}

function cancel(index) {
  let count = document.getElementById(`count-${index}`);
  let currentCount = parseInt(count.innerHTML);
  if (currentCount > 0) {
    count.innerHTML = currentCount - 1;
  } else if (currentCount === 0) {
    document.getElementById("payout").style.display = "none";
  }
}

document.getElementById("login").style.display = "none";
document.getElementById("home").style.display = "none";

function payout() {
  document.getElementById("login").style.display = "block";
  document.getElementById("container").style.display = "none";
  document.getElementById("payout").style.display = "none";
}
function purcase() {
  const cardNumber = document.getElementById("cardNumber").value;
  const cardExpires = document.getElementById("cardExpires").value;
  const cvv = document.getElementById("cvv").value;
  const text = document.getElementById("text");

  if (cardNumber === "" || isNaN(cardNumber)) {
    text.innerHTML = "please enter your card number";
    return false;
  }
  if (cardExpires === "") {
    text.innerHTML = "please enter your card expiration date";
    return false;
  }
  if (cvv === "" || isNaN(cvv)) {
    text.innerHTML = "please enter your cvv code";
    return false;
  }
  text.innerHTML = "Successfully purchased Refersh Your Page";
  return false;
}
