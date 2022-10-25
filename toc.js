
var c1 = document.getElementById('c1').value;
var c2 = document.getElementById('c2').value;
var c3 = document.getElementById('c3').value;
var c4 = document.getElementById('c4').value;
var c5 = document.getElementById('c5').value;
var c6 = document.getElementById('c6').value;
var c6 = document.getElementById('c7').value;
var c6 = document.getElementById('c8').value;
var c6 = document.getElementById('c9').value;
  


function myfun(){
    if ((c1 == 'x' || c1 == 'X') && (c2 == 'x' || c2 == 'X') && (c3 == 'x' || c3 == 'X')) {
        document.getElementById('c4').disabled = true;
        document.getElementById('c5').disabled = true;
        document.getElementById('c6').disabled = true;
        document.getElementById('c7').disabled = true;
        document.getElementById('c8').disabled = true;
        document.getElementById('c9').disabled = true;
        window.alert('user x won ');
    }
    else if ((c1 == 'x' || c1 == 'X') && (c4 == 'x' || c4 == 'X') && (c7 == 'x' || c7 == 'X')) {
        document.getElementById('c6').disabled = true;
        document.getElementById('c4').disabled = true;
        document.getElementById('c7').disabled = true;
        document.getElementById('c5').disabled = true;
        document.getElementById('c8').disabled = true;
        document.getElementById('c9').disabled = true;
        window.alert('user x won ');
    }
    else if ((c7 == 'x' || c7 == 'X') && (c8 == 'x' || c8 == 'X') && (c9 == 'x' || c9 == 'X')) {
        document.getElementById('c8').disabled = true;
        document.getElementById('c5').disabled = true;
        document.getElementById('c7').disabled = true;
        document.getElementById('c4').disabled = true;
        document.getElementById('c2').disabled = true;
        document.getElementById('c1').disabled = true;
        window.alert('user x won ');
    }
    
    else if ((c3 == 'x' || c3 == 'X') && (c6 == 'x' || c6 == 'X') && (c9 == 'x' || c9 == 'X')) {
        document.getElementById('c1').disabled = true;
        document.getElementById('c2').disabled = true;
        document.getElementById('c3').disabled = true;
        document.getElementById('c7').disabled = true;
        document.getElementById('c8').disabled = true;
        document.getElementById('c9').disabled = true;
        window.alert('user x won ');
    }
    else if ((c1 == 'x' || c1 == 'X') && (c5 == 'x' || c5 == 'X') && (c9 == 'x' || c9 == 'X')) {
        document.getElementById('c2').disabled = true;
        document.getElementById('c3').disabled = true;
        document.getElementById('c4').disabled = true;
        document.getElementById('c8').disabled = true;
        document.getElementById('c6').disabled = true;
        document.getElementById('c7').disabled = true;
        window.alert('user x won ');
    }
    else if ((c3 == 'x' || c3 == 'X') && (c5 == 'x' || c5 == 'X') && (c7 == 'x' || c7 == 'X')) {
        document.getElementById('c4').disabled = true;
        document.getElementById('c5').disabled = true;
        document.getElementById('c6').disabled = true;
        document.getElementById('c1').disabled = true;
        document.getElementById('c2').disabled = true;
        document.getElementById('c3').disabled = true;
        window.alert('user x won ');
    }
    else if ((c4 == 'x' || c4 == 'X') && (c5 == 'x' || c5 == 'X') && (c6 == 'x' || c6 == 'X')) {
        document.getElementById('c4').disabled = true;
        document.getElementById('c3').disabled = true;
        document.getElementById('c6').disabled = true;
        document.getElementById('c1').disabled = true;
        document.getElementById('c2').disabled = true;
        document.getElementById('c8').disabled = true;
        window.alert('user x won ');
    }
    else if ((c2 == 'x' || c2 == 'X') && (c5 == 'x' || c5 == 'X') && (c8 == 'x' || c8 == 'X')) {
        document.getElementById('c4').disabled = true;
        document.getElementById('c2').disabled = true;
        document.getElementById('c6').disabled = true;
        document.getElementById('c1').disabled = true;
        document.getElementById('c7').disabled = true;
        document.getElementById('c8').disabled = true;
        window.alert('user x won ');
    }
    else if ((c1 == 'o' || c1 == 'O') && (c2 == 'o' || c2 == 'O') && (c3 == 'o' || c3 == 'O')) {
        document.getElementById('c4').disabled = true;
        document.getElementById('c5').disabled = true;
        document.getElementById('c6').disabled = true;
        document.getElementById('c7').disabled = true;
        document.getElementById('c8').disabled = true;
        document.getElementById('c9').disabled = true;
        window.alert('user o won ');
    }
    else if ((c1 == 'o' || c1 == 'O') && (c4 == 'o' || c4 == 'O') && (c7 == 'o' || c7 == 'O')) {
        document.getElementById('c6').disabled = true;
        document.getElementById('c4').disabled = true;
        document.getElementById('c7').disabled = true;
        document.getElementById('c5').disabled = true;
        document.getElementById('c8').disabled = true;
        document.getElementById('c9').disabled = true;
        window.alert('user o won ');
    }
    else if ((c7 == 'o' || c7 == 'O') && (c8 == 'o' || c8 == 'O') && (c9 == 'o' || c9 == 'O')) {
        document.getElementById('c8').disabled = true;
        document.getElementById('c5').disabled = true;
        document.getElementById('c7').disabled = true;
        document.getElementById('c4').disabled = true;
        document.getElementById('c2').disabled = true;
        document.getElementById('c1').disabled = true;
        window.alert('user o won ');
    }
    
    else if ((c3 == 'o' || c3 == 'O') && (c6 == 'o' || c6 == 'O') && (c9 == 'o' || c9 == 'O')) {
        document.getElementById('c1').disabled = true;
        document.getElementById('c2').disabled = true;
        document.getElementById('c3').disabled = true;
        document.getElementById('c7').disabled = true;
        document.getElementById('c8').disabled = true;
        document.getElementById('c9').disabled = true;
        window.alert('user o won ');
    }
    else if ((c1 == 'o' || c1 == 'O') && (c5 == 'o' || c5 == 'O') && (c9 == 'o' || c9 == 'O')) {
        document.getElementById('c1').disabled = true;
        document.getElementById('c3').disabled = true;
        document.getElementById('c4').disabled = true;
        document.getElementById('c8').disabled = true;
        document.getElementById('c9').disabled = true;
        document.getElementById('c7').disabled = true;
        window.alert('user o won ');
    }
    else if ((c3 == 'o' || c3 == 'O') && (c5 == 'o' || c5 == 'O') && (c7 == 'o' || c7 == 'O')) {
        document.getElementById('c4').disabled = true;
        document.getElementById('c5').disabled = true;
        document.getElementById('c6').disabled = true;
        document.getElementById('c1').disabled = true;
        document.getElementById('c2').disabled = true;
        document.getElementById('c3').disabled = true;
        window.alert('user o won ');
    }
    else if ((c4 == 'o' || c4 == 'O') && (c5 == 'o' || c5 == 'O') && (c6 == 'o' || c6 == 'O')) {
        document.getElementById('c4').disabled = true;
        document.getElementById('c3').disabled = true;
        document.getElementById('c6').disabled = true;
        document.getElementById('c1').disabled = true;
        document.getElementById('c2').disabled = true;
        document.getElementById('c8').disabled = true;
        window.alert('user o won ');
    }
    else if ((c2 == 'o' || c2 == 'O') && (c5 == 'o' || c5 == 'O') && (c8 == 'o' || c8 == 'O')) {
        document.getElementById('c4').disabled = true;
        document.getElementById('c2').disabled = true;
        document.getElementById('c6').disabled = true;
        document.getElementById('c1').disabled = true;
        document.getElementById('c7').disabled = true;
        document.getElementById('c8').disabled = true;
        window.alert('user o won ');
    }else if ((c1 == 'X' || c1 == 'O') && (c2 == 'X'
            || c2 == 'O') && (c3 == 'X' || c3 == 'O') &&
            (c4 == 'X' || c4 == 'O') && (c5 == 'X' ||
            c5 == 'O') && (c6 == 'X' || c6 == 'O') &&
            (c7 == 'X' || c7 == 'O') && (c8 == 'X' ||
            c8 == 'O') && (c9 == 'X' || c9 == 'O')) {
                document.getElementById('output')
                    .innerHTML = "Match Tie";
                window.alert('Match Tie');
    }
    else {
     
        // Here, Printing Result
        if (flag == 1) {
            document.getElementById('output')
                .innerHTML = "Player o Turn";
        }
        else {
            document.getElementById('output')
                .innerHTML = "Player x Turn";
        }
    }
}
flag = 1;
function myfunc_3() {
    if (flag == 1) {
        c1="X"
        console.log(c1);
        document.getElementById("c1").value = "X";
        document.getElementById("c1").disabled = true;
        flag = 0;
    }
    else {
        c1="o"
        document.getElementById("c1").value = "O";
        document.getElementById("c1").disabled = true;
        flag = 1;
    }
}
 
