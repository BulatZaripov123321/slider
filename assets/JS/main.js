function myFunction() {
    document.getElementById('Dropdown').classList.toggle('show');
    document.getElementById('Dropdown').parentElement.getElementsByClassName('aarrow')[0].classList.toggle('aarrowRot')
}
function Function() {
    document.getElementById('myDropdown1').classList.toggle('show');
    document.getElementById('myDropdown1').parentElement.getElementsByClassName('aarrow')[0].classList.toggle('aarrowRot')
}
var acc = document.getElementsByClassName("accordion_items")
var i

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active")
        var panel = this.nextElementSibling
        if (panel.style.display === "block") {
            panel.style.display = "none"
        } else {
            panel.style.display = "block"
            document.getElementById('panel').parentElement.getElementsByClassName('arrow')[0].classList.toggle('aarrowRot')
        }
    });
}

const slider = document.querySelectorAll('.slide')
let index = 0
function slider1() {
    slider[index].classList.remove('active')
    index++
    if (index >= slider.length) {
        index = 0
    }
        slider[index].classList.add('active')
    
}
setInterval(slider1,3000)
