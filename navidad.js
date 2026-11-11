/* ============================================================
   TEMA NAVIDAD — inyección decorativa
   ------------------------------------------------------------
   PARA APAGARLO AL TERMINAR LA TEMPORADA:
   cambiar MODO_NAVIDAD a false (o usar el modo automático
   por fecha que está comentado más abajo).

   No toca datos, filtros, tabs, búsqueda, validaciones ni
   ningún flujo: solo agrega nodos decorativos con
   pointer-events:none y una clase en <html>.
   ============================================================ */
(function () {
    'use strict';

    // ====== INTERRUPTOR DE TEMPORADA ======
    var MODO_NAVIDAD = true;

    // Opcional: encendido automático del 15-nov al 06-ene y apagado solo.
    // var HOY = new Date();
    // var MODO_NAVIDAD = (HOY.getMonth() === 10 && HOY.getDate() >= 15) ||
    //                    (HOY.getMonth() === 0  && HOY.getDate() <= 6);

    if (!MODO_NAVIDAD) return;

    var ROOT = document.documentElement;

    // Gorro de diseño profesional: cono con degradado y pliegues de tela,
    // brillo lateral, borde de pelaje esponjado, pompón volumétrico y
    // sombra suave. Dibujado vertical y rotado 25° para "ponérselo"
    // a la esquina del badge NE.
    var HAT_SVG =
        '<svg viewBox="-4 44 144 124" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">' +
            '<defs>' +
                '<linearGradient id="xhRed" x1="0" y1="0" x2="1" y2="0.55">' +
                    '<stop offset="0" stop-color="#f26060"/>' +
                    '<stop offset="0.5" stop-color="#dd2c2c"/>' +
                    '<stop offset="1" stop-color="#9e1414"/>' +
                '</linearGradient>' +
                '<linearGradient id="xhSheen" x1="0" y1="0" x2="1" y2="0.25">' +
                    '<stop offset="0" stop-color="#ffffff" stop-opacity="0.32"/>' +
                    '<stop offset="0.55" stop-color="#ffffff" stop-opacity="0.08"/>' +
                    '<stop offset="1" stop-color="#ffffff" stop-opacity="0"/>' +
                '</linearGradient>' +
                '<linearGradient id="xhFur" x1="0" y1="0" x2="0" y2="1">' +
                    '<stop offset="0" stop-color="#ffffff"/>' +
                    '<stop offset="0.55" stop-color="#f2f3f5"/>' +
                    '<stop offset="1" stop-color="#d0d4da"/>' +
                '</linearGradient>' +
                '<radialGradient id="xhPom" cx="0.35" cy="0.3" r="0.95">' +
                    '<stop offset="0" stop-color="#ffffff"/>' +
                    '<stop offset="0.55" stop-color="#f7f8fa"/>' +
                    '<stop offset="1" stop-color="#d2d6dc"/>' +
                '</radialGradient>' +
                '<filter id="xhShadow" x="-15%" y="-15%" width="130%" height="130%">' +
                    '<feDropShadow dx="0" dy="3" stdDeviation="2.6" flood-color="#000000" flood-opacity="0.38"/>' +
                '</filter>' +
            '</defs>' +
            '<g filter="url(#xhShadow)">' +
                '<g transform="rotate(25 75 78)">' +
                    // Cono rojo (cuerpo del gorro)
                    '<path d="M30 116 C38 78 58 50 92 42 C103 39 111 42 113 50 C110 58 104 63 98 71 C92 84 91 98 91 116 Z" fill="url(#xhRed)"/>' +
                    // Sombreado del lado derecho del cono
                    '<path d="M113 50 C110 58 104 63 98 71 C92 84 91 98 91 116 L85 116 C85 96 88 80 93 70 C98 60 104 55 108 49 Z" fill="rgba(146,16,16,0.30)"/>' +
                    // Brillo de tela (lado izquierdo)
                    '<path d="M33 114 C40 80 59 53 90 45 C84 58 70 82 62 114 Z" fill="url(#xhSheen)"/>' +
                    // Pliegues de tela
                    '<path d="M62 114 C68 88 76 68 88 56" fill="none" stroke="rgba(158,20,20,0.45)" stroke-width="2.4" stroke-linecap="round"/>' +
                    '<path d="M77 114 C80 98 85 84 92 72" fill="none" stroke="rgba(158,20,20,0.28)" stroke-width="1.8" stroke-linecap="round"/>' +
                    // Sombra del pompón sobre el cono
                    '<ellipse cx="109" cy="62" rx="10" ry="4.5" fill="#000000" opacity="0.15"/>' +
                    // Pompón: borde esponjoso + cuerpo con volumen
                    '<circle cx="106" cy="46" r="3.6" fill="#f7f8fa"/>' +
                    '<circle cx="114" cy="40.5" r="3.3" fill="#f7f8fa"/>' +
                    '<circle cx="122" cy="44" r="3.1" fill="#f4f5f7"/>' +
                    '<circle cx="126.5" cy="52" r="2.9" fill="#e8ebee"/>' +
                    '<circle cx="124" cy="61" r="2.9" fill="#e2e5e9"/>' +
                    '<circle cx="110" cy="63.5" r="3.1" fill="#dfe2e7"/>' +
                    '<circle cx="115" cy="53" r="13" fill="url(#xhPom)"/>' +
                    '<ellipse cx="110.5" cy="47.5" rx="4.6" ry="3" transform="rotate(-28 110.5 47.5)" fill="#ffffff" opacity="0.85"/>' +
                    // Borde de pelaje con volumen (scallops esponjados)
                    '<path d="M34 108 A5 5 0 0 1 44 108 A5 5 0 0 1 54 108 A5 5 0 0 1 64 108 A5 5 0 0 1 74 108 A5 5 0 0 1 84 108 A5 5 0 0 1 94 108 A5 5 0 0 1 104 108 A5 5 0 0 1 114 108 A14 14 0 0 1 128 122 A14 14 0 0 1 114 136 A5 5 0 0 1 104 136 A5 5 0 0 1 94 136 A5 5 0 0 1 84 136 A5 5 0 0 1 74 136 A5 5 0 0 1 64 136 A5 5 0 0 1 54 136 A5 5 0 0 1 44 136 A5 5 0 0 1 34 136 A14 14 0 0 1 20 122 A14 14 0 0 1 34 108 Z" fill="url(#xhFur)" stroke="rgba(110,105,100,0.22)" stroke-width="0.8"/>' +
                    // Sombra de contacto del cono sobre el pelaje
                    '<path d="M34 108 A5 5 0 0 1 44 108 A5 5 0 0 1 54 108 A5 5 0 0 1 64 108 A5 5 0 0 1 74 108 A5 5 0 0 1 84 108 A5 5 0 0 1 94 108 A5 5 0 0 1 104 108 A5 5 0 0 1 114 108" fill="none" stroke="rgba(146,16,16,0.32)" stroke-width="4.5" stroke-linecap="round"/>' +
                '</g>' +
            '</g>' +
        '</svg>';

    function crear(tag, clase, aria) {
        var el = document.createElement(tag);
        el.className = clase;
        if (aria) el.setAttribute('aria-hidden', 'true');
        return el;
    }

    function inyectar() {
        // 1) Gorro sobre el badge NE
        var badge = document.querySelector('.logo-badge');
        if (badge && !badge.querySelector('.xmas-hat')) {
            var hat = crear('span', 'xmas-hat', true);
            hat.innerHTML = HAT_SVG;
            badge.appendChild(hat);
        }

        var header = document.querySelector('.header');

        // 2) Luces en el borde superior del header
        if (header && !header.querySelector('.xmas-lights')) {
            var luces = crear('div', 'xmas-lights', true);
            var colores = ['#ef4444', '#fbbf24', '#22c55e', '#60a5fa', '#f472b6'];
            for (var i = 0; i < 11; i++) {
                var bombilla = document.createElement('i');
                bombilla.className = 'xmas-bulb';
                bombilla.style.setProperty('--bulb', colores[i % colores.length]);
                bombilla.style.animationDelay = (i * 0.22) + 's';
                luces.appendChild(bombilla);
            }
            header.appendChild(luces);
        }

        // 3) Nieve
        if (!document.querySelector('.xmas-snow')) {
            var nieve = crear('div', 'xmas-snow', true);
            var cantidad = window.matchMedia('(max-width: 640px)').matches ? 14 : 24;
            for (var j = 0; j < cantidad; j++) {
                var copo = document.createElement('span');
                copo.className = 'xmas-flake';
                copo.textContent = (j % 4 === 0) ? '\u2744' : '\u2022';
                copo.style.left = (Math.random() * 100).toFixed(2) + '%';
                copo.style.fontSize = (6 + Math.random() * 10).toFixed(1) + 'px';
                copo.style.opacity = (0.18 + Math.random() * 0.32).toFixed(2);
                copo.style.animationDuration = (10 + Math.random() * 14).toFixed(1) + 's';
                copo.style.animationDelay = (-Math.random() * 20).toFixed(1) + 's';
                copo.style.setProperty('--drift', (Math.random() * 60 - 30).toFixed(0) + 'px');
                nieve.appendChild(copo);
            }
            document.body.appendChild(nieve);
        }
    }

    // API mínima: permite encender/apagar sin recargar (usada por el preview)
    window.XMAS = {
        activar: function () { ROOT.classList.add('xmas'); inyectar(); },
        desactivar: function () { ROOT.classList.remove('xmas'); }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () { window.XMAS.activar(); });
    } else {
        window.XMAS.activar();
    }
})();
