import styles from './page.module.css';

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.description}></div>

			<div className={styles.center}>
				<h1>how2help</h1>
			</div>

			<div className={styles.grid}></div>
		</main>
	);
}
