const axios = require('axios');

class Home {

    house = [];
    // constructor() {
    //     if (Home._instance) {

    //         return this.house
    //     }

    //     Home._instance = this;
    //     this.getJson()

    // }

    async getJson(orderFor, asc, page, limit) {
        // console.log('peticion axios');
        let houses = [];
        const resp = await axios.get(process.env.URL, {
            responseType: 'json'
        });
        const data = resp.data;

        for (const home of data) {
            const { City, Address, Link, Images, ...data } = home;
            houses.push({ City, Address, Link, Images });

        };

        // if (!orderFor) {


        // }
        return this.paginator(houses, page, limit);
        // return this.getSortedData(this.paginate(page, limit, this.house), orderFor, asc)
    };



    // getSortedData(data, prop, isAsc) {
    //     return data.sort((a, b) => {
    //         return (a[prop] < b[prop] ? -1 : 1) * (isAsc ? 1 : -1)
    //     });
    // }


    paginator(items, page, per_page) {

        const pagina = page || 1,
            limit = per_page || 10,
            offset = (pagina - 1) * limit,

            paginatedItems = items.slice(offset).slice(0, limit)

        return paginatedItems
    }

}


module.exports = Home;
