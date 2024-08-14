const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express();
const PORT = 3000;


//fun principal
async function scrapeLaptops(page = 1, lenovoLaptops = []) {
    const url = `https://webscraper.io/test-sites/e-commerce/static/computers/laptops?page=${page}`;

    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        let hasMoreLaptops = false; // checar se há mais laptops

        $('.thumbnail').each((index, element) => {
            const name = $(element).find('.title').text();
            const price = parseFloat($(element).find('.price').text().replace('$', ''));
            const description = $(element).find('.description').text();
            const reviews = $(element).find('.ratings p').text();

            if (name.toLowerCase().includes('lenovo')) {
                lenovoLaptops.push({
                    name,
                    price,
                    description,
                    reviews,
                });
            }

            hasMoreLaptops = true; 
        });

        // paginação de laptos encontrados 
        if (hasMoreLaptops && $('.pagination').length) {
            return await scrapeLaptops(page + 1, lenovoLaptops);
        }

        //lista de laptops por preço
        lenovoLaptops.sort((a, b) => a.price - b.price);

        return lenovoLaptops;

    } catch (error) {
        console.error(error);
      
    }
}

// retornar os dados em formato JSON
app.get('/laptops/lenovo', async (req, res) => {
    const lenovoLaptops = await scrapeLaptops();
    res.json(lenovoLaptops);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
