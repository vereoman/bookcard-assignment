import React from 'react';

function BookCard({ book }) {
	return (
		<div style={styles.card}>
			<img src={book.image} alt={book.name} style={styles.image} />
			<h2 style={styles.title}>{book.name}</h2>
			<p style={styles.genre}>{book.genre}</p>
			<p style={styles.author}>By {book.author}</p>
		</div>
	);
}

const styles = {
	card: {
		border: '1px solid #ddd',
		borderRadius: '8px',
		padding: '16px',
		margin: '10px',
		textAlign: 'center',
		width: '200px',
		boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
	},
	image: {
		width: '100%',
		height: 'auto',
		borderRadius: '4px',
	},
	title: {
		fontSize: '18px',
		margin: '10px 0',
	},
	genre: {
		color: '#666',
		fontSize: '14px',
	},
	author: {
		color: '#333',
		fontSize: '14px',
		fontWeight: 'bold',
	},
};

export default BookCard;