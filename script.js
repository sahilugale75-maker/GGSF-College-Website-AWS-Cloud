// CONTACT FORM FUNCTION

function showMessage() {

```
let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let message = document.getElementById("message").value.trim();

if (name === "" || email === "" || message === "") {
    alert("Please fill in all the fields!");
    return;
}

let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailPattern.test(email)) {
    alert("Please enter a valid email address!");
    return;
}

alert("Thank you, " + name + "! Your message has been submitted successfully.");

document.getElementById("name").value = "";
document.getElementById("email").value = "";
document.getElementById("message").value = "";
```

}

// SMOOTH NAVIGATION

document.querySelectorAll('nav a').forEach(function(link) {

```
link.addEventListener('click', function() {

    document.querySelectorAll('nav a').forEach(function(item) {
        item.classList.remove('active');
    });

    this.classList.add('active');

});
```

});

// SCROLL ANIMATION

const observer = new IntersectionObserver(function(entries) {

```
entries.forEach(function(entry) {

    if (entry.isIntersecting) {

        entry.target.classList.add('show');

    }

});
```

}, {
threshold: 0.15
});

document.querySelectorAll(
'.stat-card, .department-card, .faculty-card, .facility-card, .event-card, .vision-card'
).forEach(function(element) {

```
element.classList.add('hidden');
observer.observe(element);
```

});

// WELCOME MESSAGE

window.addEventListener('load', function() {

```
console.log(
    "Welcome to Guru Gobind Singh College of Engineering & Research Centre Website!"
);
```

});

// CURRENT YEAR IN FOOTER

const footerText = document.querySelector('footer p:last-child');

if (footerText) {
footerText.innerHTML =
"© " + new Date().getFullYear() + " All Rights Reserved";
}
