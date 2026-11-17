/* Web de Teza de Losa. Monta la página a partir de js/contenido.js.
   No hace falta tocar este archivo para cambiar textos o fotos. */
(function () {
  "use strict";

  var C = window.CONTENIDO;
  var main = document.getElementById("contenido");

  if (!C) {
    main.innerHTML =
      '<div class="error-contenido"><h1>No se ha podido cargar el contenido</h1>' +
      "<p>Revisa <code>js/contenido.js</code>: suele faltar una coma o unas comillas en la última línea que has editado.</p></div>";
    return;
  }

  /* ---------- utilidades ---------- */
  function el(tag, attrs, hijos) {
    var n = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        var v = attrs[k];
        if (v === null || v === undefined || v === false) return;
        if (k === "class") n.className = v;
        else if (k === "text") n.textContent = v;
        else if (k === "html") n.innerHTML = v;
        else n.setAttribute(k, v === true ? "" : v);
      });
    }
    (hijos || []).forEach(function (h) {
      if (h === null || h === undefined || h === false) return;
      n.appendChild(typeof h === "string" ? document.createTextNode(h) : h);
    });
    return n;
  }

  function parrafos(lista, clase) {
    return (lista || []).map(function (t) {
      return el("p", { class: clase, text: t });
    });
  }

  var ICONO_MAS =
    '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>';

  var ICONOS = {
    naturaleza: "M3 19l6-11 4 6 2-3 6 8z",
    patrimonio: "M3 20h18M5 20V11a7 7 0 0 1 14 0v9M9.5 20v-8a2.5 2.5 0 0 1 5 0v8",
    producto: "M7 3v18M4.5 3v5a2.5 2.5 0 0 0 5 0V3M17 21V3c-2.2 1.8-3 4.5-3 7.5 0 1.4 1.2 2.5 3 2.5",
    caballo: "M7 20v-9a5 5 0 0 1 10 0v9h-3v-9a2 2 0 0 0-4 0v9z",
    flecha: "M5 12h14M13 6l6 6-6 6",
    mapa: "M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.800-7 11-7 11zM12 12.500a2.500 2.500 0 1 0 0-5 2.500 2.500 0 0 0 0 5z",
  };

  function icono(nombre, t) {
    return (
      '<svg viewBox="0 0 24 24" width="' + (t || 24) + '" height="' + (t || 24) +
      '" aria-hidden="true"><path d="' + ICONOS[nombre] +
      '" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    );
  }

  /* Imagen con marco. Si todavía es una ilustración provisional,
     añade el aviso «Hueco para foto». */
  function foto(src, alt, clase, prioridad, foco, credito) {
    var marco = el("figure", { class: "foto " + (clase || "") }, [
      el("img", {
        src: src,
        alt: alt || "",
        loading: prioridad ? "eager" : "lazy",
        decoding: "async",
        style: foco ? "object-position: " + foco : null,
      }),
    ]);
    if (credito) marco.appendChild(el("span", { class: "foto__credito", text: credito }));
    if (/ilustraciones\//.test(src || "")) {
      marco.appendChild(el("span", { class: "foto__aviso", text: "Hueco para foto" }));
    }
    return marco;
  }

  function desplegable(titulo, contenido, clase) {
    return el("details", { class: "desplegable " + (clase || "") }, [
      el("summary", null, [
        el("span", { class: "desplegable__titulo", text: titulo }),
        el("span", { class: "desplegable__icono", html: ICONO_MAS }),
      ]),
      el("div", { class: "desplegable__cuerpo" }, contenido),
    ]);
  }

  function cabecera(sec, extra) {
    return el("header", { class: "cabecera-seccion" }, [
      el("div", null, [
        el("p", { class: "etiqueta", text: sec.etiqueta }),
        el("h2", { text: sec.titulo }),
      ]),
      sec.texto ? el("p", { class: "entradilla", text: sec.texto }) : null,
      extra || null,
    ]);
  }

  function seccion(id, clase, hijos) {
    return el("section", { id: id, class: "franja " + clase }, [el("div", { class: "contenedor" }, hijos)]);
  }

  function esEmailReal(e) {
    return e && e.indexOf("@") > 0;
  }

  /* ---------- cabecera y menú ---------- */
  var MENU = [
    ["#pueblo", C.pueblo.etiqueta],
    ["#valle", C.valle.etiqueta],
    ["#eventos", C.eventos.etiqueta],
    ["#cerca", C.cerca.etiqueta],
    ["#vivir", C.vivir.etiqueta],
    ["#llegar", C.llegar.etiqueta],
  ];

  function marca() {
    return el("a", { class: "marca", href: "#inicio", "aria-label": C.sitio.nombre + ", inicio" }, [
      el("img", { class: "marca__logo", src: C.sitio.logo, alt: C.sitio.logoAlt, width: "45", height: "52" }),
      el("span", { class: "marca__texto" }, [
        el("span", { class: "marca__nombre", text: C.sitio.nombre }),
        el("span", { class: "marca__sub", text: C.sitio.subtitulo }),
      ]),
    ]);
  }

  function montarCabecera() {
    var barra = document.getElementById("barra");
    var nav = el(
      "nav",
      { class: "menu", id: "menu", "aria-label": "Secciones" },
      MENU.map(function (m) {
        return el("a", { href: m[0], text: m[1] });
      }).concat([el("a", { class: "menu__cta", href: "#contacto", text: "Escríbenos" })])
    );
    var boton = el("button", { class: "menu-boton", type: "button", "aria-expanded": "false", "aria-controls": "menu" }, [
      el("span", { class: "menu-boton__barras", "aria-hidden": "true" }),
      el("span", { text: "Menú" }),
    ]);
    boton.addEventListener("click", function () {
      var abierto = barra.classList.toggle("barra--abierta");
      boton.setAttribute("aria-expanded", abierto ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        barra.classList.remove("barra--abierta");
        boton.setAttribute("aria-expanded", "false");
      }
    });
    barra.appendChild(el("div", { class: "contenedor barra__fila" }, [marca(), boton, nav]));
  }

  /* ---------- portada ---------- */
  function montarPortada() {
    var p = C.portada;
    var titulo = el(
      "h1",
      { class: "portada__titulo" },
      p.titulo.map(function (linea) {
        return el("span", { text: linea });
      })
    );
    return el("section", { id: "inicio", class: "portada" }, [
      foto(p.imagen, p.imagenAlt, "portada__foto", true, p.imagenFoco),
      el("div", { class: "portada__velo", "aria-hidden": "true" }),
      el("div", { class: "contenedor portada__contenido" }, [
        el("p", { class: "portada__etiqueta", text: p.etiqueta }),
        titulo,
        el("div", { class: "portada__pie" }, [
          el("div", { class: "portada__texto" }, [
            el("p", { text: p.texto }),
            el(
              "div",
              { class: "portada__enlaces" },
              p.botones.map(function (b, i) {
                return el("a", { class: "enlace-portada" + (i === 0 ? " enlace-portada--acento" : ""), href: b.enlace }, [
                  el("span", { text: b.texto }),
                  el("span", { class: "enlace-portada__flecha", html: icono("flecha", 22) }),
                ]);
              })
            ),
          ]),
          el(
            "ul",
            { class: "portada__detalles" },
            (p.detalles || []).map(function (d) {
              return el("li", { text: d });
            })
          ),
        ]),
      ]),
    ]);
  }

  function montarDatos() {
    return el("section", { class: "cifras", "aria-label": "Teza de Losa en cifras" }, [
      el(
        "dl",
        { class: "contenedor cifras__lista" },
        C.datos.map(function (d) {
          return el("div", { class: "cifra" }, [el("dt", { text: d.cifra }), el("dd", { text: d.texto })]);
        })
      ),
    ]);
  }

  /* ---------- el pueblo ---------- */
  function montarPueblo() {
    var p = C.pueblo;
    var cita = p.cita
      ? el("figure", { class: "cita" }, [
          el("blockquote", null, [el("p", { text: "«" + p.cita.texto + "»" })]),
          el("figcaption", { text: p.cita.autor }),
        ])
      : null;
    return seccion("pueblo", "franja--clara", [
      el("div", { class: "pueblo" }, [
        el("div", { class: "pueblo__imagen" }, [foto(p.imagen, p.imagenAlt, "foto--alta")]),
        el("div", { class: "pueblo__texto" }, [
          el("p", { class: "etiqueta", text: p.etiqueta }),
          el("h2", { text: p.titulo }),
          el("div", { class: "prosa" }, parrafos(p.parrafos)),
          cita,
          el(
            "div",
            { class: "acordeon" },
            p.desplegables.map(function (d) {
              var cuerpo = parrafos(d.parrafos);
              if (d.imagen) {
                var f = foto(d.imagen, d.imagenAlt, "foto--detalle");
                if (d.pie) f.appendChild(el("figcaption", { class: "foto__pie", text: d.pie }));
                cuerpo.unshift(f);
              }
              return desplegable(d.titulo, cuerpo);
            })
          ),
        ]),
      ]),
    ]);
  }

  /* ---------- el valle ---------- */
  function montarValle() {
    var v = C.valle;
    var intro = el("header", { class: "cabecera-seccion" }, [
      el("div", null, [el("p", { class: "etiqueta", text: v.etiqueta }), el("h2", { text: v.titulo })]),
      el("div", { class: "valle__intro" }, [
        v.escudo ? el("img", { class: "valle__escudo", src: C.sitio.logo, alt: C.sitio.logoAlt, width: "279", height: "320", loading: "lazy" }) : null,
        el("p", { class: "entradilla", text: v.texto }),
      ]),
    ]);
    return seccion("valle", "franja--oscura", [
      intro,
      foto(v.imagen, v.imagenAlt, "foto--panoramica", false, v.imagenFoco, v.credito),
      v.pie ? el("p", { class: "foto__pie", text: v.pie }) : null,
      el(
        "div",
        { class: "temas" },
        v.temas.map(function (t) {
          return el("article", { class: "tema" }, [
            el("span", { class: "tema__icono", html: icono(t.icono, 38) }),
            el("h3", { text: t.titulo }),
            el("p", { class: "tema__resumen", text: t.resumen }),
            desplegable("Saber más", parrafos(t.parrafos), "desplegable--compacto"),
          ]);
        })
      ),
    ]);
  }

  /* ---------- eventos ---------- */
  function tarjetaEvento(e, destacado) {
    return el("article", { class: "evento" + (destacado ? " evento--destacado" : "") }, [
      foto(e.imagen, e.imagenAlt, "evento__foto", false, e.imagenFoco),
      el("div", { class: "evento__texto" }, [
        el("p", { class: "chapa", text: e.cuando }),
        el("h3", { text: e.titulo }),
        el("p", { text: e.resumen }),
        desplegable(
          "Ver detalles",
          [
            el(
              "dl",
              { class: "ficha" },
              (e.detalles || []).reduce(function (acc, d) {
                acc.push(el("dt", { text: d.titulo }), el("dd", { text: d.texto }));
                return acc;
              }, [])
            ),
          ],
          "desplegable--compacto"
        ),
      ]),
    ]);
  }

  function montarEventos() {
    var e = C.eventos;
    return seccion("eventos", "franja--tinte", [
      cabecera(e),
      el(
        "div",
        { class: "eventos" },
        e.lista.map(function (ev, i) {
          return tarjetaEvento(ev, i === 0);
        })
      ),
      e.aviso ? el("p", { class: "nota", text: e.aviso }) : null,
    ]);
  }

  /* ---------- qué ver cerca ---------- */
  function montarCerca() {
    var c = C.cerca;
    var tipos = [];
    c.lugares.forEach(function (l) {
      if (tipos.indexOf(l.tipo) < 0) tipos.push(l.tipo);
    });

    var rejilla = el(
      "div",
      { class: "lugares" },
      c.lugares.map(function (l) {
        var cuerpo = parrafos(l.parrafos);
        if (l.consejo) {
          cuerpo.push(el("p", { class: "consejo" }, [el("strong", { text: "Consejo. " }), l.consejo]));
        }
        if (l.mapa) {
          cuerpo.push(
            el(
              "a",
              {
                class: "enlace-flecha",
                href: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(l.mapa),
                target: "_blank",
                rel: "noopener",
              },
              [el("span", { text: "Ver en el mapa" }), el("span", { html: icono("flecha", 18) })]
            )
          );
        }
        return el("article", { class: "lugar", "data-tipo": l.tipo }, [
          el("div", { class: "lugar__imagen" }, [
            foto(l.imagen, l.imagenAlt, "", false, l.imagenFoco, l.credito),
            el("p", { class: "lugar__chapas" }, [
              el("span", { class: "chapa chapa--clara", text: l.tipo }),
              el("span", { class: "chapa", text: l.tiempo }),
            ]),
          ]),
          el("h3", { text: l.nombre }),
          el("p", { text: l.resumen }),
          desplegable("Más información", cuerpo, "desplegable--compacto"),
        ]);
      })
    );

    var filtros = el(
      "div",
      { class: "filtros", role: "group", "aria-label": "Filtrar lugares" },
      ["Todo"].concat(tipos).map(function (t, i) {
        return el("button", { type: "button", class: "filtro", "aria-pressed": i === 0 ? "true" : "false", "data-filtro": t, text: t });
      })
    );
    filtros.addEventListener("click", function (ev) {
      var b = ev.target.closest(".filtro");
      if (!b) return;
      var f = b.getAttribute("data-filtro");
      Array.prototype.forEach.call(filtros.children, function (x) {
        x.setAttribute("aria-pressed", x === b ? "true" : "false");
      });
      Array.prototype.forEach.call(rejilla.children, function (card) {
        card.hidden = f !== "Todo" && card.getAttribute("data-tipo") !== f;
      });
    });

    return seccion("cerca", "franja--clara", [cabecera(c), filtros, rejilla]);
  }

  /* ---------- vivir aquí ---------- */
  function montarVivir() {
    var v = C.vivir;
    var t = v.tablon;
    var anuncios = (t.anuncios || []).map(function (a) {
      return el("li", { class: "anuncio" }, [
        a.imagen ? el("img", { src: a.imagen, alt: "", loading: "lazy" }) : null,
        el("div", null, [
          el("p", { class: "anuncio__tipo", text: [a.tipo, a.precio].filter(Boolean).join(" · ") }),
          el("h4", { text: a.titulo }),
          el("p", { text: a.texto }),
        ]),
      ]);
    });
    var correo = C.contacto.email;
    return seccion("vivir", "franja--acento", [
      el("p", { class: "etiqueta", text: v.etiqueta }),
      el("h2", { class: "titular-gigante", text: v.titulo }),
      el("div", { class: "vivir" }, [
        el("div", null, [
          el("p", { class: "entradilla", text: v.texto }),
          el(
            "ul",
            { class: "razones" },
            v.razones.map(function (r) {
              return el("li", null, [el("h3", { text: r.titulo }), el("p", { text: r.texto })]);
            })
          ),
        ]),
        el("aside", { class: "tablon", "aria-labelledby": "tablon-titulo" }, [
          el("h3", { id: "tablon-titulo", text: t.titulo }),
          anuncios.length ? el("ul", { class: "anuncios" }, anuncios) : el("p", { class: "tablon__vacio", text: t.vacio }),
          esEmailReal(correo)
            ? el("a", { class: "boton boton--oscuro", href: "mailto:" + correo + "?subject=" + encodeURIComponent("Busco casa en Teza de Losa"), text: t.boton })
            : null,
          esEmailReal(correo) ? el("p", { class: "tablon__correo", text: correo }) : null,
          t.desplegable ? desplegable(t.desplegable.titulo, parrafos(t.desplegable.parrafos), "desplegable--compacto") : null,
        ]),
      ]),
    ]);
  }

  /* ---------- cómo llegar ---------- */
  function esquema(l) {
    var W = 560, H = 430, cx = 262, cy = 208;
    var NS = "http://www.w3.org/2000/svg";
    function s(tag, attrs, texto) {
      var n = document.createElementNS(NS, tag);
      Object.keys(attrs).forEach(function (k) { n.setAttribute(k, attrs[k]); });
      if (texto) n.textContent = texto;
      return n;
    }
    var svg = s("svg", { viewBox: "0 0 " + W + " " + H, role: "img", "aria-label": "Esquema de situación de Teza de Losa respecto a " + l.origenes.map(function (o) { return o.nombre; }).join(", ") });
    var kmLon = 111.32 * Math.cos((l.lat * Math.PI) / 180);
    l.origenes.forEach(function (o) {
      var dx = (o.lon - l.lon) * kmLon;
      var dy = (o.lat - l.lat) * 110.57;
      var d = Math.sqrt(dx * dx + dy * dy) || 1;
      var r = 20 * Math.sqrt(d); // distancias comprimidas: esquema, no mapa
      var x = cx + (dx / d) * r;
      var y = cy - (dy / d) * r;
      var izq = x < cx;
      svg.appendChild(s("line", { x1: cx, y1: cy, x2: x, y2: y, class: "esquema__linea" }));
      svg.appendChild(s("circle", { cx: x, cy: y, r: 6, class: "esquema__punto" }));
      var tx = x + (izq ? -12 : 12);
      var ancla = izq ? "end" : "start";
      svg.appendChild(s("text", { x: tx, y: y - 2, "text-anchor": ancla, class: "esquema__nombre" }, o.nombre));
      svg.appendChild(s("text", { x: tx, y: y + 16, "text-anchor": ancla, class: "esquema__dato" }, o.km + " km · " + o.tiempo));
    });
    svg.appendChild(s("circle", { cx: cx, cy: cy, r: 20, class: "esquema__halo" }));
    svg.appendChild(s("circle", { cx: cx, cy: cy, r: 9, class: "esquema__centro" }));
    svg.appendChild(s("text", { x: cx - 18, y: cy - 22, "text-anchor": "end", class: "esquema__teza" }, C.sitio.nombre));
    // norte
    svg.appendChild(s("path", { d: "M34 60 L42 34 L50 60 L42 54 Z", class: "esquema__norte" }));
    svg.appendChild(s("text", { x: 42, y: 80, "text-anchor": "middle", class: "esquema__dato" }, "N"));
    return svg;
  }

  function montarLlegar() {
    var l = C.llegar;
    var gmaps = "https://www.google.com/maps/search/?api=1&query=" + l.lat + "," + l.lon;
    var osm = "https://www.openstreetmap.org/?mlat=" + l.lat + "&mlon=" + l.lon + "#map=13/" + l.lat + "/" + l.lon;
    var tabla = el("table", { class: "distancias" }, [
      el("caption", { class: "solo-lectores", text: "Distancias por carretera a Teza de Losa" }),
      el("thead", null, [
        el("tr", null, [
          el("th", { scope: "col", text: "Desde" }),
          el("th", { scope: "col", text: "Distancia" }),
          el("th", { scope: "col", text: "En coche" }),
        ]),
      ]),
      el(
        "tbody",
        null,
        l.origenes.map(function (o) {
          return el("tr", null, [el("th", { scope: "row", text: o.nombre }), el("td", { text: o.km + " km" }), el("td", { text: o.tiempo })]);
        })
      ),
    ]);
    var figura = el("figure", { class: "esquema" }, []);
    figura.appendChild(esquema(l));
    figura.appendChild(el("figcaption", { text: "Esquema orientativo, no a escala." }));

    return seccion("llegar", "franja--tinte", [
      cabecera(l),
      el("div", { class: "llegar" }, [
        el("div", null, [
          tabla,
          el("p", { class: "nota", text: l.nota }),
          el("div", { class: "botones" }, [
            el("a", { class: "boton boton--oscuro", href: gmaps, target: "_blank", rel: "noopener" }, [el("span", { html: icono("mapa", 18) }), "Abrir en Google Maps"]),
            el("a", { class: "boton boton--linea", href: osm, target: "_blank", rel: "noopener", text: "OpenStreetMap" }),
          ]),
          el("p", { class: "coordenadas" }, [el("span", { text: "Coordenadas " }), el("strong", { text: l.coordenadas })]),
        ]),
        figura,
      ]),
    ]);
  }

  /* ---------- contacto y pie ---------- */
  function montarContacto() {
    var c = C.contacto;
    var redes = (c.redes || []).filter(function (r) { return r.enlace; });
    return seccion("contacto", "franja--oscura franja--contacto", [
      el("div", { class: "contacto" }, [
        el("div", null, [el("h2", { text: c.titulo }), el("p", { class: "entradilla", text: c.texto })]),
        el("div", { class: "contacto__acciones" }, [
          esEmailReal(c.email) ? el("a", { class: "boton boton--acento boton--grande", href: "mailto:" + c.email, text: "Enviar un correo" }) : null,
          esEmailReal(c.email) ? el("p", { class: "contacto__correo", text: c.email }) : null,
          redes.length
            ? el(
                "ul",
                { class: "redes" },
                redes.map(function (r) {
                  return el("li", null, [el("a", { href: r.enlace, target: "_blank", rel: "noopener", text: r.nombre })]);
                })
              )
            : null,
        ]),
      ]),
    ]);
  }

  function montarPie() {
    var p = C.pie;
    var pie = document.getElementById("pie");
    pie.appendChild(
      el("div", { class: "contenedor pie" }, [
        el("div", { class: "pie__marca" }, [marca(), el("p", { text: p.nota })]),
        el(
          "nav",
          { class: "pie__menu", "aria-label": "Secciones (pie)" },
          MENU.map(function (m) {
            return el("a", { href: m[0], text: m[1] });
          })
        ),
        desplegable(
          p.fuentesTitulo,
          [
            el(
              "ul",
              { class: "fuentes" },
              p.fuentes.map(function (f) {
                return el("li", null, [el("a", { href: f.enlace, target: "_blank", rel: "noopener", text: f.texto })]);
              })
            ),
          ],
          "desplegable--compacto pie__fuentes"
        ),
        el("p", { class: "pie__legal", text: "© " + new Date().getFullYear() + " " + C.sitio.nombre + " · " + C.sitio.subtitulo }),
      ])
    );
  }

  /* ---------- montaje ---------- */
  montarCabecera();
  [montarPortada, montarDatos, montarPueblo, montarValle, montarEventos, montarCerca, montarVivir, montarLlegar, montarContacto].forEach(function (f) {
    main.appendChild(f());
  });
  montarPie();
  document.documentElement.classList.add("listo");

  /* Marca en el menú la sección que se está viendo. */
  if ("IntersectionObserver" in window) {
    var enlaces = {};
    Array.prototype.forEach.call(document.querySelectorAll("#menu a[href^='#']"), function (a) {
      enlaces[a.getAttribute("href").slice(1)] = a;
    });
    var obs = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (en) {
          var a = enlaces[en.target.id];
          if (a && en.isIntersecting) {
            Object.keys(enlaces).forEach(function (k) { enlaces[k].removeAttribute("aria-current"); });
            a.setAttribute("aria-current", "true");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    Array.prototype.forEach.call(document.querySelectorAll("main section[id]"), function (sec) {
      obs.observe(sec);
    });
  }
})();
