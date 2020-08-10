import './app4.css'
import $ from "jquery";
const $circle = $('.app4>.circle');
$circle.on('mouseenter', (e) => {
    console.log(e.currentTarget);
    $(e.currentTarget).addClass('action');
}).on('mouseleave', (e) => {
    $(e.currentTarget).removeClass('action')
})