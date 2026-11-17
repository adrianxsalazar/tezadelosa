# Web de Teza de Losa

Web de una sola página para presentar Teza de Losa y el Valle de Losa: el pueblo, el valle, los eventos, qué ver cerca, vivir aquí y cómo llegar.

Es una web estática: HTML, CSS y JavaScript sin instalación ni compilación. Funciona tal cual en GitHub Pages y en cualquier servidor.

## Qué hay en la carpeta

| Archivo | Para qué sirve |
| --- | --- |
| `index.html` | La página. Solo se toca para cambiar el título o la descripción de buscadores. |
| `js/contenido.js` | **Toda la información de la web**: textos, fechas, lugares, fotos y contacto. Es el archivo que se edita. |
| `js/app.js` | Monta la página a partir de `contenido.js`. No hace falta tocarlo. |
| `css/estilos.css` | Colores, tipografías y maquetación. Los colores están al principio, en `:root`. |
| `img/` | Escudo del Valle de Losa, fotos, imagen para compartir e ilustraciones provisionales. |
| `fonts/` | Tipografías (incluidas en la web, sin llamadas a servidores externos). |

## Antes de publicar

En `js/contenido.js` hay líneas marcadas con `// REVISAR`. Son datos que conviene que confirme alguien del pueblo:

1. **Correo de contacto.** Ahora pone `tucorreo@ejemplo.com`.
2. **Fechas de Halloween y San Juan.** Tienen fechas genéricas («Finales de octubre», «En torno al 23 de junio»).
3. **Detalles de los eventos.** Son textos de partida. Cámbialos por lo que se hace de verdad cada año.
4. **Tiempos y distancias en coche.** Son aproximados, sobre todo el de Burgos.
5. **Servicios en Quincoces de Yuso.** Confirma qué hay (colegio, tiendas, consultorio…).
6. **Redes sociales.** Están vacías. Al pegar un enlace aparecen solas en la sección de contacto.

## Cambiar textos

Abre `js/contenido.js` con cualquier editor (también desde GitHub, con el icono del lápiz), cambia el texto entre comillas y guarda.

Si al guardar la web aparece en blanco con el aviso «No se ha podido cargar el contenido», falta una coma o unas comillas en lo último que has editado.

### Añadir un evento o un lugar

Copia un bloque completo `{ ... },` de la lista correspondiente (`eventos.lista` o `cerca.lugares`), pégalo debajo y cambia los datos. El primer evento de la lista sale en grande.

### Publicar una casa en el tablón

En `vivir.tablon.anuncios` hay un ejemplo comentado. Cópialo dentro de la lista, quita las barras `//` y cambia los datos.

## Poner fotos

Las imágenes actuales son ilustraciones provisionales. En la web llevan la etiqueta «Hueco para foto», que desaparece sola al poner una foto real.

1. Sube la foto a la carpeta `img/` (por ejemplo `img/portada.jpg`).
2. En `js/contenido.js`, cambia la ruta de `imagen` del bloque que quieras.

| Hueco | Ruta actual | Foto recomendada |
| --- | --- | --- |
| Portada | `img/iglesia-atardecer.jpg` | Ya tiene foto real (la iglesia al atardecer). |
| El pueblo | `img/casa-tipica.jpg` | Ya tiene foto real (casa típica de piedra). |
| Desplegable de la iglesia | `img/ventana-san-nicolas.jpg` | Ya tiene foto real (ventana románica). |
| El valle | `img/mirador-angulo.jpg` | Ya tiene foto (vista desde el monte de Teza). |
| Cascada de San Miguel | `img/cascada-san-miguel.jpg` | Ya tiene foto. |
| Fiestas de Teza | `img/fiestas-de-teza.jpg` | Ya tiene foto real. |
| Coches clásicos | `img/coches-clasicos-2026.jpg` | Ya tiene foto real. |
| Halloween y alubiada | `img/ilustraciones/halloween.svg` | Horizontal, 1200 px de ancho. |
| San Juan | `img/ilustraciones/san-juan.svg` | Horizontal, 1200 px de ancho. |
| Lugares cercanos | `img/ilustraciones/…` | Horizontal 3:2, 1200 px de ancho. |

Si al recortarse la foto no se ve la parte buena, añade `imagenFoco: "40% 50%"` en ese bloque (posición horizontal y vertical, como en el de los coches clásicos).

Consejos: usa JPG o WebP, por debajo de 400 KB cada foto. Usa fotos propias o con permiso de su autor. En la portada el texto va sobre la parte izquierda e inferior, así que queda mejor una foto con el pueblo hacia la derecha.

## El escudo del Valle de Losa

El escudo está en `img/escudo-valle-de-losa.png` y sale en la cabecera, en el pie y junto al texto de «El valle». El icono de la pestaña del navegador es `img/favicon.png`.

Para cambiarlo, sustituye ese archivo por otro con el mismo nombre o cambia la ruta en `sitio.logo`, dentro de `js/contenido.js`. Para quitarlo solo de la sección del valle, pon `escudo: false` en el bloque `valle`.

## Publicar en GitHub Pages (gratis)

1. Entra en tu repositorio de GitHub (o crea uno nuevo, público).
2. Sube **el contenido** de esta carpeta a la raíz del repositorio: `Add file → Upload files`, arrastra todo y pulsa `Commit changes`. `index.html` tiene que quedar en la raíz, no dentro de otra carpeta.
3. Ve a `Settings → Pages`.
4. En `Build and deployment`, elige `Source: Deploy from a branch`, rama `main` y carpeta `/ (root)`. Pulsa `Save`.
5. En uno o dos minutos la web estará en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPOSITORIO/`.

Con Git desde el ordenador:

```bash
git clone https://github.com/TU-USUARIO/NOMBRE-DEL-REPOSITORIO.git
cd NOMBRE-DEL-REPOSITORIO
# copia aquí el contenido de esta carpeta
git add .
git commit -m "Web de Teza de Losa"
git push
```

Cada cambio que subas se publica solo en un par de minutos.

## Pasarla a un servidor propio

Copia la carpeta completa al directorio público del servidor (por FTP o desde el panel del alojamiento). No necesita base de datos ni PHP. Todas las rutas son relativas, así que funciona igual en la raíz de un dominio o en una subcarpeta.

Cuando tenga dirección definitiva, cambia en `index.html` la línea `og:image` por la dirección completa, por ejemplo `https://www.tudominio.es/img/compartir.jpg`. Así se ve la imagen al compartir el enlace por WhatsApp o redes.

## Créditos

- Tipografías: Bricolage Grotesque y Newsreader, con licencia SIL Open Font License (ver `fonts/`).
- Web hecha por Adrian Salazar y los amigos de Teza.
- Fotos de la iglesia, la casa típica, la ventana, las fiestas y la concentración de coches clásicos: aportadas por los vecinos.
- Fotos del mirador de Angulo y de la cascada de San Miguel: añade su autor en el campo `credito` de `js/contenido.js` y aparecerá sobre la foto.
- Escudo del Valle de Losa.
- Ilustraciones provisionales: creadas para esta web.
- Fuentes de los datos históricos: enlazadas en el pie de la página («Fuentes de los datos»).
# tezadelosa
# tezadelosa
# tezadelosa
