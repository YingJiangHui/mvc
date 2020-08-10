import './app1.css';
import $ from 'jquery';

let $btn = $(".app1>.control>button");
let $view = $('.app1>.view');

$view.text(parseInt(localStorage.getItem('value')) || $view.text())
$btn.on('click', function(e) {
    let value = parseInt($view.text());
    switch ($(this).index()) {
        case 0:
            value += 2;
            break;

        case 1:
            value -= 2;
            break;

        case 2:
            value *= 2;
            break;

        case 3:
            value /= 2;
            break;
    }
    localStorage.setItem("value", value);
    $view.text(value);
});