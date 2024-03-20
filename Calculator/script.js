function add(){
    var a = 0 , b = 0;

    a = form.input.value;
    b = a.charAt(a.length - 1);
    
    if(b == '+' || b == '-' || b == '*' || b == '/'){
        form.input.value = a.substring(0 , a.length-1);
        
        form.input.value += '+';
    }else{
        form.input.value += '+';
    }
}
function sub(){
    var a = 0 , b = 0;

    a = form.input.value;
    b = a.charAt(a.length - 1);

    if(b == '+' || b == '-' || b == '*' || b == '/'){
        form.input.value = a.substring(0 , a.length-1);
        
        form.input.value += '-';
    }else{
        form.input.value += '-';
    }
}
function mul(){
    var a = 0 , b = 0 , c = 0;

    a = form.input.value;
    b = a.charAt(a.length - 1);  

    if(b == '+' || b == '-' || b == '*' || b == '/'){
        form.input.value = a.substring(0 , a.length-1);
        
        form.input.value += '*';
    }else{
        form.input.value += '*';
    }
}
function div(){
    var a = 0 , b = 0;

    a = form.input.value;
    b = a.charAt(a.length - 1);

    if(b == '+' || b == '-' || b == '*' || b == '/'){
        form.input.value = a.substring(0 , a.length-1);
        
        form.input.value += '/';
    }else{
        form.input.value += '/';
    }
}
