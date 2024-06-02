const API_URL = 'https://svc-0-staging-usf.hotyon.com/search?apiKey=1fedccb4-262f-4e65-ae6d-d01e8024fe83';
let products = [];

document.getElementById('load-products-btn').addEventListener('click', async () => {
    const button = document.getElementById('load-products-btn');
    button.textContent = 'Đang tải sản phẩm ...';
    try {
        const res = await fetch(API_URL);
        const { data } = await res.json(); 
        products = data.items;
        button.textContent = `Đã tải xong ${products.length} sản phẩm`;
        document.getElementById('show-products-btn').style.display = 'block';
        document.getElementById('search-container').style.display = 'block';
    } catch (error) {
        button.textContent = 'Lỗi tải sản phẩm';
        console.error(error);
    }
});

document.getElementById('show-products-btn').addEventListener('click', () => {
    const productList = document.getElementById('product-list');
    productList.innerHTML = products.map(product => {
        const discountVariant = product.variants.find(variant => variant.compareAtPrice > variant.price);
        const variant = discountVariant || product.variants[0];
        const discountText = discountVariant ? `Discount: ${((variant.compareAtPrice - variant.price) / variant.compareAtPrice * 100).toFixed(2)}%` : '';
        const optionsText = product.options.map(option => `${option.name}: ${option.values.join(', ')}`).join('<br>');
        return `<div>
                    <h4>${product.title}</h4>
                    <p>${optionsText}</p>
                    <p>Price: ${variant.price}</p>
                    <p>${discountText}</p>
                </div>`;
    }).join('');
});

function debounce(callback, delay = 300) {
    let timer;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback.apply(this, arguments);
        }, delay);
    };
}

document.getElementById('search-input').addEventListener('input', debounce(async (event) => {
    const query = event.target.value.trim();
    const searchResult = document.getElementById('search-result');

    if (query === '') {
        searchResult.textContent = 'Vui lòng nhập từ khoá cần tìm';
        return;
    }

    searchResult.textContent = 'Đang tìm kiếm...';

    try {
        const res = await fetch(`${API_URL}&q=${query}`);
        const { data } = await res.json();
        const searchProducts = data.items;

        if (searchProducts.length === 0) {
            searchResult.textContent = 'Không có sản phẩm nào khớp với từ khoá cần tìm';
        } else {
            searchResult.innerHTML = searchProducts.map(product => {
                const discountVariant = product.variants.find(variant => variant.discount > 0);
                const variant = discountVariant || product.variants[0];
                const discountText = variant.discount ? `Discount: ${variant.discount}%` : '';
                const optionsText = product.options.map(option => `${option.name}: ${option.values.join(', ')}`).join('<br>');
                return `<div>
                            <h4>${product.title}</h4>
                            <p>${optionsText}</p>
                            <p>Price: ${variant.price}</p>
                            <p>${discountText}</p>
                        </div>`;
            }).join('');
        }
    } catch (error) {
        searchResult.textContent = 'Lỗi tìm kiếm sản phẩm';
        console.error(error);
    }
}));
