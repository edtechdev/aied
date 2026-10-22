/**
 * Texto de la página 404 (`/aied/es/404.html`). Por lo demás, la página es la de
 * búsqueda, así que lo único que añade son el encabezado y las dos salidas.
 */
export interface NotFoundStrings {
  /** <title> de la página. */
  title: string;
  /** Encabezado de la página. */
  h1: string;
  /** Primer párrafo. Puede contener HTML y enlaces en línea. */
  messageHtml: string;
  /** Segundo párrafo, que apunta al formulario de búsqueda de abajo. */
  searchHtml: string;
}

const es: NotFoundStrings = {
  title: 'Página no encontrada',
  h1: 'Página no encontrada',
  messageHtml:
    'No hemos podido encontrar la página que buscabas. Puede que el enlace que te ha traído aquí esté desactualizado o que la página haya cambiado de nombre. Puedes empezar de nuevo desde la <a href="/aied/">página de inicio</a>.',
  searchHtml:
    'También puedes buscar en toda la base de conocimiento aquí abajo. Todos los artículos, conceptos, preguntas frecuentes y recursos están indexados, y los filtros permiten acotar la búsqueda por disciplina, nivel, público o método de investigación.',
};

export default es;
