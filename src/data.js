function setup(){
    data = loadJSON("https://cse.google.com/cse?cx=013645468074974496473:p6hx0srhowe", loadData,'jsonp');

}

function loadData(data){
    var cx = '013645468074974496473:p6hx0srhowe';
    var gcse = document.getElementById('anoRoot');
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementById('Ano')[0];
    s.parentNode.insertBefore(gcse, s);


}