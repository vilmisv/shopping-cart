document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem('cart');

    if (savedData) {
    cart = JSON.parse(savedData); // /JSON.parse konvertuoja reikmses i stringa ir pan is tekstines i objekta
    item1Render();
    plusOne(totalCount);
    item2Render();
    plusOne(totalCount);
    item3Render();
    plusOne(totalCount);
    item4Render();
    plusOne(totalCount);
    };

});

document.querySelector('.cart-icon').addEventListener('click', () => {  // paspaudus ant cart iconos isoka langas, kuriame bus atvaizduojamas 'pirkiniu maiselis'
    document.querySelector('.window').classList.toggle('active');
    document.querySelector('.body-container').classList.toggle('body-black');
});

document.querySelector('.x-exit').addEventListener('click', () => { //cia ant isokancio lango X isjungimo langas
    document.querySelector('.window').classList.toggle('active');
});


let cart = [];
const cartWindowOutput = document.querySelector('.cart-window');
const mainItems = document.querySelector('.main');
const totalCount = document.querySelector('.total-items');
const totalSum = document.querySelector('.total-sum');
const buttonWindow = document.querySelector('.button-window');
const windowsTotalSum = document.querySelector('.total-sum-window');

function plusOne (element) {
    element.textContent = Number(element.textContent) + 1; //funkcija kur kai paspaudi add to cart prie 0 items kyla su kiekvienos prekes pridejimu prie cart
}

function minusOne (element) {
    element.textContent = Number(element.textContent) -1; // funkcija, kuri veikia kaip ir plus one tik atima, jeigu vartotojas is 'pirkiniu maiselio' removina preke
}

let products = {
    
    item1: {
        name: 'Blue T-shirt',
        price: 25,
        size: ['S', 'M', 'L']
    },
    item2: {
        name: 'White T-shirt',
        price: 27,
        size: ['S', 'M', 'L']
    },
    item3: {
        name: 'Red T-shirt',
        price: 23,
        size: ['S', 'M', 'L']
    },
    item4: {
        name: 'Black T-shirt',
        price: 21,
        size: ['S', 'M', 'L']
    },

};


// item 1
const item1Nametxt = document.querySelector('#item-name-1'); // cia paselektinu html vieta
item1Nametxt.textContent = JSON.stringify(products.item1.name); // ir atvaizduoju ka noriu is objekto i html
const item1price = document.querySelector('#item1-price');
item1price.textContent = products.item1.price;

//item 2 
const item2Name = document.querySelector('#item-name-2');
item2Name.textContent = JSON.stringify(products.item2.name);
const item2price = document.querySelector('#item2-price');
item2price.textContent = products.item2.price;


//item 3 
const item3Name = document.querySelector('#item-name-3');
item3Name.textContent = JSON.stringify(products.item3.name);
const item3price = document.querySelector('#item3-price');;
item3price.textContent = products.item3.price;

//item 4 
const item4Name = document.querySelector('#item-name-4');
item4Name.textContent = JSON.stringify(products.item4.name);
const item4price = document.querySelector('#item4-price');;
item4price.textContent = products.item4.price;

function item1Render () {
 // funkcija kuri renderina viska i pirkiniu maiseli 

    const item1Div = document.createElement('div');
    item1Div.className = 'item-div';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Remove';
    deleteBtn.className = 'remove-btn';

    deleteBtn.addEventListener('click', event => { // remove buttonas 
        item1Div.remove();
        minusOne(totalCount);
        totalSum.textContent = Number(totalSum.textContent) - products.item1.price; // kai paspaudzia remove ant prekes tai ir kaina minusuojasi navi bar lange
        windowsTotalSum.textContent = Number(windowsTotalSum.textContent) - products.item1.price; // kai paspaudzia remove ant prekes tai ir kaina minusuojasi cia isokanciam langa kur total price
    });


    totalSum.textContent = Number(totalSum.textContent) + products.item1.price; // kai paspaudzia add to cart dideja suma  navi bar lange
    windowsTotalSum.textContent = Number(windowsTotalSum.textContent) + products.item1.price;     // kai paspaudzia add to cart dideja suma isokancia langa total price 

    [products.item1.name, products.item1.price + '$'].forEach(text => { //for each praeina pro objektus ir renderina teksta i html
        const item1Text = document.createElement('p');

        item1Text.className = 'itemText';
        item1Text.textContent = JSON.stringify(text);
        item1Div.appendChild(item1Text);
    });

    document.querySelector('.order-btn').addEventListener('click', () => { // kai paspaudzia buy now viskas issitrina
        item1Div.remove();
        windowsTotalSum.textContent = '0';
        totalSum.textContent = '0';
        totalCount.textContent = '0';
    })
    const selectItem1 = document.getElementById('item1-size').value; // paselektinu select size ir atvaizduoju 'pirkiniu maiselyje'
    const selectItemTxt = document.createElement('p');
    selectItemTxt.textContent = `size: ${selectItem1} `;
 

    item1Div.appendChild(selectItemTxt); // viska appendinu i html 
    cart.push(item1Div.textContent);
    item1Div.appendChild(deleteBtn);
    cartWindowOutput.appendChild(item1Div);
    
    console.log(cart);        
}

