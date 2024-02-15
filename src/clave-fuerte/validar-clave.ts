import { ValidacionClave } from "./model";
import {
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneMayusculasYMinusculas,
  tieneNombreUsuario,
  tieneNumeros,
  tienePalabrasComunes,
} from "./validar-clave.helpers";

export const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[],
  caracteresEspeciales: string[]
): ValidacionClave => {
  if (!nombreUsuario || !clave || !commonPasswords || !caracteresEspeciales) {
    throw new Error("Los parámetros introducidos son incorrectos");
  }

  const contieneMayusculasYMinusculas = tieneMayusculasYMinusculas(clave);
  const contieneNumeros = tieneNumeros(clave);
  const contieneCaracteresEspeciales = tieneCaracteresEspeciales(
    clave,
    caracteresEspeciales
  );
  const contieneLongitudMinima = tieneLongitudMinima(clave);
  const contieneNombreUsuario = tieneNombreUsuario(nombreUsuario, clave);
  const contienePalabrasComunes = tienePalabrasComunes(clave, commonPasswords);

  const arrayRequisitos = [
    contieneMayusculasYMinusculas,
    contieneNumeros,
    contieneCaracteresEspeciales,
    contieneLongitudMinima,
    contieneNombreUsuario,
    contienePalabrasComunes,
  ];

  const esValida = arrayRequisitos.every((requisito) => requisito.esValida);
  const indexError = arrayRequisitos.findIndex(
    (requisito) => !requisito.esValida
  );
  const error = esValida ? undefined : arrayRequisitos[indexError].error;

  return {
    esValida,
    error,
  };
};
