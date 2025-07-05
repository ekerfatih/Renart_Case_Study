import express from 'express';
import {calculateProductPrices} from './DataAccessLayer.js';
import cors from 'cors';
const app = express();
app.use(cors())

app.get('/api/products', async (req, res) => {
    try {
        const products = await calculateProductPrices();
        res.json({products});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

app.get('/', (req, res) => {
    res.send('Backend is running!');
});


app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
