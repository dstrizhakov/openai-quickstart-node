import Head from 'next/head';
import React from 'react';
import { useState } from 'react';
import styles from "../styles/index.module.css";

export default function Home() {
	const [theme, setTheme] = useState('any');
	const [loading, setLoading] = useState(false);
	const [result, setResult] = useState('');

	async function onSubmit(event) {
		event.preventDefault();
		if (loading) {
			return;
		}
		setLoading(true);
		setResult('');
		const response = await fetch('/api/generate-idea', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ theme }),
		});
		const data = await response.json();
		setResult(data.result.replaceAll('\n', '<br />'));
		setLoading(false);
	}

	return (
		<>
			<Head>
				<title>Crazy idea generator</title>
				<link rel="icon" href="/idea.svg" />
			</Head>

			<main className={styles.main}>
				<h3>Crazy idea generator</h3>
				<form onSubmit={onSubmit}>
					<input
						type="text"
						name="theme"
						placeholder="Enter any theme"
						value={theme}
						onChange={(e) => setTheme(e.target.value)}
					/>
					<input type="submit" value="Generate crazy ideas" />
				</form>

				{loading
					? (
						<div>
							<h3>Looking for the crazy ideas 💡</h3>
						</div>
					)
					: <div
						className={styles.result}
						dangerouslySetInnerHTML={{ __html: result }}
					/>
				}

			</main>
		</>
	);
}