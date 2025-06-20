// alert("nothing");
function getText() {
let temp = document.getElementById("inputId").value;
console.log(temp);

let count=0;
for (let i of temp) {
    if ('aeiouAEIOU'.includes(i)) {
        count++;
    }
}

document.getElementById("myPara").innerHTML = 'Welcome <span style="font-weight:bold; color:blue;">' + temp + '</span>, there are ' +count+" vowels in your name.";
}