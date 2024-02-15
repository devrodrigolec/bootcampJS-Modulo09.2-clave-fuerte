import { commonPasswords } from "./common-passwords";
import { caracteresEspeciales } from "./model";
import {
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneMayusculasYMinusculas,
  tieneNombreUsuario,
  tieneNumeros,
  tienePalabrasComunes,
} from "./validar-clave.helpers";

describe("tieneMayusculasYMinusculas", () => {
  it("Si recibe clave = undefined, debe retornar throw Error", () => {
    //Arrange
    const clave: any = undefined;
    //Act
    const resultado = () => tieneMayusculasYMinusculas(clave);
    //Assert
    expect(resultado).toThrowError(
      "Los parámetros introducidos son incorrectos"
    );
  });
  it("Si recibe clave = null, debe retornar throw Error", () => {
    //Arrange
    const clave: any = null;
    //Act
    const resultado = () => tieneMayusculasYMinusculas(clave);
    //Assert
    expect(resultado).toThrowError(
      "Los parámetros introducidos son incorrectos"
    );
  });
  it("Si recibe clave = '', debe retornar throw Error", () => {
    //Arrange
    const clave: any = "";
    //Act
    const resultado = () => tieneMayusculasYMinusculas(clave);
    //Assert
    expect(resultado).toThrowError(
      "Los parámetros introducidos son incorrectos"
    );
  });

  it.each([
    ["Luna", { esValida: true, error: undefined }],
    [
      "PASSWORD",
      {
        esValida: false,
        error: "La clave debe de tener mayúsculas y minúsculas",
      },
    ],
    [
      "chocolate",
      {
        esValida: false,
        error: "La clave debe de tener mayúsculas y minúsculas",
      },
    ],
    [
      "SOL",
      {
        esValida: false,
        error: "La clave debe de tener mayúsculas y minúsculas",
      },
    ],
    [
      "seguridad",
      {
        esValida: false,
        error: "La clave debe de tener mayúsculas y minúsculas",
      },
    ],
    ["Estrella", { esValida: true, error: undefined }],
    ["BanAnA", { esValida: true, error: undefined }],
    ["serpientE", { esValida: true, error: undefined }],
    ["cOnTRASEÑa", { esValida: true, error: undefined }],
    [
      "ELEFANTE",
      {
        esValida: false,
        error: "La clave debe de tener mayúsculas y minúsculas",
      },
    ],
  ])(
    "La clave %s debe retornar %s",
    (clave, resultadoEsperado) => {
      //Act
      const resultado = tieneMayusculasYMinusculas(clave);
      //Assert
      expect(resultado).toEqual(resultadoEsperado);
    }
  );
});

describe("tieneNumeros", () => {
  it("Si recibe clave = undefined, debe retornar throw Error", () => {
    //Arrange
    const clave: any = undefined;
    //Act
    const resultado = () => tieneNumeros(clave);
    //Assert
    expect(resultado).toThrowError(
      "Los parámetros introducidos son incorrectos"
    );
  });
  it("Si recibe clave = null, debe retornar throw Error", () => {
    //Arrange
    const clave: any = null;
    //Act
    const resultado = () => tieneNumeros(clave);
    //Assert
    expect(resultado).toThrowError(
      "Los parámetros introducidos son incorrectos"
    );
  });
  it("Si recibe clave = '', debe retornar throw Error", () => {
    //Arrange
    const clave: any = "";
    //Act
    const resultado = () => tieneNumeros(clave);
    //Assert
    expect(resultado).toThrowError(
      "Los parámetros introducidos son incorrectos"
    );
  });

  it.each([
    [
      "Luna",
      {
        esValida: false,
        error: "La clave debe de tener números",
      },
    ],
    [
      "PASSWORD123",
      {
        esValida: true,
        error: undefined,
      },
    ],
    [
      "Chocolate",
      {
        esValida: false,
        error: "La clave debe de tener números",
      },
    ],
    [
      "Sol",
      {
        esValida: false,
        error: "La clave debe de tener números",
      },
    ],
    [
      "Seguridad123",
      {
        esValida: true,
        error: undefined,
      },
    ],
    [
      "Estrella",
      {
        esValida: false,
        error: "La clave debe de tener números",
      },
    ],
    [
      "BanAnA",
      {
        esValida: false,
        error: "La clave debe de tener números",
      },
    ],
    [
      "Serpiente123",
      {
        esValida: true,
        error: undefined,
      },
    ],
    [
      "cOnTRASEÑa",
      {
        esValida: false,
        error: "La clave debe de tener números",
      },
    ],
    [
      "Elefante",
      {
        esValida: false,
        error: "La clave debe de tener números",
      },
    ],
  ])("La clave %s debe devolver %s", (clave, resultadoEsperado) => {
    //Act
    const resultado = tieneNumeros(clave);
    //Assert
    expect(resultado).toEqual(resultadoEsperado);
  });
});

