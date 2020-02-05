
function viewDiv(id) {
    let el = document.getElementById('block' + id);
    let img = document.getElementById('block' + id + 'IMG');
    if (el.style.display === "block") {
        changeView(el,img,"none",-90);
    } else {
        changeView(el,img,"block",360);
    }
}
function changeView(div,img,displayValue,deg){
    div.style.display = displayValue;
    img.style.transform= "rotate("+deg+"deg)";
}
window.onload = function () {
    const app = new Vue({
        el:'#app',

        data:{
            isVisibleBlock1: true, isVisibleBlock2: false, isVisibleBlock3: false
        }
    });
};