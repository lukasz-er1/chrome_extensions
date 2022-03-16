document.addEventListener('DOMContentLoaded', async () => {
    const price_usd = document.getElementById('price');
    const price_pln = document.getElementById('pln');
    const url = 'https://blockchain.info/ticker';

    try {
        const res = await fetch(url);
        const coins = await res.json();
        let btc_usd = ""
        let pln = ""
        for (var key in coins) {
            if (key == "USD") {
                btc_usd += coins[key]["buy"] + " USD"
            }
            if (key == "PLN") {
                pln += coins[key]["buy"] + " PLN"
            }
        }
        price_usd.innerHTML = btc_usd
        price_pln.innerHTML = pln
    } catch (err) {
        console.error(err);
    }
});
