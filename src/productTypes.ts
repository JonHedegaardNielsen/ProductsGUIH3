export type Product = {
	title: string,
	price: number,
	imageFile?: ImageFile,
	category: Category,
	productId: number,
}

export type Category = {
	title: string,
	categoryId: number
}

export type ImageFile = {
	fileName: string,
	contentBase64: string
}

export type PostProductBody = {
	title: string,
	category: Category,
	price: number,
	imageFile: ImageFile
}

export type GetProductBody = {
	productId: number,
	title: string,
	category: Category,
	price: number,
	imageFile: ImageFile
}