describe("tieneCaracteresEspeciales", () => {
  it("Si recibe clave = undefined, debe retornar throw Error", () => {
    //Arrange
    const clave: any = undefined;
    const caracteresEspeciales: any = undefined;
    //Act
    const resultado = () =>
      tieneCaracteresEspeciales(clave, caracteresEspeciales);
    //Assert
    expect(resultado).toThrowError(
      "Los parámetros introducidos son incorrectos"
    );
  });
  it("Si recibe clave = null, debe retornar throw Error", () => {
    //Arrange
    const clave: any = null;
    const caracteresEspeciales: any = null;
    //Act
    const resultado = () =>
      tieneCaracteresEspeciales(clave, caracteresEspeciales);
    //Assert
    expect(resultado).toThrowError(
      "Los parámetros introducidos son incorrectos"
    );
  });
  it("Si recibe clave = '', debe retornar throw Error", () => {
    //Arrange
    const clave: any = "";
    const caracteresEspeciales: any = [];
    //Act
    const resultado = () =>
      tieneCaracteresEspeciales(clave, caracteresEspeciales);
    //Assert
    expect(resultado).toThrowError(
      "Los parámetros introducidos son incorrectos"
    );
  });

  it.each([
    [
      "Luna",
      {
        esValida: false,
        error: "La clave debe de tener caracteres especiales",
      },
    ],
    [
      "PASSWORD123",
      {
        esValida: false,
        error: "La clave debe de tener caracteres especiales",
      },
    ],
    [
      "Chocolate$",
      {
        esValida: true,
        error: undefined,
      },
    ],
    [
      "Sol123",
      {
        esValida: false,
        error: "La clave debe de tener caracteres especiales",
      },
    ],
    [
      "Seguridad!",
      {
        esValida: true,
        error: undefined,
      },
    ],
    [
      "Estrella",
      {
        esValida: false,
        error: "La clave debe de tener caracteres especiales",
      },
    ],
    [
      "Ban@nA456",
      {
        esValida: true,
        error: undefined,
      },
    ],
    [
      "Serpiente",
      {
        esValida: false,
        error: "La clave debe de tener caracteres especiales",
      },
    ],
    [
      "cOnTRASEÑa",
      {
        esValida: false,
        error: "La clave debe de tener caracteres especiales",
      },
    ],
    [
      "Elefante789*",
      {
        esValida: true,
        error: undefined,
      },
    ],
  ])("La clave %s debe devolver %s", (clave, resultadoEsperado) => {
    //Act
    const resultado = tieneCaracteresEspeciales(clave, caracteresEspeciales);

    //Assert
    expect(resultado).toEqual(resultadoEsperado);
  });
});

describe("tieneLongitudMinima", () => {
  it("Si recibe clave = undefined, debe retornar throw Error", () => {
    //Arrange
    const clave: any = undefined;
    //Act
    const resultado = () => tieneLongitudMinima(clave);
    //Assert
    expect(resultado).toThrowError(
      "Los parámetros introducidos son incorrectos"
    );
  });
  it("Si recibe clave = null, debe retornar throw Error", () => {
    //Arrange
    const clave: any = null;
    //Act
    const resultado = () => tieneLongitudMinima(clave);
    //Assert
    expect(resultado).toThrowError(
      "Los parámetros introducidos son incorrectos"
    );
  });
  it("Si recibe clave = '', debe retornar throw Error", () => {
    //Arrange
    const clave: any = "";
    //Act
    const resultado = () => tieneLongitudMinima(clave);
    //Assert
    expect(resultado).toThrowError(
      "Los parámetros introducidos son incorrectos"
    );
  });

  it.each([
    [
      "Luna",
      {
        esValida: false,
        error: "La clave debe de tener una longitud mínima de 8 caracteres",
      },
    ],
    [
      "PASSWORD123",
      {
        esValida: true,
        error: undefined,
      },
    ],
    [
      "Chocolate$",
      {
        esValida: true,
        error: undefined,
      },
    ],
    [
      "Sol123",
      {
        esValida: false,
        error: "La clave debe de tener una longitud mínima de 8 caracteres",
      },
    ],
    [
      "Seguridad!",
      {
        esValida: true,
        error: undefined,
      },
    ],
    [
      "Estrella",
      {
        esValida: true,
        error: undefined,
      },
    ],
    [
      "Ban@nA456",
      {
        esValida: true,
        error: undefined,
      },
    ],
    [
      "Serp",
      {
        esValida: false,
        error: "La clave debe de tener una longitud mínima de 8 caracteres",
      },
    ],
    [
      "cOnTRASEÑa",
      {
        esValida: true,
        error: undefined,
      },
    ],
    [
      "Elefante789*",
      {
        esValida: true,
        error: undefined,
      },
    ],
  ])("La clave %s debe devolver %s", (clave, resultadoEsperado) => {
    //Act
    const resultado = tieneLongitudMinima(clave);
    //Assert
    expect(resultado).toEqual(resultadoEsperado);
  });
});

