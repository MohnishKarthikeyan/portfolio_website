var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("site-menu");

function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

// google sheet contact me

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzTmn-mxc_GrD4QDShW0i6sg6rRh9utgFCfY9zHHJNZuomN6xop9nB1mERxnjXmpQ-G/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Your Message has been successfully sent!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 6000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

//email js integrations
function sendMail() {
  let params = {
    name: document.getElementById("name123").value,
    email: document.getElementById("email123").value,
    message: document.getElementById("msg123").value,
  };
  emailjs.send("service_ikbzqtg", "template_hohnc7g", params);
}

// home page text animations
var typed = new Typed(".text", {
  strings: ["Web Developer", "Designer", "Student", "Tech Enthusiast"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
