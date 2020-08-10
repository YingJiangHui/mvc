import './app2.css'
import $ from 'jquery'
let $bar = $('.app2>.menuBar');
let $content = $(".app2>.content");

$bar.on('click', 'li', function(e) {
    let $target = $(e.currentTarget);
    $target
        .addClass('selected')
        .siblings()
        .removeClass('selected');
    let index = $(this).index();
    $content
        .children()
        .eq(index)
        .addClass('action')
        .siblings()
        .removeClass('action');
})
$bar.children('li').eq(0).trigger('click')