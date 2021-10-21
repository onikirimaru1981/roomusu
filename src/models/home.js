	const axios = require('axios');

	class Home {

		arrHomes = [];

		constructor() {}

		async init() {


			try {

				const resp = await axios.get(process.env.URL, {
					responseType: 'json'
				});
				const dataResp = resp.data;


				for (const home of dataResp) {
					const {
						City,
						Address,
						Link,
						Images,
						Title
					} = home;
					this.arrHomes.push({
						City,
						Address,
						Link,
						Images,
						Title
					});
				};

			} catch (error) {
				res.status(401).json({

					msg: `Error en peticion,pongase en contacto con el administrador ${error}`
				});

			};


		}


		getJson(orderFor, asc = 1, page, limit) { // al definir por defecto el asc,evitamos el caso 


			try {
				if (!orderFor) {
					return this.paginator(this.arrHomes, page, limit);
				}

				if (asc == 1) {

					return this.paginator(this.sort_by_key(this.arrHomes, orderFor), page, limit);
				} else {

					return this.paginator(this.sort_by_key(this.arrHomes, orderFor).reverse(), page, limit);
				};


			} catch (error) {
				res.status(401).json({

					msg: `Error en peticion,pongase en contacto con el administrador ${error}`
				});

			};



		}

		sort_by_key(array, key) {
			return array.sort((a, b) => {
				let x = a[key];
				let y = b[key]; // a[key]=a[orderfor]
				return ((x < y) ? -1 : ((x > y) ? 1 : 0));
			});
		}


		paginator(items, page, per_page) {

			const pagina = page || 1, // Valores por defecto de otra manera
				limit = per_page || 10,
				offset = (pagina - 1) * limit,

				paginatedItems = items.slice(offset).slice(0, limit)

			return paginatedItems
		}

	};


	module.exports = new Home();