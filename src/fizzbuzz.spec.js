 import convertirFizzBuzz from "./FizzBuzz.js";

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
});

