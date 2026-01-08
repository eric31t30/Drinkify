import styles from "./project-info.module.css"

import logo from "/illustrations/drinkify-logo.svg"
import corner from "/illustrations/leafs-corner.svg";

function ProjectInfo() {
  return (
    <main className={styles.project}>
        <div className={styles.info}>
            <img className={styles.logo} src={logo} alt="" />
            <p className={styles.description}>
              Drinkify es un proyecto personal creado para practicar y consolidar
              habilidades en desarrollo web frontend y backend. La idea es explorar y
              descubrir bebidas de bar y cócteles, mostrando información clara y bien
              estructurada sobre cada preparación, con un enfoque visual atractivo y
              fácil de usar.
            </p>
            <section className={styles.section}>
              <h2 className={styles.title}>Conoce</h2>
              <ul className={styles.list}>
                <li className={styles.item}>
                  ⚬ Sistema de filtrado por categoría, nivel de alcohol y búsqueda por
                  nombre.
                </li>
                <li className={styles.item}>
                  ⚬ Paginación para una navegación fluida entre resultados.
                </li>
                <li className={styles.item}>
                  ⚬ Página de detalle con ingredientes, cantidades, pasos de
                  preparación y tiempo estimado.
                </li>
                <li className={styles.item}>
                  ⚬ Galería de imágenes y etiquetas relacionadas.
                </li>
                <li className={styles.item}>
                  ⚬ Recomendaciones de bebidas similares según categoría y tags.
                </li>
              </ul>
            </section>
            <section className={styles.section}>
              <h2 className={styles.title}>Tecnologias</h2>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <strong>Frontend:</strong> React, JavaScript, Vite, CSS Modules
                </li>
                <li className={styles.item}>
                  <strong>Backend:</strong> Node.js, Express
                </li>
                <li className={styles.item}>
                  <strong>API REST:</strong> propia con datos estructurados
                </li>
                <li className={styles.item}>
                  <strong>Despliegue:</strong> Vercel
                </li>
              </ul>
            </section>
            <section className={styles.section}>
              <h2 className={styles.title}>Imagenes</h2>
              <p className={styles.description}>
                Las imágenes utilizadas en este proyecto provienen principalmente de
                bancos de recursos gratuitos como Pexels, Unsplash y Freepik, además
                de algunas imágenes generadas con ia.
              </p>
              <p className={styles.description}>
                Todos los recursos visuales se utilizan únicamente con fines
                educativos y demostrativos. Agradecimientos a los autores.
              </p>
            </section>
            <section className={styles.section}>
              <h2 className={styles.title}>Api</h2>
              <p className={styles.description}>
                Este proyecto utiliza una API REST personalizada, desarrollada con
                Node.js y Express, encargada de servir los datos de las bebidas al
                frontend.
              </p>
              <p className={styles.description}>
                Es un proyecto de aprendizaje enfocado en buenas prácticas,
                organización del código y experiencia de usuario.
              </p>
            </section>
            
        </div>
        <img className={`${styles.corner} ${styles["corner-1"]}`}  src={corner} alt="" />
        <img className={`${styles.corner} ${styles["corner-2"]}`}  src={corner} alt="" />
    </main>
  );
}

export default ProjectInfo