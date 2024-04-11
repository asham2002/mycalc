function calcs(x) {
    if (document.getElementById("number").value == 0) {
        document.getElementById("number").value = "";
        document.getElementById("number").value = x;
    } else {
        document.getElementById("number").value += x;
    }

}
function solve() {
    var x = document.getElementById("number").value;
    var y = eval(x);
    document.getElementById("number").value = y;
}
function clean() {
    document.getElementById("number").value = 0;
}