describe("tieneNombreUsuario", () => {
  it("Si recibe clave = undefined, debe retornar throw Error", () => {
    //Arrange
    const clave: any = undefined;
    const nombreUsuario: any = undefined;
    //Act
    const resultado = () => tieneNombreUsuario(nombreUsuario, clave);
    //Assert
    expect(resultado).toThrowError(
      "Los parámetros introducidos son incorrectos"
    );
  });
  it("Si recibe clave = null, debe retornar throw Error", () => {
    //Arrange
    const nombreUsuario: any = null;
    const clave: any = null;
    //Act
    const resultado = () => tieneNombreUsuario(nombreUsuario, clave);
    //Assert
    expect(resultado).toThrowError(
      "Los parámetros introducidos son incorrectos"
    );
  });
  it("Si recibe clave = '', debe retornar throw Error", () => {
    //Arrange
    const nombreUsuario: any = "";
    const clave: any = "";
    //Act
    const resultado = () => tieneNombreUsuario(nombreUsuario, clave);
    //Assert
    expect(resultado).toThrowError(
      "Los parámetros introducidos son incorrectos"
    );
  });

  it.each([
    [
      "usuario1",
      "usuario12345",
      {
        esValida: false,
        error: "La clave no debe tener el nombre del usuario",
      },
    ],
    [
      "usuario2",
      "clave2",
      {
        esValida: true,
        
      },
    ],
    [
      "usuario3",
      "clave3usuario3",
      {
        esValida: false,
        error: "La clave no debe tener el nombre del usuario",
      },
    ],
    [
      "usuario4",
      "clave4",
      {
        esValida: true,
        
      },
    ],
    [
      "usuario5",
      "usuario5clave",
      {
        esValida: false,
        error: "La clave no debe tener el nombre del usuario",
      },
    ],
    [
      "usuario6",
      "password6",
      {
        esValida: true,
        
      },
    ],
    [
      "usuario7",
      "ABusuario7YZ",
      {
        esValida: false,
        error: "La clave no debe tener el nombre del usuario",
      },
    ],
    [
      "usuario8",
      "clave8",
      {
        esValida: true,
       
      },
    ],
    [
      "usuario9",
      "password9",
      {
        esValida: true,

      },
    ],
    [
      "usuario10",
      "usuario10clave10",
      {
        esValida: false,
        error: "La clave no debe tener el nombre del usuario",
      },
    ],
    [
      "usuario11",
      "password11",
      {
        esValida: true,
        
      },
    ],
    [
      "usuario12",
      "clave12",
      {
        esValida: true,
        
      },
    ],
    [
      "usuario13",
      "clave13",
      {
        esValida: true,
        
      },
    ],
    [
      "usuario14",
      "usuario14",
      {
        esValida: false,
        error: "La clave no debe tener el nombre del usuario",
      },
    ],
    [
      "usuario15",
      "usuario15clave",
      {
        esValida: false,
        error: "La clave no debe tener el nombre del usuario",
      },
    ],
  ])(
    "El usuario %s y la clave %s deben devolver %s",
    (nombreUsuario, clave, resultadoEsperado) => {
      //Act
      const resultado = tieneNombreUsuario(nombreUsuario, clave);
      //Assert
      expect(resultado).toEqual(resultadoEsperado);
    }
  );
});

it.each([
  [
    "asqsunshine14",
    {
      esValida: false,
      error: "La clave no debe de contener palabras comunes",
    },
  ],
  [
    "abc123bn124",
    {
      esValida: false,
      error: "La clave no debe de contener palabras comunes",
    },
  ],
  [
    "hello123ac!@",
    {
      esValida: false,
      error: "La clave no debe de contener palabras comunes",
    },
  ],
  [
    "ac21234567Ghx!",
    {
      esValida: false,
      error: "La clave no debe de contener palabras comunes",
    },
  ],
  [
    "letmein152",
    {
      esValida: false,
      error: "La clave no debe de contener palabras comunes",
    },
  ],
  [
    "footballMessi10",
    {
      esValida: false,
      error: "La clave no debe de contener palabras comunes",
    },
  ],
  [
    "21qwertynumber10",
    {
      esValida: false,
      error: "La clave no debe de contener palabras comunes",
    },
  ],
  ["Pa$$w0rd!",{
    esValida: true,
    error: undefined,
  } ,],
  [
    "9&Jp2@q#",
    {
      esValida: true,
      error: undefined,
    },
  ],
  [
    "BlueSky$777",
    {
      esValida: true,
      error: undefined,
    },
  ],
  [
    "$un5h1n3%",
    {
      esValida: true,
      error: undefined,
    },
  ],
  [
    "P@ssC0d3!",
    {
      esValida: true,
      error: undefined,
    },
  ],
  [
    "8F!r3@w@ll",
    {
      esValida: true,
      error: undefined,
    },
  ],
  [
    "$3cUr3P@55",
    {
      esValida: true,
      error: undefined,
    },
  ],
  [
    "D@rkH0r$3$",
    {
      esValida: true,
      error: undefined,
    },
  ],
])("La clave %s debe retornar %s", (clave, resultadoEsperado) => {
  //Act
  const resultado = tienePalabrasComunes(clave, commonPasswords);
  //Assert
  expect(resultado).toEqual(resultadoEsperado);
});
