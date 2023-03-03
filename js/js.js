// * fade in & fade out させる

var listTicker = function(options) {

    var defaults = {
        list: [],
        startIndex:0,
        interval: 3 * 1000,
    }   
    var options = $.extend(defaults, options);

    var listTickerInner = function(index) {

        if (options.list.length == 0) return;

        if (!index || index < 0 || index > options.list.length) index = 0;

        var value= options.list[index];

        options.trickerPanel.fadeOut(function() {
            $(this).html(value).fadeIn();
        });
        
        var nextIndex = (index + 1) % options.list.length;

        setTimeout(function() {
            listTickerInner(nextIndex);
        }, options.interval);

    };
    
    listTickerInner(options.startIndex);
}






// * 素数を配列化する
// * for文で計算して出た結果をpushで配列に入れる。

var numberlist = new Array();
var num = 1000;
for (let i=2; i<=num; i++) {
    flag = true;
    for (let j=2; j<=i-1; j++) {
        if (i % j == 0) {
            flag = false;
            break;
        }
    }
    if (flag) {
        numberlist.push(i);
    }
}



// * 素数を fade in & fade out に入れる
// * jquery

$(function() {
    listTicker({
        list: numberlist,
        startIndex: 0,
        trickerPanel: $('#prime-number'),
        interval: 3 * 400,
    });
});



// * audio

function playa() {
    var audio = document.getElementById("audio-a");
    audio.play();
}
function playb() {
    var audio = document.getElementById("audio-b");
    audio.play();
}