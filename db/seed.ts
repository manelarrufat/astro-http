import { getCollection } from 'astro:content';
import { Clients, db, Posts } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {

	await db.insert(Clients).values([
		{ id: 1, name: "Kasim", age: 22, isActive: true },
		{ id: 2, name: "Mina", age: 44, isActive: true },
		{ id: 3, name: "Angela", age: 34, isActive: true },
		{ id: 4, name: "Montse", age: 64, isActive: true },
		{ id: 5, name: "Maite", age: 24, isActive: false },
	]);

	const posts = await getCollection('blog');

	await db.insert(Posts).values(
		posts.map( p => ({
			id: p.id,
			title: p.data.title,
			likes: Math.round( Math.random()*100 )
		}))
	);
	

	console.log('Seed executed');
}
