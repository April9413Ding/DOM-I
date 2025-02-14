const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let navItem = document.querySelectorAll("nav a");
navItem[0].textContent = siteContent["nav"]["nav-item-1"];
navItem[1].textContent = siteContent["nav"]["nav-item-2"];
navItem[2].textContent = siteContent["nav"]["nav-item-3"];
navItem[3].textContent = siteContent["nav"]["nav-item-4"];
navItem[4].textContent = siteContent["nav"]["nav-item-5"];
navItem[5].textContent = siteContent["nav"]["nav-item-6"];

const newNavItem1 = document.createElement("a");
newNavItem1.textContent = "New1";

const newNavItem2 = document.createElement("a");
newNavItem2.textContent = "New2";

let navBar = document.querySelector("nav");
navBar.prepend(newNavItem1);
navBar.append(newNavItem2);

navItem.forEach(item =>{ item.style.color = "green";});

document.querySelector("h1").textContent = siteContent["cta"]["h1"];

document.querySelector(".cta-text button").textContent = siteContent["cta"]["button"];

document.querySelector("#cta-img").setAttribute("src", siteContent["cta"]["img-src"]);

document.querySelector("#middle-img").setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let headline4 = document.querySelectorAll("h4");
headline4[0].textContent = siteContent["main-content"]["features-h4"];
headline4[1].textContent = siteContent["main-content"]["about-h4"];
headline4[2].textContent = siteContent["main-content"]["services-h4"];
headline4[3].textContent = siteContent["main-content"]["product-h4"];
headline4[4].textContent = siteContent["main-content"]["vision-h4"];
headline4[5].textContent = siteContent["contact"]["contact-h4"];

let allParagraph = document.querySelectorAll("p");
allParagraph[0].textContent = siteContent["main-content"]["features-content"];
allParagraph[1].textContent = siteContent["main-content"]["about-content"];
allParagraph[2].textContent = siteContent["main-content"]["services-content"];
allParagraph[3].textContent = siteContent["main-content"]["product-content"];
allParagraph[4].textContent = siteContent["main-content"]["vision-content"];
allParagraph[5].textContent = siteContent["contact"]["address"];
allParagraph[6].textContent = siteContent["contact"]["phone"];
allParagraph[7].textContent = siteContent["contact"]["email"];
allParagraph[8].textContent = siteContent["footer"]["copyright"];