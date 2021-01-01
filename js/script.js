$(window).on('load', function(event) {
    $('body').removeClass('preloading');
    // $('.load').delay(1000).fadeOut('fast');
    $('.load').delay(2000).fadeOut('fast');
});

/* Đổi màu background*/
var switchEl = document.querySelectorAll('.switch');
var rootStyle = document.documentElement.style;

document.getElementById('background-color-picker').addEventListener("change", (event) => {
    rootStyle.setProperty('--bg', event.target.value);
    rootStyle.setProperty('--color', invertColor(event.target.value));
}, false);

function invertColor(hexTripletColor) {
    var color = hexTripletColor;
    color = color.substring(1); // remove #
    color = parseInt(color, 16); // convert to integer
    color = 0xFFFFFF ^ color; // invert three bytes
    color = color.toString(16); // convert to hex
    color = ("000000" + color).slice(-6); // pad with leading zeros
    color = "#" + color; // prepend #
    return color;
}

/* Tăng giảm kích thước font chữ*/

$(document).ready(function() {
    //min font size
    var min = 9;
    //max font size
    var max = 20;
    //grab the default font size
    var reset = $('body').css('fontSize');
    var elm = $('body, p.ending');
    var size = str_replace(reset, 'px', '');
    //Tăng kích thước chữ
    $('a.fontSizePlus').click(function() {
        if (size <= max) {
            size++;
            elm.css({ 'fontSize': size });
        }
        return false;
    });
    //Giảm kích thước chữ
    $('a.fontSizeMinus').click(function() {
        if (size >= min) {
            size--;
            elm.css({ 'fontSize': size });
        }
        return false;
    });
    //Cỡ chữ mặc định
    $('a.fontReset').click(function() {
        elm.css({ 'fontSize': reset });
    });
});

//A string replace function
function str_replace(haystack, needle, replacement) {
    var temp = haystack.split(needle);
    return temp.join(replacement);
}

// Tạo animation cho phần main //
new WOW().init();