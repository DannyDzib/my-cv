# my-cv

CV web de **Angel Daniel Dzib Chan**, Sr Front-End Developer, en español e inglés.

Hecho con [Astro](https://astro.build) + TypeScript. Genera HTML estático, sin JavaScript en el cliente, y se publica gratis en **GitHub Pages**.

## Correr en local

```bash
npm install
npm run dev       # http://localhost:3000/my-cv/
npm run build     # verifica tipos y genera dist/
npm run preview   # sirve el build de producción
```

## Publicar en GitHub Pages (solo la primera vez)

1. En `astro.config.mjs`, cambia `TU_USUARIO` por tu usuario de GitHub.
2. Crea en GitHub un repositorio **vacío** llamado `my-cv`.
3. Sube el código:
   ```bash
   git init
   git add .
   git commit -m "Mi CV"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/my-cv.git
   git push -u origin main
   ```
4. En el repo, ve a **Settings → Pages → Build and deployment → Source: GitHub Actions**.

En 1–2 minutos estará en `https://TU_USUARIO.github.io/my-cv/`. A partir de ahí, cada `git push` a `main` vuelve a publicar la web automáticamente (`.github/workflows/deploy.yml`).

> Si prefieres la URL `https://TU_USUARIO.github.io` sin `/my-cv`, llama al repo `TU_USUARIO.github.io` y elimina la línea `base` de `astro.config.mjs`.

## Editar el contenido

Todo el contenido está en `src/data/`, tipado con TypeScript:

| Archivo | Qué contiene |
|---|---|
| `contact.ts` | Teléfono, email, LinkedIn y GitHub (compartido por los dos idiomas) |
| `cv.es.ts` | CV en español |
| `cv.en.ts` | CV en inglés |
| `src/i18n/ui.ts` | Textos de la interfaz (títulos, botones) y meta description |

En los textos puedes usar `**negritas**` para resaltar tecnologías o logros.

Para que aparezcan **LinkedIn** y **GitHub**, rellena sus URLs en `contact.ts`.

## Funcionalidades

- Rutas `/es/` y `/en/` con `hreflang`, canonical y Open Graph para SEO. La raíz redirige según el idioma del navegador.
- Modo claro/oscuro automático según el sistema.
- Responsive: dos columnas en escritorio y una en móvil.
- **Descargar PDF**: usa la impresión del navegador con estilos optimizados para A4 ("Guardar como PDF").

## Notas sobre el contenido

- En el PDF original aparece "Cloud Code"; aquí se corrigió a **Claude Code**. Si no era eso, edítalo en `cv.es.ts` y `cv.en.ts`.
- Se corrigieron erratas menores (puntos dobles, acentos, tiempos verbales) y las tecnologías se agruparon por categoría, añadiendo algunas que ya aparecían en la experiencia (Angular, RTK Query, React Hook Form, Micro Frontends, Monorepo).
