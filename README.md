# Drinkify 🍸

## Este proyecto es una aplicación SPA

- **Drinkify** es un proyecto personal creado para practicar y consolidar habilidades en desarrollo web frontend y backend.  
- Permite explorar un catálogo de **bebidas de bar y cócteles**, mostrando información detallada como ingredientes, preparación, nivel de alcohol y etiquetas.  
- Implementada como una **Single Page Application (SPA)** con **React**.  
- Cuenta con una **API REST propia** desarrollada en **Node.js y Express**, que provee los datos de las bebidas.  
- Presenta una interfaz moderna, fluida y responsive, enfocada en una buena experiencia de usuario.

---

## Funcionalidades principales

- **Catálogo de bebidas:** Listado dinámico de cócteles y bebidas de bar.  
- **Filtrado avanzado:** Por categoría, nivel de alcohol y búsqueda por nombre.  
- **Paginación:** Navegación eficiente entre resultados.  
- **Página de detalle:**  
  - Información completa de cada bebida  
  - Ingredientes y cantidades  
  - Pasos de preparación  
  - Tiempo estimado  
  - Etiquetas (tags) relacionadas  
  - Galería de imágenes  
- **Recomendaciones:** Bebidas relacionadas según categoría y etiquetas compartidas.  
- **Diseño responsive:** Adaptado a distintos tamaños de pantalla.

---

## Tecnologías Utilizadas

- **Frontend:** React, JavaScript, Vite, CSS Modules
- **Backend:** Node.js, Express  
- **API:** REST API propia (datos locales estructurados)  
- **Despliegue:** Vercel  
- **Control de versiones:** Git & GitHub  

---

## API

Drinkify incluye una **API REST personalizada** desarrollada con **Express**, encargada de servir los datos de las bebidas y sus categorías.

### Endpoints principales

`GET /api/drinks` – Lista de bebidas con paginación y filtros  

**Query params disponibles:**
- `page` – número de página
- `limit` – cantidad de resultados por página
- `category` – filtrar por categoría
- `level` – filtrar por nivel de alcohol
- `search` – búsqueda por nombre
- `GET /api/drinks/:id` – Detalle de una bebida  
- `GET /api/drinks/:id/recommendations` – Recomendaciones relacionadas  
- `GET /api/categories` – Categorías disponibles  

La API está integrada dentro del proyecto y desplegada junto al frontend en **Vercel**.

---

## Demo

Puedes ver la aplicación en funcionamiento aquí:  
👉 **[Drinkify – Live Demo](https://drinkify-ten.vercel.app/)**


<div align="center">
  <img src="/public/drinkify.png" alt="Captura de pantalla del sitio Drinkify">
</div>
