document.addEventListener('DOMContentLoaded', function () {
    let form = document.getElementById('popup-form');
    let displayData = document.getElementById("displayData");

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let bornDate = document.getElementById('dateOB').value;
        let gender = document.querySelector('input[name="gender"]:checked').value;

        const dataList = document.querySelector('#sajt');
        const options = dataList.querySelectorAll('option');
        let favouriteSajtok = [];
        options.forEach(option => {
            favouriteSajtok.push(option.value);
        });

        const messageInput = document.querySelector('#message');
        const message = messageInput.value;

        let datasDiv = document.createElement('div');
        datasDiv.innerHTML = '<h3>Válaszaid</h3>' +
            '<p><strong>Név:</strong> ' + name + '</p>' +
            '<p><strong>E-mail:</strong> ' + email + '</p>' +
            '<p><strong>Szül. idő:</strong> ' + bornDate + '</p>' +
            '<p><strong>Nem:</strong> ' + gender + '</p>' +
            '<p><strong>Kedvenc sajt:</strong> ' + favouriteSajtok[0] + '</p>' +
            '<p><strong>Üzenet:</strong> ' + message + '</p>';
        displayData.appendChild(datasDiv);

        form.style.display = 'none';
    });
});

$(document).ready(function () {

    $('.content').mouseenter(function () {
        $(this).find('.content-text').show();
    }).mouseleave(function () {
        $(this).find('.content-text').hide();
    });

    $('#formBtn').hover(function () {
        $(this).stop().animate({ opacity: 0.7 }, 'fast');
    }, function () {
        $(this).stop().animate({ opacity: 1 }, 'fast');
    });

    $("#formBtn").click(function () {
        $("#popup-form").fadeIn();
    });

    $('#satisfaction').on('input', function () {
        $('#satisfactionValue').text($(this).val());
    });

    $('.menu-item').mouseenter(function () {
        $(this).stop().animate({ fontSize: '24px' }, 200);
    }).mouseleave(function () {
        $(this).stop().animate({ fontSize: '18px' }, 200);
    });

    $(document).mouseup(function (e) {
        let container = $("#popup-form");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.fadeOut();
        }
    });

    $('#popup-form').submit(function (e) {
        e.preventDefault();
        $('#error').empty();
        let name = $('#name').val();
        let email = $('#email').val();

        if (name === '') {
            $('#name').css('border', '1px solid red');
            $('#error-name').text('Írd be a neved!');
        } else {
            $('#name').css('border', '1px solid #ccc');
        }

        if (email === '') {
            $('#email').css('border', '1px solid red');
            $('#error-email').text('Írd be az Email címed!');
        } else if (!isValidEmail(email)) {
            $('#email').css('border', '1px solid red');
            $('#error').text('Nem érvényes Email cím!');
        } else {
            $('#email').css('border', '1px solid #ccc');
        }

    });
});

function isValidEmail(email) {
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

const video = document.getElementById('videoPlayer');

function togglePlayPause() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}
function mute() {
    video.muted = !video.muted;
}

function decreaseVolume() {
    if (video.volume > 0) {
        video.volume -= 0.5;
    }
}

function increaseVolume() {
    if (video.volume < 1) {
        video.volume += 0.5;
    }
}

const videoPlayer = document.getElementById('myVideo');
video.loop = true;


function showAlert() {
    alert("Elküldted a kérdőívet! Köszönjük!");
}