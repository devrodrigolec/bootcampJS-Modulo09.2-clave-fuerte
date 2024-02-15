import { ValidacionClave } from "./model";


export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  if (!clave) {
    throw new Error("Los parámetros introducidos son incorrectos");
  }

  const arrayDeClave: string[] = clave.split("");

  let tieneMayuscula = arrayDeClave.some(
    (letra) => letra === letra.toLowerCase()
  );
  let tieneMinuscula = arrayDeClave.some(
    (letra) => letra === letra.toUpperCase()
  );

  const esValida = tieneMayuscula && tieneMinuscula;

  return {
    esValida,
    error: esValida
      ? undefined
      : "La clave debe de tener mayúsculas y minúsculas",
  };
};

export const tieneNumeros = (clave: string): ValidacionClave => {
  if (!clave) {
    throw new Error("Los parámetros introducidos son incorrectos");
  }

  const arrayDeClave: string[] = clave.split("");
  const esValida = arrayDeClave.some((letra) => !isNaN(Number(letra)));

  return {
    esValida,
    error: esValida ? undefined : "La clave debe de tener números",
  };
};

export const tieneCaracteresEspeciales = (
  clave: string,
  caracteresEspeciales: string[]
): ValidacionClave => {
  if (!clave || !caracteresEspeciales) {
    throw new Error("Los parámetros introducidos son incorrectos");
  }

  let esValida = caracteresEspeciales.some((caracter) =>
    clave.includes(caracter)
  );

  return {
    esValida,
    error: esValida
      ? undefined
      : "La clave debe de tener caracteres especiales",
  };
};

export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  if (!clave) {
    throw new Error("Los parámetros introducidos son incorrectos");
  }

  const esValida = clave.length > 7;

  return {
    esValida,
    error: esValida
      ? undefined
      : "La clave debe de tener una longitud mínima de 8 caracteres",
  };
};

export const tieneNombreUsuario = (
  nombreUsuario: string,
  clave: string
): ValidacionClave => {
  if (!nombreUsuario || !clave) {
    throw new Error("Los parámetros introducidos son incorrectos");
  }

  const claveAMinusculas = clave.toLowerCase();
  const nombreUsuarioAMinuscula = nombreUsuario.toLowerCase();

  const esValida = claveAMinusculas.includes(nombreUsuarioAMinuscula);
  return {
    esValida,
    error: esValida
      ? undefined
      : "La clave no debe tener el nombre del usuario",
  };
};

export const tienePalabrasComunes = (
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  if (!clave || !commonPasswords) {
    throw new Error("Los parámetros introducidos son incorrectos");
  }

  let esValida = !commonPasswords.some((password) => clave.includes(password));

  return {
    esValida,
    error: esValida
      ? undefined
      : "La clave no debe de contener palabras comunes",
  };
};
