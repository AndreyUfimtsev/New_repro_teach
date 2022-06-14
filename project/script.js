const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
];

const renderGoodsItem = ({ title = '', price = 0 }) => `
    <div class="goods-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6CrJSeF81whn5Tbp9Ga-SkdPE_uoeubH7fJvK7Tlsicfjq-o0V5AQl5Q24ABSkiZ6kbk&usqp=CAU">
      <h3>${title}</h3>
      <p>Price: ${price}$</p>
    </div>
  `;

const renderGoodsList = (list = []) => {
  let goodsList = list.map(item => renderGoodsItem(item));
  document.querySelector('.goods-list').innerHTML = goodsList.join('');
}

renderGoodsList(goods);

const basketEl = document.querySelector('.basket__main');
document.querySelector('.cart-button').addEventListener('click', () => {
  basketEl.classList.toggle('hidden');
});