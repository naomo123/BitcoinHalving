//Total blocks mined
$(document).ready(function () {
  $.ajax({
    url: "https://blockchain.info/q/getblockcount",
    type: "GET",
    success: function (data) {
      $("#blockCount").text(data);
    },
    error: function () {
      $("#blockCount").text("Error");
    }
  });
});

//Current difficulty target
$(document).ready(function () {
  $.ajax({
    url: "https://blockchain.info/q/getdifficulty",
    type: "GET",
    success: function (data) {
      $("#difficulty").text(data);
    },
    error: function () {
      $("#difficulty").text("Error");
    }
  });
});

//Average number of transactions per block 
$(document).ready(function () {
  $.ajax({
    url: "https://blockchain.info/q/avgtxnumber",
    type: "GET",
    success: function (data) {
      $("#average").text(data);
    },
    error: function () {
      $("#average").text("Error");
    }
  });
});

//halving date
let halving_day = new Date("2024-04-27");

(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

    x = setInterval(function () {

      const now = new Date().getTime();
        distance = halving_day - now;

      document.getElementById("days").innerText = Math.floor(distance / (day)),
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      if (distance < 0) {
        document.getElementById("headline").innerText = "It's my birthday!";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        clearInterval(x);
      }
      //seconds
    }, 0)
}());