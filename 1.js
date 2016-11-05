var num =Number(prompt("Enter Your Fav #","Here!"));
function theResult(num) {
for (var i = 1; i <= 20; i++) {
document.write("<h2>" +num+ "*" +i+ "=" +(num*i)+ "</h2>" );
}
}
theResult(num);