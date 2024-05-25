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

// Bài 2
async function getTotalPriceOfTestBundle() {
    const res = await fetch(API_URL);
    const responseData = await res.json();
    const items = responseData.data.items;

    const testBundle = items.find(item => item.title === "Test bundle");

    if (testBundle) {
        const totalPrice = testBundle.variants.reduce((acc, cur) => acc + cur.price, 0)

        const resultDiv = document.getElementById('total-price')
        resultDiv.innerHTML = `
            <p><strong>Product:</strong> ${testBundle.title}</p>
            <p><strong>Variants:</strong> ${testBundle.variants.length}</p>
            <p><strong>Total price:</strong> $${totalPrice} USD</p>
        `;
    } else {
        const resultDiv = document.getElementById('total-price');
        resultDiv.textContent = "Không tìm thấy sản phẩm 'Test bundle'.";
    }
}

// Bài 3
async function getSoldOutProducts() {
    const res = await fetch(API_URL)
    const responseData = await res.json()
    const items = responseData.data.items

    const soldOutProduct = items.filter(item => item.variants.some(variant => variant.available === 0))

    const resultDiv = document.getElementById('sold-out-products')
    resultDiv.innerHTML = `
        <ul>
            ${soldOutProduct.map(product => `<li>${product.title}</li>`).join('')}
        </ul>
    `
}

// Bài 4
async function getProductsByOption() {
    const optionName = document.getElementById('option-name').value;
    const optionValue = document.getElementById('option-value').value;

    const res = await fetch(API_URL);
    const responseData = await res.json();
    const items = responseData.data.items;

    const productsWithOption = items.filter(item =>
        item.variants.some(variant =>
            variant.options.some((optionIndex, index) =>
                item.options[index].name === optionName && item.options[index].values[optionIndex] === optionValue
            )
        )
    );

    const resultDiv = document.getElementById('option-products');
    resultDiv.innerHTML = '';

    productsWithOption.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `<h4>${product.title}</h4>`;

        const variantsList = document.createElement('ul');
        product.variants.forEach(variant => {
            if (variant.options.some((optionIndex, index) =>
                product.options[index].name === optionName && product.options[index].values[optionIndex] === optionValue)) {

                const variantDetails = variant.options.map((optionIndex, index) => {
                    const optName = product.options[index].name;
                    const optValue = product.options[index].values[optionIndex];
                    return `${optName}: ${optValue}`;
                });

                variantDetails.push(`Price: $${variant.price} USD`);
                const variantLi = document.createElement('li');
                variantLi.textContent = variantDetails.join(' | ');
                variantsList.appendChild(variantLi);
            }
        });

        productDiv.appendChild(variantsList);
        resultDiv.appendChild(productDiv);
    });
}

// Bài 5
async function getProductsInPriceRange() {
    const minPrice = parseFloat(document.getElementById('min-price').value);
    const maxPrice = parseFloat(document.getElementById('max-price').value);

    const res = await fetch(API_URL);
    const responseData = await res.json();
    const items = responseData.data.items;

    const productsInPriceRange = items.filter(item => item.variants.some(variant => variant.price >= minPrice && variant.price <= maxPrice));

    const resultDiv = document.getElementById('price-range-products');
    resultDiv.innerHTML = '';

    productsInPriceRange.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `<h4>${product.title}</h4>`;

        const variantsList = document.createElement('ul');
        product.variants.forEach(variant => {
            if (variant.price >= minPrice && variant.price <= maxPrice) {
                const variantDetails = [];
                variant.options.forEach((optionIndex, index) => {
                    const optionName = product.options[index].name;
                    const optionValue = product.options[index].values[optionIndex];
                    variantDetails.push(`${optionName}: ${optionValue}`);
                })

                variantDetails.push(`Price: $${variant.price} USD`);
                const variantLi = document.createElement('li');
                variantLi.textContent = variantDetails.join(' | ');
                variantsList.appendChild(variantLi);
            }
        })

        productDiv.appendChild(variantsList);
        resultDiv.appendChild(productDiv);
    })
}