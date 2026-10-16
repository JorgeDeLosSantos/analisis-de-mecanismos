# Análisis de Mecanismos

Material de la asignatura de **Análisis de Mecanismos** (Ingeniería Mecatrónica, UPGTO).

- `site/`: portada y páginas estáticas.
- `slides/`: presentaciones elaboradas con Slidev.
- `notes/`: apuntes Markdown publicados con Jupyter Book 2.

## Desarrollo local de los apuntes

Se recomienda Python 3.12:

```bash
python -m pip install -r notes/requirements.txt
cd notes
jupyter book start
```

Para construir el HTML del sitio que se publica en GitHub Pages (desde `notes/`):

```bash
BASE_URL=/analisis-de-mecanismos/apuntes jupyter book build --html --strict
```

En PowerShell, la variable se configura por separado:

```powershell
$env:BASE_URL = "/analisis-de-mecanismos/apuntes"
jupyter book build --html --strict
Remove-Item Env:BASE_URL
```

El HTML se genera en `notes/_build/html/`. La configuración de navegación está en `notes/myst.yml`. Los documentos añadidos deben incluirse en `project.toc` cuando estén listos para publicación.

## Desarrollo local de presentaciones

```bash
cd slides
pnpm install --frozen-lockfile
pnpm dev:u2
```

Para otras presentaciones utiliza los scripts `dev:intro`, `dev:u1`, `dev:u3` y `dev:u4` del archivo `slides/package.json`.

## Publicación

Los pull requests contra `main` validan la construcción de Slidev y Jupyter Book sin publicar. Los cambios integrados a `main` activan `.github/workflows/deploy-pages.yml`, que produce un único artefacto para GitHub Pages: la portada en `/`, las presentaciones en `/slides/` y los apuntes en `/apuntes/`.
