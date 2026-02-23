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
// export type ProductSendBody = {
// 	name: string,
// 	price: number,
// 	formData: FormData,
// }

export type ImageFile = {
	fileName: string,
	contentBase64: string
}

export type PostProductBody = {
	product: Product,
	imageFile?: ImageFile
}
