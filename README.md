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

## Despliegue en GitHub Pages

🌐 **Web publicada:** https://dannydzib.github.io/my-cv/

### Cómo se configuró

1. **Astro** (`astro.config.mjs`): se definió la URL del sitio y la ruta base del repositorio, para que enlaces, imágenes y metadatos funcionen bajo `/my-cv/`:
   ```js
   site: 'https://dannydzib.github.io',
   base: '/my-cv',
   ```
2. **Workflow de GitHub Actions** (`.github/workflows/deploy.yml`) con dos jobs:
   - **build**: usa la action oficial `withastro/action`, que instala dependencias, compila el sitio (`astro check` + `astro build`) y sube `dist/` como artefacto de Pages.
   - **deploy**: publica ese artefacto con `actions/deploy-pages`.
3. **Repositorio** `DannyDzib/my-cv`, público (GitHub Pages es gratis en repos públicos), con `main` como rama por defecto.
4. **GitHub Pages activado** en **Settings → Pages → Build and deployment → Source: GitHub Actions**. Sin este paso el deploy falla con `404 … Ensure GitHub Pages has been enabled`.

### Actualizaciones automáticas

Cada `git push` a la rama **`main`** vuelve a compilar y publicar la web sola, sin pasos manuales:

```bash
git add .
git commit -m "Actualizo mi CV"
git push
```

En 1–2 minutos los cambios aparecen en la web. El progreso se ve en la pestaña **Actions** del repositorio.

- Si el build falla (por ejemplo, por un error de TypeScript), **no se publica nada** y la versión anterior sigue en línea.
- También se puede relanzar el despliegue a mano: **Actions → Deploy to GitHub Pages → Run workflow**.
- Si no ves los cambios, recarga sin caché con `Cmd + Shift + R`.

> Para usar la URL `https://dannydzib.github.io` sin `/my-cv`, el repo debería llamarse `DannyDzib.github.io` y habría que eliminar la línea `base` de `astro.config.mjs`.

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

