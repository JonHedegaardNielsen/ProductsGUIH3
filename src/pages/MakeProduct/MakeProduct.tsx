import { useEffect, useState } from 'react'
import './MakeProduct.css'
import type { Category, ImageFile, PostProductBody } from '../../productTypes';
import { getCategoryAPIBaseURL, getProductsAPIBaseURL } from '../../appdata';

export const MakeProduct = () => {
	const [categories, setCategories] = useState<Array<Category>>([]);
	const [pickedCategorie, setPickedCategorie] = useState<Category>()
	useEffect(() => {
		async function loadCategories() {
			const response = await fetch(`${getCategoryAPIBaseURL()}`);
			const categories: Array<Category> = await response.json();
			setCategories(categories);
		}
		loadCategories()
	}, [])


	function convertFileToBase64(file: File): Promise<string> {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();

			reader.onloadend = () => {
				const base64String = reader.result as string;
				resolve(base64String);
			};

			reader.onerror = (error) => {
				reject(error);
			};

			reader.readAsDataURL(file); // Reads the file as a Data URL (Base64)
		});
	}
	const [name, setName] = useState("");
	const [price, setPrice] = useState(0);
	const [files, setFiles] = useState<FileList>();
	async function createProduct() {
		if (pickedCategorie == undefined) {
			throw new Error("not category");
		}
		if (!files) {
			throw new Error("error No Files");
		}
		let contentBase64 = await convertFileToBase64(files[0]);
		console.log(contentBase64);
		const commaIndex = contentBase64.indexOf(',');
		// Return the substring after the first comma
		contentBase64 = contentBase64.substring(commaIndex + 1).trim(); // Use trim() to remove leading spaces
		const imageFile: ImageFile = {
			fileName: files[0].name,
			contentBase64: contentBase64,
		}
		const product: PostProductBody = {
			title: name,
			price,
			category: pickedCategorie,
			imageFile: imageFile
		}
		await fetch(getProductsAPIBaseURL(), {
			body: JSON.stringify(product),
			method: "POST",
			headers: {
				'Content-Type': 'application/json', // Specify Content-Type
			}
		})
	}

	return (
		<div className='make-product'>
			<div>
				<h1>Make Product</h1>
				<h2>Title</h2>
				<input type='text' value={name} onChange={e => setName(e.target.value)}></input>
				<h2>Price</h2>
				<input type='number' value={price} onChange={e => setPrice(e.target.valueAsNumber)}></input>
				<input type='file' onChange={e => { if (e.target.files != null) { setFiles(e.target.files) } }}></input>
				<select onChange={category => {
					const cat = categories.find(c => c.title == category.target.value);
					setPickedCategorie(cat);
				}
				}>
					{categories.map(c => <option value={c.title}>{c.title}</option>)}
				</select>
				<button onClick={createProduct}>Create</button>
			</div>
		</div>
	)
}