function item2Render () { // viskas tas pats vyksta kas ir item1render()

    const item1Div = document.createElement('div');
    item1Div.className = 'item-div';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Remove';
    deleteBtn.className = 'remove-btn';

    deleteBtn.addEventListener('click', event => {
        item1Div.remove();
        minusOne(totalCount);
        totalSum.textContent = Number(totalSum.textContent) - products.item2.price;
        windowsTotalSum.textContent = Number(windowsTotalSum.textContent) - products.item2.price;

    })

    totalSum.textContent = Number(totalSum.textContent) + products.item2.price; 
    windowsTotalSum.textContent = Number(windowsTotalSum.textContent) + products.item2.price;

    [products.item2.name, products.item2.price + '$'].forEach(text => {
        const item1Text = document.createElement('p');
        item1Text.className = 'itemText';
        item1Text.textContent = JSON.stringify(text);
        item1Div.appendChild(item1Text); 
    });

    document.querySelector('.order-btn').addEventListener('click', () => {
        item1Div.remove();
        windowsTotalSum.textContent = '0';
        totalSum.textContent = '0';
        totalCount.textContent = '0';
    })

    const selectItem2 = document.getElementById('item2-size').value;
    const selectItemTxt = document.createElement('p');
    selectItemTxt.textContent = `size: ${selectItem2} `;
 

    item1Div.appendChild(selectItemTxt);
    cart.push(item1Div.textContent);

    item1Div.appendChild(deleteBtn);
    cartWindowOutput.appendChild(item1Div);   
    console.log(cart);    
}

function item3Render () { // viskas tas pats vyksta kas ir item1render()

    const item1Div = document.createElement('div');
    item1Div.className = 'item-div';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Remove';
    deleteBtn.className = 'remove-btn';

    deleteBtn.addEventListener('click', event => {
        item1Div.remove();
        minusOne(totalCount);
        totalSum.textContent = Number(totalSum.textContent) - products.item3.price;
        windowsTotalSum.textContent = Number(windowsTotalSum.textContent) - products.item3.price;  

    })

    totalSum.textContent = Number(totalSum.textContent) + products.item3.price;
    windowsTotalSum.textContent = Number(windowsTotalSum.textContent) + products.item3.price;  
  

    [products.item3.name, products.item3.price + '$'].forEach(text => {
        const item1Text = document.createElement('p');
        item1Text.className = 'itemText';
        item1Text.textContent = JSON.stringify(text);
        item1Div.appendChild(item1Text);
    });

    document.querySelector('.order-btn').addEventListener('click', () => {
        item1Div.remove();
        windowsTotalSum.textContent = '0';
        totalSum.textContent = '0';
        totalCount.textContent = '0';
    })

    const selectItem3 = document.getElementById('item3-size').value;
    const selectItemTxt = document.createElement('p');
    selectItemTxt.textContent = `size: ${selectItem3} `;
 
    item1Div.appendChild(selectItemTxt);
    cart.push(item1Div.textContent);

    item1Div.appendChild(deleteBtn);
    cartWindowOutput.appendChild(item1Div); 
    console.log(cart);       
}

function item4Render () { // viskas tas pats vyksta kas ir item1render()

    const item1Div = document.createElement('div');
    item1Div.className = 'item-div';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Remove';
    deleteBtn.className = 'remove-btn';

    deleteBtn.addEventListener('click', event => {
        item1Div.remove();
        minusOne(totalCount);
        totalSum.textContent = Number(totalSum.textContent) - products.item4.price;
        windowsTotalSum.textContent = Number(windowsTotalSum.textContent) - products.item4.price;

    })

    totalSum.textContent = Number(totalSum.textContent) + products.item4.price;
    windowsTotalSum.textContent = Number(windowsTotalSum.textContent) + products.item4.price;
  

    [products.item4.name, products.item4.price + '$'].forEach(text => {
        const item1Text = document.createElement('p');
        item1Text.className = 'itemText';
        item1Text.textContent = JSON.stringify(text);
        item1Div.appendChild(item1Text);
    });

    document.querySelector('.order-btn').addEventListener('click', () => {
        item1Div.remove();
        windowsTotalSum.textContent = '0';
        totalSum.textContent = '0';
        totalCount.textContent = '0';
    })

    const selectItem4 = document.getElementById('item4-size').value;
    const selectItemTxt = document.createElement('p');
    selectItemTxt.textContent = `size: ${selectItem4} `;
 
    item1Div.appendChild(selectItemTxt);
    cart.push(item1Div.textContent);

    item1Div.appendChild(deleteBtn);
    cartWindowOutput.appendChild(item1Div);   
    console.log(cart);        
}




mainItems.addEventListener('click', event => {


    if (event.target.tagName = 'BUTTON') {
        
        switch (event.target.name) {
            case 'item1':
                item1Render();
                plusOne(totalCount); // kad paspaudus kiltu nuo 0 item
                
                break;
            case 'item2':
                item2Render();
                plusOne(totalCount);

                break;
            case 'item3':
                item3Render();
                plusOne(totalCount);    
                        
                break;     
            case 'item4':
                item4Render();
                plusOne(totalCount);  
                break;
        
            default:
                break;
        }
    }

    localStorage.setItem('cart', JSON.stringify(cart));

})

