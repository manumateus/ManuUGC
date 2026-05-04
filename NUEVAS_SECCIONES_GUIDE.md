# 📱 Guía de Nuevas Secciones - Portfolio Manuela Mateus

He agregado 4 nuevas secciones al portfolio. Aquí está la guía completa para poblarlas con tu contenido:

---

## 1️⃣ SECCIÓN "MARCAS QUE HAN CONFIADO EN MÍ"

### 📁 Ubicación de carpeta
```
/public/uploads/logos/
```

### 📋 Cómo funciona
- Grid de 6 logos de marcas
- Cada logo se muestra en un cuadrado con efecto hover
- Los logos deben ser **cuadrados o rectangulares** (PNG recomendado)

### 📤 Cómo subir logos
1. Coloca tus logos en: `public/uploads/logos/`
2. Nómbra los archivos así:
   - `skeepers.png` (Skeepers)
   - `yesstyle.png` (YesStyle)
   - `charlotte-tilbury.png` (Charlotte Tilbury)
   - `estee-lauder.png` (Estée Lauder)
   - `loreal.png` (L'Oréal)
   - `notino.png` (Notino)

3. **Nombres de archivo deben coincidir exactamente** con los del código

### 💡 Recomendaciones de archivo
- **Formato:** PNG (fondo transparente) o JPG
- **Tamaño:** 200x200px mínimo, preferible 400x400px
- **Peso:** menos de 100KB cada uno
- **Fondo:** si es PNG transparente, mejor; si es JPG, fondo blanco

### 📝 Editar nombres de marcas
Si quieres cambiar los nombres o agregar/quitar marcas, avísame y actualizo el código directamente.

---

## 2️⃣ SECCIÓN "MI CONTENIDO EN ACCIÓN" (Videos)

### 📁 Ubicación de carpetas
```
/public/uploads/videos/          ← Video .mp4
/public/uploads/videos/posters/  ← Imágenes poster (thumbnails)
```

### 📋 Cómo funciona
- Grid de 3 videos
- Cada video tiene: thumbnail (poster), botón play, título, marca, duración
- Click en el play abre el video (click-to-play, no autoplay)

### 📤 Cómo subir videos

**Paso 1: Subir archivo de vídeo**
1. Coloca tu vídeo .mp4 en: `public/uploads/videos/`
2. Nómbra así:
   - `video-1.mp4`
   - `video-2.mp4`
   - `video-3.mp4`

**Paso 2: Subir poster (thumbnail)**
1. Coloca la imagen del poster en: `public/uploads/videos/`
2. Nómbra así:
   - `poster-1.jpg` (para video-1.mp4)
   - `poster-2.jpg` (para video-2.mp4)
   - `poster-3.jpg` (para video-3.mp4)

### 💡 Recomendaciones de archivo

**Video .mp4:**
- **Codec:** H.264
- **Resolución:** 1080x1920 (vertical, como TikTok/Reels)
- **Duración:** 15-60 segundos
- **Peso:** 5-20MB máximo
- **Frame rate:** 30fps

**Poster (Thumbnail):**
- **Formato:** JPG
- **Resolución:** 1080x1920 (mismo aspect ratio que video)
- **Peso:** menos de 200KB
- **Contenido:** fotograma del video donde se vea bien el producto

### 🎬 Cómo crear un buen poster
- Toma el frame más visual del vídeo (donde se ve mejor el producto)
- Asegúrate de que sea legible (no borroso)
- Exporta como JPG, comprime si es necesario

---

## 3️⃣ SECCIÓN "MI HISTORIA" (Sobre mí)

### 📁 Ubicación
```
/public/uploads/about/  ← Tu foto profesional
```

### 📋 Cómo funciona
- Texto de narrativa personal (ya está escrito)
- Foto tuya en la derecha (4:3 aspect ratio)
- Grid de credenciales abajo (ya precargado)

### 📤 Cómo subir tu foto

1. Coloca tu foto en: `public/uploads/about/`
2. Nómbra así: `photo.jpg`
3. **Actualiza el src** en el código:
   - Busca en `index.astro` la línea: `src="/uploads/hero/AD65FD98-1CA7-4E9D-B378-E4C41A413870.png"`
   - Reemplázala por: `src="/uploads/about/photo.jpg"`

### 💡 Recomendaciones de foto
- **Formato:** JPG o PNG
- **Aspect ratio:** 3:4 (vertical)
- **Resolución:** 800x1000px mínimo
- **Peso:** menos de 300KB
- **Estilo:** profesional, bien iluminada, fondo neutral o desenfocado
- **Contenido:** foto tuya de cintura para arriba, mirando a cámara

### ✏️ Editar texto de "Mi Historia"
El texto está en el código. Si quieres cambiarlo, avísame y lo actualizo.

---

## 4️⃣ SECCIÓN "CONTACTO" (Ya está actualizada)

✅ **Email:** manumateus.ugc@gmail.com (ya configurado)
✅ **Instagram:** @manumateus.ugc (ya configurado)
✅ **TikTok:** @manumateus.ugc (ya configurado)

---

## 📋 CHECKLIST DE MEDIA

Imprime esto y ten todo listo:

### Logos (6 archivos)
- [ ] skeepers.png
- [ ] yesstyle.png
- [ ] charlotte-tilbury.png
- [ ] estee-lauder.png
- [ ] loreal.png
- [ ] notino.png

**Carpeta:** `/public/uploads/logos/`

### Videos (6 archivos)
- [ ] video-1.mp4 + poster-1.jpg
- [ ] video-2.mp4 + poster-2.jpg
- [ ] video-3.mp4 + poster-3.jpg

**Carpeta:** `/public/uploads/videos/`

### Foto "Sobre mí" (1 archivo)
- [ ] photo.jpg (4:3 aspect ratio)

**Carpeta:** `/public/uploads/about/`

---

## 🚀 Paso a paso para agregar contenido

### 1. Organiza tus archivos en carpetas locales
```
Mi Computadora/
├── Logos/
│   ├── skeepers.png
│   ├── yesstyle.png
│   └── ...
├── Videos/
│   ├── video-1.mp4
│   ├── poster-1.jpg
│   └── ...
└── Foto/
    └── photo.jpg
```

### 2. Sube a las carpetas correctas
- Logos → `/public/uploads/logos/`
- Videos → `/public/uploads/videos/`
- Foto → `/public/uploads/about/`

### 3. Abre el navegador
- Ve a http://localhost:4323
- Debería mostrar todo con tu contenido automáticamente

### 4. Si algo no aparece
- Verifica que los nombres de archivo coincidan EXACTAMENTE
- Recarga la página (Ctrl+F5)
- Revisa la consola del navegador (F12) para errores

---

## 📝 Notas importantes

1. **Los nombres de archivo deben coincidir exactamente** (mayúsculas/minúsculas importan en algunos sistemas)
2. **PNG vs JPG:** PNG es mejor para logos (fondo transparente), JPG para fotos
3. **Compresión:** comprime tus imágenes para que carguen rápido (usa tinypng.com o similar)
4. **Aspect ratios:**
   - Logos: cuadrados (1:1)
   - Videos + posters: vertical (9:16)
   - Foto "Sobre mí": 3:4

---

## 🔧 Si necesitas cambios en el código

Algunos cambios que podrías solicitar:
- Cambiar nombre de marca (ej: "Skeepers" → "Skeepers UGC")
- Agregar más logos (5→8 logos)
- Cambiar el orden de videos
- Editar el texto de "Mi Historia"
- Cambiar colores o tamaños

Solo avísame qué necesitas.

---

**¿Preguntas?** Revisa esta guía o avísame si algo no funciona. 🚀
