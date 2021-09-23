# Página para dar clases en patalla dividida

En mis clases suelo usar dos o más pestañas del navegador, en una de ellas contenido (como diapositivas) y en la otra generalmente una conexión mediante web a la camara de mi celular (donde escribo y realizo ejercicios).

Para optimizar el trabajo he desarrollado esta aplicación web que me permite tener dos páginas web abiertas al mismo tiempo en pantalla dividida o una de esas páginas en pantalla completa, con solo el click en un botón.

## Implementación de la aplicación

Esta aplicación puede usarse directamente desde (aquí)[https://https://clase-cesarariet.netlify.app/]

# Funcionamiento de la aplicación

La aplicación cuenta con tres botones principales y almacena el estado en localStorage

## Botón inferior izquierdo

Este botón se encarga de la vista de las páginas. Al hacer click en ese botón se pasa entre los estados de pantalla dividida (muestra contenido de los contenedores izquierdo y derecho) y pantalla completa (solo muestra el contenido del contenedor izquierdo).

## Botón superior derecho de cada contenedor

Este botón permite mostrar el menú de contenido del contenedor. Allí aparece un formulario donde se puede agregar nuevas páginas y debajo la lista de páginas agregadas al contenedor. Haciendo click en algún elemento de la lista hace que el contenedor cargue el contenido de la página indicada.

La aplicación tiene persistencia de datos en localStorage. El contenido agregado quedará guardado aún al abandonar la aplicación.
