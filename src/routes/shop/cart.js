import {readable, writable} from "svelte/store";

export const products = readable([
		{id: 1, name: "Táo", image: "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png", price: 35000, quantity: 1},
		{id: 2, name: "Cam", image: "https://5.imimg.com/data5/VN/YP/MY-33296037/orange-600x600-500x500.jpg", price: 50000, quantity: 1},
		{id: 3, name: "Nho", image: "https://www.aicr.org/wp-content/uploads/2020/01/shutterstock_533487490-640x462.jpg", price: 120000, quantity: 1},
		{id: 4, name: "Chuối", image: "https://eneright.vn/wp-content/uploads/2018/04/nhung-loai-trai-cay-tot-cho-nguoi-tap-the-hinh.jpg", price: 35000, quantity: 1},
		{id: 5, name: "Đu đủ", image: "https://suckhoedoisong.qltns.mediacdn.vn/2014/2-1b92c9hoaqua2-1409278912857.jpg", price: 20000, quantity: 1},
		{id: 6, name: "Bơ", image: "https://i.vietgiaitri.com/2020/9/28/anh-nhung-loai-trai-cay-ma-nguoi-dang-giam-can-nen-tranh-9fa-5258575.jpg", price: 85000, quantity: 1},
		{id: 7, name: "Thơm", image: "https://nattapamekk.files.wordpress.com/2015/07/tnews_1428917183_75751.jpg", price: 15000, quantity: 1},
		{id: 8, name: "Bưởi", image: "https://cdn.vatgia.com/pictures/thumb/418x418/2011/01/bmu1294216361.jpg", price: 55000, quantity: 1},
		{id: 9, name: "Dưa hấu", image: "https://hinh365.com/wp-content/uploads/2020/06/thu-vien-anh-dep-ve-qua-dua-hau-voi-khoan-100-619-tam-anh-chat-luong-cuc-cao.jpg", price: 12000, quantity: 1},
		{id: 10, name: "Sầu riêng", image: "https://hinh365.com/wp-content/uploads/2020/06/cao-vtai-ngay-hinh-anh-chat-luong-e-qua-sau-rieng-voi-khoan-9-944-hinh-anh-cuc-dep-de-ban-chon-lua.jpg", price: 175000, quantity: 1},
		{id: 11, name: "Mận", image: "https://dt-pro.vn/thumb/568x414/1/upload/product/man-an-phuoc.jpg", price: 25000, quantity: 1},
		{id: 12, name: "Dưa lưới", image: "https://storage.googleapis.com/ifarmer-vn/c332f3cbe09b4a1ea546db5ab410b33a/qua-dua-vang.jpg", price: 75000, quantity: 1},
		{id: 13, name: "Xoài", image: "https://o.rada.vn/data/image/2020/01/07/ta-qua-xoai.jpg", price: 35000, quantity: 1},
		{id: 14, name: "Mít", image: "https://vanmaubathu.com/wp-content/uploads/2020/09/unnamed-file-2.png", price: 50000, quantity: 1},
		{id: 15, name: "Chôm chôm", image: "https://stockdep.net/files/images/27747706.jpg", price: 35000, quantity: 1},
	])
export const cart = writable([])
export const address = writable({
		name: "",
		email: "",
		phone: "",
		street: "",
		city: "",
		state: "",
		pin: "",
	})