function myfunc_4() {
    if (flag == 1) {
        c2="X"
        document.getElementById("c2").value = "X";
        document.getElementById("c2").disabled = true;
        flag = 0;
    }
    else {
        c2="o"
        document.getElementById("c2").value = "O";
        document.getElementById("c2").disabled = true;
        flag = 1;
    }
}
 
function myfunc_5() {
    if (flag == 1) {
        c3="X"
        document.getElementById("c3").value = "X";
        document.getElementById("c3").disabled = true;
        flag = 0;
    }
    else {
        c3="o"
        document.getElementById("c3").value = "O";
        document.getElementById("c3").disabled = true;
        flag = 1;
    }
}
 
function myfunc_6() {
    if (flag == 1) {
        c4="X"
        document.getElementById("c4").value = "X";
        document.getElementById("c4").disabled = true;
        flag = 0;
    }
    else {
        c4="o"
        document.getElementById("c4").value = "O";
        document.getElementById("c4").disabled = true;
        flag = 1;
    }
}
 
function myfunc_7() {
    if (flag == 1) {
        c5="X"
        document.getElementById("c5").value = "X";
        document.getElementById("c5").disabled = true;
        flag = 0;
    }
    else {
        c5="o"
        document.getElementById("c5").value = "O";
        document.getElementById("c5").disabled = true;
        flag = 1;
    }
}
 
