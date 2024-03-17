var updateBtns = document.getElementsByClassName('update-cart')

for(var i = 0; i < updateBtns.length; i++) {
    updateBtns[i].addEventListener('click', function() {
        var productId = this.dataset.product
        var action = this.dataset.action
        console.log('productId', productId, 'action', action)
        
        // user is not working
        console.log('USER: ', user)
        if(user == 'AnonymousUser'){
            addCookieItem(productId, action)
        } else{
            updateUserOrder(productId, action)
        }
    })
}

function addCookieItem(productId, action) {
    console.log('user not logged in...')
    if(action == 'add') {
        if(cart[productId] == undefined) {
            cart[productId] = {
                'quantity' : 1
            } 
        } else {
                cart[productId]['quantity'] + 1
            }
        }
    if(action == 'remove') {
        cart[productId]['quantity'] -= 1

        if(cart[productId]['quantity'] <= 0) {
            console.log('remove item')
            delete cart[productId]
        }
    }
    console.log('cart: ', cart)
    document.cookie = 'cart=' + JSON.stringify(cart) + ";domain=;path=/"
}

// update item and fetch data to the backend

function updateUserOrder(productId, action) {
    console.log('User is logged in, sending data...');

    var url = '/update_item/';

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        },
        body: JSON.stringify({'productId': productId, 'action': action})
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Received data:', data);
        location.reload()
        // Handle the received data as needed
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        // Handle errors here, e.g., display an error message to the user
    });
}


