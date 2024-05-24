const API_URL = 'https://svc-0-staging-usf.hotyon.com/search?apiKey=1fedccb4-262f-4e65-ae6d-d01e8024fe83';

document.getElementById('highest-price-btn').addEventListener('click', getProductWithHighestPrice);
document.getElementById('total-price-btn').addEventListener('click', getTotalPriceOfTestBundle);
document.getElementById('sold-out-btn').addEventListener('click', getSoldOutProducts);
document.getElementById('option-btn').addEventListener('click', getProductsByOption);
document.getElementById('price-range-btn').addEventListener('click', getProductsInPriceRange);

// Bài 1
async function getProductWithHighestPrice() {
    const res = await fetch(API_URL);
    const responseData = await res.json();

    const items = responseData.data.items;

    let maxPrice = -1;
    let productWithMaxPrice = null;

    items.forEach(item => {
        item.variants.forEach(variant => {
            if (variant.price > maxPrice) {
                maxPrice = variant.price;
                productWithMaxPrice = { ...item, variant };
            }
        });
    });

    const resultDiv = document.getElementById('highest-price');
    if (productWithMaxPrice) {
        resultDiv.innerHTML = `
            <p>${productWithMaxPrice.title}</p>
            <p>Price: $${productWithMaxPrice.variant.price} USD</p>
            <p>Options:</p>
            <ul>
                ${productWithMaxPrice.variant.options.map(option => `<li>${option.name} - ${option.values}</li>`).join('')}
            </ul>
        `;
    } else {
        resultDiv.innerHTML = "Không tìm thấy sản phẩm nào.";
    }
}