import { commonPasswords } from "./common-passwords";
import { ValidacionClave, caracteresEspeciales } from "./model";
import { validarClave } from "./validar-clave";

describe("validarClave", () => {
  it("Si recibe undefined en algún parámetro debe devolver throw error", () => {
    //Arrange
    const nombreUsuario: any = undefined;
    const clave: any = undefined;
    const palabrasComunes: any = undefined;
    const caracteresEspeciales: any = undefined;
    //Act
    const resultado = () =>
      validarClave(nombreUsuario, clave, palabrasComunes, caracteresEspeciales);
    //Assert
    expect(resultado).toThrowError(
      "Los parámetros introducidos son incorrectos"
    );
  });
  it("Si recibe null en algún parámetro debe devolver throw error", () => {
    //Arrange
    const nombreUsuario: any = null;
    const clave: any = null;
    const palabrasComunes: any = null;
    const caracteresEspeciales: any = undefined;
    //Act
    const resultado = () =>
      validarClave(nombreUsuario, clave, palabrasComunes, caracteresEspeciales);
    //Assert
    expect(resultado).toThrowError(
      "Los parámetros introducidos son incorrectos"
    );
  });

  it.each([
    ["juanDiaz", "Ju@n9012D", { esValida: true }],
    ["pedroElCapo10", "2792yoSoyPedro!", { esValida: true }],
    ["adrianalec", "Maki$Kali93#", { esValida: true }],
    ["chrisCarmona", "VOHomeCar@abanc#el93", { esValida: true }],
    ["yazKoala", "bebeKoala%(1510)", { esValida: true }],
    [
      "gonzaBueno12",
      "holasoygonzalo",
      {
        esValida: false,
        error: "La clave debe de tener mayúsculas y minúsculas",
      },
    ],
    [
      "gonzaBueno12",
      "SoyGonzaloHOLA",
      {
        esValida: false,
        error: "La clave debe de tener números",
      },
    ],
    [
      "gonzaBueno12",
      "SoyGonzalo12HOLA",
      {
        esValida: false,
        error: "La clave debe de tener caracteres especiales",
      },
    ],
    [
      "gonzaBueno12",
      "10Gonz@",
      {
        esValida: false,
        error: "La clave debe de tener una longitud mínima de 8 caracteres",
      },
    ],
    [
      "gonzaBueno12",
      "SoyGonzaBuenO12HOLA!!!",
      {
        esValida: false,
        error: "La clave no debe tener el nombre del usuario",
      },
    ],
    [
      "gonzaBueno12",
      "SoyGonza1234567!!",
      {
        esValida: false,
        error: "La clave no debe de contener palabras comunes",
      },
    ],
    [
      "gonzaBueno12",
      "SoyGonz@12access!!",
      {
        esValida: false,
        error: "La clave no debe de contener palabras comunes",
      },
    ],
  ])(
    "El usuario %s y la clave %s deben retornar %s",
    (nombreUsuario, clave, resultadoEsperado: ValidacionClave) => {
      //Act
      const resultado = validarClave(
        nombreUsuario,
        clave,
        commonPasswords,
        caracteresEspeciales
      );
      //Assert
      expect(resultado).toEqual(resultadoEsperado);
    }
  );
});
