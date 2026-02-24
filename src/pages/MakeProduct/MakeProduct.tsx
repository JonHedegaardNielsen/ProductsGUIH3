import { useEffect, useState } from 'react'
import './MakeProduct.css'
import type { ImageFile, PostProductBody } from '../../productTypes';

export const MakeProduct = () => {
	useEffect(() => console.log('makeProduck'));
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
			category: {
				title: 'misc',
				categoryId: 0,
			},
			imageFile: imageFile
		}

		console.log(JSON.stringify(product, null, 2));
		try {
			fetch('http://localhost:5035/api/Product', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json', // Specify Content-Type
				},
				body: JSON.stringify(product),
			})
		}
		catch (e) {
			console.log(e)
		}
	}

	return (
		<div className='make-product'>
			<input type='text' value={name} onChange={e => setName(e.target.value)}></input>
			<input type='number' value={price} onChange={e => setPrice(e.target.valueAsNumber)}></input>
			<input type='file' onChange={e => { if (e.target.files != null) { setFiles(e.target.files) } }}></input>
			<button onClick={createProduct}>Create</button>
		</div>
	)
}