function myfunc_8() {
    if (flag == 1) {
        c6="X"
        document.getElementById("c6").value = "X";
        document.getElementById("c6").disabled = true;
        flag = 0;
    }
    else {
        c6="o"
        document.getElementById("c6").value = "O";
        document.getElementById("c6").disabled = true;
        flag = 1;
    }
}
 
function myfunc_9() {
    if (flag == 1) {
        c7="x"
        document.getElementById("c7").value = "X";
        document.getElementById("c7").disabled = true;
        flag = 0;
    }
    else {
        c7="o"
        document.getElementById("c7").value = "O";
        document.getElementById("c7").disabled = true;
        flag = 1;
    }
}
 
function myfunc_10() {
    if (flag == 1) {
        c8="x"
        document.getElementById("c8").value = "X";
        document.getElementById("c8").disabled = true;
        flag = 0;
    }
    else {
        c8="o"
        document.getElementById("c8").value = "O";
        document.getElementById("c8").disabled = true;
        flag = 1;
    }
}
 
function myfunc_11() {
    if (flag == 1) {
        c9="X"
        document.getElementById("c9").value = "X";
        document.getElementById("c9").disabled = true;
        flag = 0;
    }
    else {
        c9="o"
        document.getElementById("c9").value = "O";
        document.getElementById("c9").disabled = true;
        flag = 1;
    }
}