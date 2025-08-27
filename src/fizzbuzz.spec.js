 import {convertirFizzBuzz,generarCadena} from "./FizzBuzz.js";

describe("FizzBuzz", () => {
  it("deberia convertir un numero que no es multiplo de 3 ni 5 ", () => {
    expect(convertirFizzBuzz(1)).toEqual("1");
  });

  it("deberia convertir un numero cualquiera que no sea multiplo de 3 ni 5 ", () => {
    expect(convertirFizzBuzz(4)).toEqual("4");
  });

  it("deberia convertir un numero 3 a Fizz  ", () => {
    expect(convertirFizzBuzz(3)).toEqual("Fizz");
  });

  it("deberia convertir un numero multiplo de 3 a Fizz  ", () => {
    expect(convertirFizzBuzz(6)).toEqual("Fizz");
  });

  it("deberia convertir un numero 5 a Buzz  ", () => {
    expect(convertirFizzBuzz(5)).toEqual("Buzz");
  });

  it("deberia convertir un numero multiplo de 5 a Buzz  ", () => {
    expect(convertirFizzBuzz(10)).toEqual("Buzz");
  });

  it("deberia convertir un numero 15 a FizzBuzz  ", () => {
    expect(convertirFizzBuzz(15)).toEqual("FizzBuzz");
  });

  it("deberia convertir cualquier numero multiplo de 3 y 5 a FizzBuzz  ", () => {
    expect(convertirFizzBuzz(30)).toEqual("FizzBuzz");
  });

  it("deberia imprimir una cadena de 1 a num con FizzBuzz", () => {
    expect(generarCadena(5)).toEqual("1,2,Fizz,4,Buzz");
  });
});

