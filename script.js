let num1 = document.getElementById("n1");
let num2 = document.getElementById("n2");
let num3 = document.getElementById("n3");
let num4 = document.getElementById("n4");
let num5 = document.getElementById("n5");
let num6 = document.getElementById("n6");
let num7 = document.getElementById("n7");
let num8 = document.getElementById("n8");
let num9 = document.getElementById("n9");
let num10 = document.getElementById("n10");
let num11 = document.getElementById("n11");
let num12 = document.getElementById("n12");
let num13 = document.getElementById("n13");
let num14 = document.getElementById("n14");
let num15 = document.getElementById("n15");
let num16 = document.getElementById("n16");
let num17 = document.getElementById("n17");
let num18 = document.getElementById("n18");
let num19 = document.getElementById("n19");
let num20 = document.getElementById("n20");
let pantalla = document.querySelector(".pantallaInput");
let escritura = "";

//(
num1.addEventListener("click", ()=>{
    let texto = num1.innerText;
    escritura += texto;
    pantalla.setAttribute("value",escritura);
});

//)
num2.addEventListener("click", ()=>{
    let texto = num2.innerText;
    escritura += texto;
    pantalla.setAttribute("value",escritura);
});

//C
num3.addEventListener("click", ()=>{    
    //Elilmina el ultimo caracter de la cadena de caracteres
    escritura = escritura.substring(0, escritura.length - 1);
    pantalla.setAttribute("value",escritura);
});

//AC
num4.addEventListener("click", ()=>{    
    //Elilmina el ultimo caracter de la cadena de caracteres
    escritura = "";
    pantalla.setAttribute("value",escritura);
});

// /
num5.addEventListener("click", ()=>{    
    let texto = num5.innerText;
    escritura += texto;
    pantalla.setAttribute("value",escritura);
});

// 1
num6.addEventListener("click", ()=>{    
    let texto = num6.innerText;
    escritura += texto;
    pantalla.setAttribute("value",escritura);
});

// 2
num7.addEventListener("click", ()=>{    
    let texto = num7.innerText;
    escritura += texto;
    pantalla.setAttribute("value",escritura);
});

// 3
num8.addEventListener("click", ()=>{    
    let texto = num8.innerText;
    escritura += texto;
    pantalla.setAttribute("value",escritura);
});

// *
num9.addEventListener("click", ()=>{    
    let texto = num9.innerText;
    escritura += texto;
    pantalla.setAttribute("value",escritura);
});

// 4
num10.addEventListener("click", ()=>{    
    let texto = num10.innerText;
    escritura += texto;
    pantalla.setAttribute("value",escritura);
});

// 5
num11.addEventListener("click", ()=>{    
    let texto = num11.innerText;
    escritura += texto;
    pantalla.setAttribute("value",escritura);
});

// 6
num12.addEventListener("click", ()=>{    
    let texto = num12.innerText;
    escritura += texto;
    pantalla.setAttribute("value",escritura);
});

// +
num13.addEventListener("click", ()=>{    
    let texto = num13.innerText;
    escritura += texto;
    pantalla.setAttribute("value",escritura);
});

// 7
num14.addEventListener("click", ()=>{    
    let texto = num14.innerText;
    escritura += texto;
    pantalla.setAttribute("value",escritura);
});

// 8
num15.addEventListener("click", ()=>{    
    let texto = num15.innerText;
    escritura += texto;
    pantalla.setAttribute("value",escritura);
});

// 9
num16.addEventListener("click", ()=>{    
    let texto = num16.innerText;
    escritura += texto;
    pantalla.setAttribute("value",escritura);
});

// -
num17.addEventListener("click", ()=>{    
    let texto = num17.innerText;
    escritura += texto;
    pantalla.setAttribute("value",escritura);
});

// .
num18.addEventListener("click", ()=>{    
    let texto = num18.innerText;
    escritura += texto;
    pantalla.setAttribute("value",escritura);
});

// 0
num19.addEventListener("click", ()=>{    
    let texto = num19.innerText;
    escritura += texto;
    pantalla.setAttribute("value",escritura);
});

// =
num20.addEventListener("click", ()=>{    
    //Funcion para recorrer cada elemento de la cadena de texto y devolverla como operacion directamente        
    function evaluaArimetica(fn) {
        return new Function('return ' + fn)();
       }
    let resul = pantalla.getAttribute("value");
    let resultado = evaluaArimetica(resul);
    let num = resultado.toString();
    escritura = num;
    pantalla.setAttribute("value",resultado);
});