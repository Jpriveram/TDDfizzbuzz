
function convertirFizzBuzz(num){
    
    if(num % 3 === 0 && num % 5 === 0){
        return "FizzBuzz";
    }
    if(num % 3 === 0){
        return "Fizz";
    }
    if(num % 5  === 0 ){
        return "Buzz";
    }
        return num.toString();
  }

function generarCadena(num){
    let cadena = "";
    for(let i = 1; i <= num; i++){
        cadena += i;
        if(i !== num)
        cadena += ","
    }
    return cadena;
}
export {convertirFizzBuzz,generarCadena};  