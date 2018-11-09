function setup(){
    loadJSON("https://cse.google.com/cse?cx=013645468074974496473:p6hx0srhowe", loadData,'jsonp');

}

function loadData(data){
    var cx = '013645468074974496473:p6hx0srhowe';
    var gcse = document.getElementById('anoRoot');
    var search = document.getElementsByTagName('input');
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByClassName('Ano')[0];





}