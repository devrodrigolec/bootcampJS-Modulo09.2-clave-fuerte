export interface ValidacionClave {
  esValida: boolean;
  error?: string;
}

export const caracteresEspeciales : string []= ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '{', '}', ';', ':', "'", '"', '\\', '|', ',', '.', '<', '>', '/', '?'];
