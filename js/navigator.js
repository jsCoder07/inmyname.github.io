document.querySelector('.fa-power-off').addEventListener('click', () => {
    $.ajax({
        url: 'logout.php',
        type: 'post',
        data: "",
        success: function(response) {

            window.location.href = "index.php";

        }
    });
})

let bot = document.querySelector('.i');
let li = document.querySelectorAll('a');

const flip = (i) => {
    li[i].classList.add('animated', 'flip');
}
bot.addEventListener('click', () => {
    let men = document.querySelector('.men');
    let menSec = document.querySelector('.menSec');
    if (bot.innerHTML === '<i class="fas fa-times"></i>') {
        bot.innerHTML = '<i class="fas fa-bars"></i>';
        bot.classList.remove('animated', 'slideInDown');
        men.classList.remove('animated', 'slideInDown');
        menSec.classList.remove('animated', 'slideInDown');
        bot.classList.add('animated', 'slideInUp');
        for (i = 0; i < li.length; ++i) {
            li[i].classList.remove('animated', 'flip');

        }

        men.classList.toggle("size");
        menSec.classList.toggle("opa-100");
    } else {
        bot.innerHTML = '<i class="fas fa-times"></i>';
        bot.classList.add('animated', 'slideInDown');
        men.classList.add('animated', 'slideInDown');
        menSec.classList.add('animated', 'slideInDown');
        bot.classList.remove('animated', 'slideInUp');

        for (i = 0; i < li.length; ++i) {

            flip(i);
        }


        men.classList.toggle("size");
        menSec.classList.toggle("opa-100");

    }



})
let myVar = setInterval(() => {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.querySelector(".time").innerHTML = t;
}, 1000);


let menus = document.querySelectorAll('.secNav');
let menArr = Array.prototype.slice.call(menus);
const menMak = (menu) => {
    menArr.forEach((el) => {
        el.classList.remove('size');
        let elem = document.querySelector(menu);
        elem.classList.add("size");
        elem.classList.add('animated', 'flip');
        setTimeout(() => {
            elem.classList.remove('animated', 'flip');
        }, 500);
    })
}
$("#home").click(() => {
    window.location.href = 'dash.php';
})
$("#events").click(() => {
    menMak('.eventNav');
})
$("#staff").click(() => {
    menMak('.staffNav');
})
$("#members").click(() => {
    menMak('.memberNav');
})
$("#payment").click(() => {
    menMak('.payNav');
})
$("#guests").click(() => {
    menMak('.guestNav');
})
$("#web").click(() => {
    menMak('.webNav');
})
$("#mail").click(() => {
    menMak('.mailNav');
})
$("#users").click(() => {
    menMak('.userNav');
})
$("#analytics").click(() => {
    menMak('.lyticNav');
})
$("#setting").click(() => {
    menMak('.setNav');
})