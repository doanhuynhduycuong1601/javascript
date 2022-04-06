
var arr_hinh = [
    "../image/image-noi-bat/1.png",
    "../image/image-noi-bat/2.png",
    "../image/image-noi-bat/3.png",
    "../image/image-hot/may-1.jpg",
    "../image/image-hot/may-2.jpg",
    "../image/image-hot/may-3.jpg",
    "../image/image-hot/may-4.jpg",
    "../image/image-hot/may-5.jpg",
    
]
var index = 0;




function next() {
    index++;
    if (index >= arr_hinh.length)
        index = 0;
    var hinh = document.getElementById("anh");
    hinh.src = arr_hinh[index];
    // document.getElementById("so1").innerHTML = (index-1) ;
    // document.getElementById("so2").innerHTML =  index ;
    // document.getElementById("so3").innerHTML =  (index+1);
    kt(index);
}
function previous() {
    index--;
    if (index < 0)
        index = arr_hinh.length - 1;
    var hinh = document.getElementById("anh");
    hinh.src = arr_hinh[index];
    // document.getElementById("so1").innerHTML = (index-1) ;
    // document.getElementById("so2").innerHTML =  index ;
    // document.getElementById("so3").innerHTML =  (index+1);
    kt(index);

}
function kt(x) {
    if (x == 0) {
        document.getElementById("so1").innerHTML = "";
        document.getElementById("so2").innerHTML = "";
        document.getElementById("so3").innerHTML = x;
        document.getElementById("so3").style.background = "aqua";
        document.getElementById("so4").innerHTML = (x+1);
        document.getElementById("so5").innerHTML = (x+2);
        document.getElementById("so1").style.display = "none"
        document.getElementById("so2").style.display = "none"
        document.getElementById("so4").style.display = ""
        document.getElementById("so5").style.display = ""

    }else if(x==1){
        document.getElementById("so1").innerHTML = "";
        document.getElementById("so2").innerHTML = (x-1);
        document.getElementById("so3").innerHTML = x;
        document.getElementById("so3").style.background = "aqua";
        document.getElementById("so4").innerHTML = (x+1);
        document.getElementById("so5").innerHTML = (x+2);
        document.getElementById("so1").style.display = "none"
        document.getElementById("so2").style.display = ""
    } else if (x == 6) {
        document.getElementById("so1").innerHTML = (x-2);
        document.getElementById("so2").innerHTML = (x-1);
        document.getElementById("so3").innerHTML = x;
        document.getElementById("so3").style.background = "aqua";
        document.getElementById("so4").innerHTML = (x+1);
        document.getElementById("so5").innerHTML = "";
        document.getElementById("so4").style.display = ""
        document.getElementById("so5").style.display = "none"
    }else if(x==7){

        document.getElementById("so1").innerHTML = (x-2);
        document.getElementById("so2").innerHTML = (x-1);
        document.getElementById("so3").innerHTML = x;
        document.getElementById("so3").style.background = "aqua";
        document.getElementById("so4").innerHTML = "";
        document.getElementById("so5").innerHTML = "";
        document.getElementById("so1").style.display = ""
        document.getElementById("so2").style.display = ""
        document.getElementById("so4").style.display = "none"
        document.getElementById("so5").style.display = "none"
    } else {
        document.getElementById("so1").style.display = ""
        document.getElementById("so2").style.display = ""
        document.getElementById("so4").style.display = ""
        document.getElementById("so5").style.display = ""
        document.getElementById("so1").innerHTML = (x-2);
        document.getElementById("so2").innerHTML = (x-1);
        document.getElementById("so3").innerHTML = x;
        document.getElementById("so3").style.background = "aqua";
        document.getElementById("so4").innerHTML = (x+1);
        document.getElementById("so5").innerHTML = (x+2);
    }
}
function run1(a) {
    index = parseInt(a.innerText);
    var hinh = document.getElementById("anh");
    hinh.src = arr_hinh[index];
    kt(index);
}
// setInterval("next()", 3000);