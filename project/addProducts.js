/**
 * @author Linus Romland, Svante Jonsson
 * @description This program adds a product to the "database".
 * Please do not touch this file!
 */

// Dependencies
const { v4: uuidv4 } = require('uuid');
const inquirer = require('inquirer');
const isImage = require('is-image');
const fs = require('fs');
const path = require('path');

async function main() {
	console.log(
		`\nLet's add some products!\nIf you input something wrong or just want to stop adding products press 'CTRL' + 'C'\n`
	);

	let newProduct = {
		id: uuidv4(),
		title: '',
		category: '',
		description: '',
		images: [],
		stock: null,
		price: null
	};

	newProduct.title = await (
		await inquirer.prompt({
			name: 'output',
			type: 'input',
			message: 'Product name:',
			default() {
				return 'Produkt';
			}
		})
	).output;

	newProduct.category = await (
		await inquirer.prompt({
			name: 'output',
			type: 'list',
			choices: ['Armband', 'Örhängen', 'Klockor', 'Halsband', 'Solglasögon', 'Plånböcker'],
			message: 'Category:'
		})
	).output;

	newProduct.description = await (
		await inquirer.prompt({
			name: 'output',
			type: 'input',
			message: 'Description:',
			default() {
				return 'Produkt';
			}
		})
	).output;

	// eslint-disable-next-line no-constant-condition
	while (true) {
		let addNewMessage = 'Add another image?';

		const image = await (
			await inquirer.prompt({
				name: 'output',
				type: 'input',
				message: 'Drop image here, then press enter:'
			})
		).output;

		const validFile = (await fs.existsSync(image)) && isImage(image);

		if (!validFile && newProduct.images.length <= 0) {
			console.log('Invalid file, please try again!');
			continue;
		} else if (!validFile) {
			addNewMessage = 'Invalid file, do you want to try again?';
		} else {
			newProduct.images.push(image);
		}

		const addNewImage = await (
			await inquirer.prompt({
				name: 'output',
				type: 'confirm',
				message: addNewMessage,
				default() {
					return false;
				}
			})
		).output;

		if (!addNewImage) break;
	}

	newProduct.stock = await (
		await inquirer.prompt({
			name: 'output',
			type: 'number',
			message: 'Amount in stock:',
			default() {
				return 10;
			}
		})
	).output;

	newProduct.price = await (
		await inquirer.prompt({
			name: 'output',
			type: 'number',
			message: 'Price:',
			default() {
				return 149;
			}
		})
	).output;

	// Copies user submitted images to the project
	const dir = `./assets/products/${newProduct.id}`;
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir);
	}

	for (let i = 0; i < newProduct.images.length; i++) {
		const element = newProduct.images[i];
		fs.copyFileSync(element, `${dir}/${i}${path.extname(element)}`);
		newProduct.images[i] = `${newProduct.id}/${i}${path.extname(element)}`;
	}

	// Adds the new product to the "database"
	const products = './public/products.json';
	fs.readFile(products, 'utf8', (err, data) => {
		if (err) {
			console.log(err);
		} else {
			const obj = JSON.parse(data);
			obj.push(newProduct);
			fs.writeFile(products, JSON.stringify(obj), 'utf8', (err) => {
				if (err) {
					console.log(err);
				} else {
					console.log('\nSuccessfully saved the product to the database!\n');
				}
			});
		}
	});

	return;
}

main();
