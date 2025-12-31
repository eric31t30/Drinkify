import styles from './drinks-skeleton.module.css'

function DrinksSkeleton() {
  return (
    <article className={styles.skeleton}>
      <span className={styles["skeleton-brightness"]}></span>
    </article>
  );
}

export default DrinksSkeleton