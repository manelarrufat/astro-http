import { Clients, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {

	await db.insert(Clients).values([
		{ id: 1, name: "Kasim", age: 22, isActive: true },
		{ id: 2, name: "Mina", age: 44, isActive: true },
		{ id: 3, name: "Angela", age: 34, isActive: true },
		{ id: 4, name: "Montse", age: 64, isActive: true },
		{ id: 5, name: "Maite", age: 24, isActive: false },
	  ]);
	

	console.log('Seed executed');
}
