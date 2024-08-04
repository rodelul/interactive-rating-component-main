var form = document.getElementById("form-rating");

function submitForm(event){
   event.preventDefault();
   
    var value = form.querySelector('input[name="rating"]:checked').value;
    localStorage.setItem('rating', value);

    document.querySelector('.hero-inner-before').style.display = 'none';
    document.querySelector('.number-value').innerHTML = localStorage.getItem('rating');
    document.querySelector('.hero-inner-after').style.display = 'flex';
}

form.addEventListener("submit", submitForm); 
