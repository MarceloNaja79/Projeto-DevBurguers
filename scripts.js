const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const veganAll = document.querySelector('.vegan-all')

function formatCurrency(value) {
const newValue = value.toLocaleString('pt-br', {
    style: 'currency', currency: 'BRL',
})

return newValue

}

function showAll(productsArray) {
    let myLi = ''

    productsArray.forEach((product) => {
        myLi += `
<li>
    <img src= ${product.src}>
    <p>${product.name}</p> 
    <p class="item-price">R$ ${formatCurrency(product.price)}</p>
</li>
`
    })

    list.innerHTML = myLi

}

function mapAllItems() {
    const newPrices = menuOptions.map((products) => ({
        ...products,
        price: products.price * 0.9, //para dar os 10% de desconto em todos os lanches
    }))

    showAll(newPrices)
}

function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `
<li> 
<p>O Valor Total dos Itens são: R$ ${formatCurrency(totalValue)}</p>
</li>
`
}

function veganItems() {
const produtosVegan = menuOptions.filter((product) => product.vegan)

showAll(produtosVegan)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
sumAll.addEventListener('click', sumAllItems)
veganAll.addEventListener('click', veganItems)