
/* Esto es una prueba, preguntar después a Antonio */
/* type ErrorMessage =
 | "La clave debe de tener mayúsculas y minúsculas"
 | "La clave debe de tener números"
 | "La clave debe de tener caracteres especiales"
 | "La clave debe de tener una longitud mínima de 8 caracteres"
 | "La clave no debe tener el nombre del usuario"
 | "La clave no debe de contener palabras comunes"; */

export interface ValidacionClave {
  esValida: boolean;
  error?: string;
}

export const caracteresEspeciales: string[] = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "-",
  "=",
  "[",
  "]",
  "{",
  "}",
  ";",
  ":",
  "'",
  '"',
  "\\",
  "|",
  ",",
  ".",
  "<",
  ">",
  "/",
  "?",
];

