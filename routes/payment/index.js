require('dotenv');
const request = require('request');
const { CLIENT, SECRET } = process.env;

const PAYPAL_API = 'https://api-m.sandbox.paypal.com';
const auth = {user: CLIENT, pass: SECRET};

const createPayment = ( req, res ) =>
{
    const body =
    {
        intent: 'CAPTURE',
        purchase_units:
        [
            {
                amount:
                {
                    currency_code: 'USD',
                    value: '150'
                }
            }
        ],
        application_context:
        {
            brand_name: 'Padel Field',
            landing_page: 'NO_PREFERENCE',
            user_action: 'PAY_NOW',
            return_url: 'http://localhost:3000/payment/executePayment',
            cancel_url: 'http://localhost:5173/home'
        }
    };

    request.post(`${PAYPAL_API}/v2/checkout/orders`,{
        auth,
        body,
        json: true
    }, (_err, response) => {
        res.send(response.body)
    })
}

const executePayment = (req, res) =>
{
    const token = req.query.token;

    request.post(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`,
    {
        auth,
        body: {},
        json: true
    }, (_err, response) =>
    {
        res.send(response.body);
    })
}

module.exports = async function (fastify, opts)
{
    fastify.post('/createPayment', createPayment);
    fastify.get('/executePayment', executePayment);
}