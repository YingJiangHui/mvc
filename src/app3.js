import "./app3.css"
import $ from "jquery"

let $box = $('.app3>.box');

$box.on('click', (e) => {
    $(e.currentTarget).toggleClass('action')
})