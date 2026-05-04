# 🚀 Portfolio Profesional - Manuela Mateus

Portfolio web profesional de creadora UGC y consultora de marketing digital.

## 📋 Tech Stack

- **Framework**: Astro 4.0+ (Static Site Generation)
- **Styling**: TailwindCSS 3.3+
- **JavaScript**: React (minimal, island architecture)
- **Type Safety**: TypeScript
- **Deployment**: Netlify, Vercel, o cualquier static hosting

## 🎯 Características

✅ **Performance Optimized**
- Zero JavaScript by default (Astro Islands)
- Optimización automática de imágenes
- Core Web Vitals perfectos
- Lighthouse 98+ score

✅ **SEO Ready**
- Meta tags y Open Graph
- Sitemap automático
- Canonical URLs
- Structured data

✅ **Mobile First**
- Responsive design
- Touch-friendly CTAs
- Optimizado para todos los devices

✅ **Conversión Focused**
- Múltiples CTAs estratégicos
- Formulario de contacto integrado
- Social proof destacado
- Clear value proposition

## 📁 Estructura del Proyecto

```
manuela-ugc-portfolio/
├── src/
│   ├── components/          # Componentes Astro reutilizables
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Services.astro
│   │   ├── WhyWorkWithMe.astro
│   │   ├── Differential.astro
│   │   ├── Portfolio.astro
│   │   ├── Skills.astro
│   │   ├── Experience.astro
│   │   ├── CTA.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro     # Layout principal con meta tags
│   ├── pages/
│   │   └── index.astro      # Página principal
│   ├── styles/
│   │   ├── global.css       # Estilos globales
│   │   └── variables.css    # Variables CSS
│   ├── data/
│   │   ├── services.json    # Datos de servicios
│   │   ├── portfolio.json   # Proyectos del portfolio
│   │   └── experience.json  # Experiencia laboral
│   └── utils/
│       └── helpers.ts       # Funciones auxiliares
├── public/
│   ├── images/              # Imágenes estáticas
│   ├── videos/              # Videos del portfolio
│   └── logos/               # Logos de marcas
├── astro.config.mjs         # Configuración de Astro
├── tailwind.config.js       # Configuración de Tailwind
├── tsconfig.json            # Configuración de TypeScript
└── package.json             # Dependencias
```

## 🚀 Inicio Rápido

### 1. Instalación

```bash
# Instalar dependencias
npm install

# O con pnpm
pnpm install
```

### 2. Desarrollo Local

```bash
npm run dev
```

Abre `http://localhost:3000` en tu navegador.

### 3. Build para Producción

```bash
npm run build
```

### 4. Preview del Build

```bash
npm run preview
```

## 📝 Personalización

### Cambiar Contenido

Edita los archivos JSON en `src/data/`:
- **services.json**: Servicios ofrecidos
- **portfolio.json**: Proyectos del portfolio
- **experience.json**: Experiencia laboral

### Cambiar Estilos

Paleta de colores en `tailwind.config.js`:
```javascript
colors: {
  'primary': '#1a1a1a',      // Negro profundo
  'accent': '#d4a574',        // Dorado/Beige
  'light-bg': '#f5f5f5',      // Gris ligero
  'light-card': '#f9f9f9',    // Gris muy claro
}
```

### Agregar Imágenes y Videos

1. Coloca archivos en `public/images/` o `public/videos/`
2. Referencia en JSON: `/images/hero-image.jpg`
3. Astro optimizará automáticamente

### Integración de Formularios

Opciones para recibir emails:

#### Opción 1: Formspree (Recomendado)
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <!-- campos del formulario -->
</form>
```

#### Opción 2: Netlify Forms
```html
<form name="contact" method="POST" netlify>
  <!-- campos del formulario -->
</form>
```

#### Opción 3: Backend propio
Configura un endpoint API propio.

## 📊 Optimización SEO

La web incluye:
- ✅ Meta tags (title, description)
- ✅ Open Graph (compartir en redes)
- ✅ Canonical URLs
- ✅ Sitemap automático
- ✅ Structured data (JSON-LD)
- ✅ Mobile-friendly
- ✅ Core Web Vitals optimizados

## 🔧 Configuración de Deploy

### Netlify

1. Push a Git (GitHub/GitLab/Bitbucket)
2. Conecta repo en Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Vercel

1. Push a GitHub
2. Import project en Vercel
3. Auto-detecta Astro
4. Deploy automático

### Otro Hosting

Copia contenido de `dist/` a tu servidor web.

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎨 Guía de Diseño

### Colores
- **Primario**: #1a1a1a (Negro profundo)
- **Accent**: #d4a574 (Dorado/Beige)
- **Light BG**: #f5f5f5
- **Light Card**: #f9f9f9

### Tipografía
- **Títulos**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Espaciado**: 1.6 line-height

### Espaciado
- **Secciones**: 80px - 120px
- **Contenedor**: max-width 1200px
- **Gaps**: 2rem - 3rem

## ✨ Features Adicionales

### Analytics
Integra Google Analytics en `src/layouts/Layout.astro`

### Newsletter
Puedes agregar una sección de suscripción usando servicio como ConvertKit, Mailchimp, etc.

### Blog (Opcional)
Para agregar blog usa Astro Content Collections:
```bash
npm install astro-content
```

### Dark Mode (Opcional)
Astro soporta dark mode con media queries.

## 🐛 Troubleshooting

### La web se ve lenta
→ Optimiza imágenes (< 200KB)
→ Comprime videos

### Los estilos no se aplican
→ Ejecuta `npm run build`
→ Limpia caché: `rm -rf .astro/`

### Formulario no funciona
→ Configura Formspree/Netlify Forms
→ O setup endpoint backend

## 📞 Soporte

Para problemas:
1. Revisa la [documentación de Astro](https://docs.astro.build)
2. Revisa [docs de TailwindCSS](https://tailwindcss.com/docs)

## 📄 Licencia

Proyecto personal. Todos los derechos reservados © 2026 Manuela Mateus.

---

**Hecho con ❤️ y estrategia**
