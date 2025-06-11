function showAlert(){
    alert("Thanks for visiting my homepage!");
}

function validateForm(){
    let name = document.getElementById('name').value;
    if (name.length < 3){
        alert("Name must be at least 3 characters long.");
        return false;
    }
    return true;
}

document.getElementById('contactForm').addEventListener('submit', function(event){
    event.preventDefault();
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    if (name.length < 3) {
        alert("Name must be at least 3 characters long.");
        return;
    }

    const subject = encodeURIComponent("New message from " + name);
    const body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message);

    window.location.href = `mailto:adeena.farooque@gmail.com?subject=${subject}&body=${body}`;
});
