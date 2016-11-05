var num;
function fibonacci(num){
    var temp;
    var p1 = 0;
    var p2 = 1;
    var num = prompt("Enter Number of terms",num);
    
    for (var i = 0; i < num; i++){
        if (i <= 1){
            temp = i; 
        }
        else {
            temp = p1 + p2;
            p1 = p2;
            p2 = temp;
        }
         document.write(temp + "</br>");
    }
       
    }

fibonacci(num);