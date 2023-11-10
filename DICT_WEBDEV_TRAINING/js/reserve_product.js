items = {
    '1' : {
        item_code : 'CC101',
        item_name : 'Camera Kinembot',
        item_price : 'P 35, 000'
    },

    '2' : {
        item_code : 'LP102',
        item_name : 'Evo Laptop',
        item_price : 'P 25, 000'
    },
    
    '3' : {
        item_code : 'WT103',
        item_name : 'Pink Watch',
        item_price : 'P 10, 000'
    },
    
    '4' : {
        item_code : 'DT105',
        item_name : 'Desktop Set',
        item_price : 'P 25, 000'
    },
    
    '5' : {
        item_code : 'TB106',
        item_name : 'Tablet Black',
        item_price : 'P 15, 000'
    },

}

const ReserveProduct = (item_id) =>{
    var item_code_holder = document.getElementById('item_code')
    var item_name_holder = document.getElementById('item_name')
    var item_price_holder = document.getElementById('item_price')

    if (items.hasOwnProperty(item_id)) {
        // Set the values based on the item_id
        item_code_holder.value = items[item_id].item_code;
        item_name_holder.value = items[item_id].item_name;
        item_price_holder.value = items[item_id].item_price;

        // Return some indication of success
        return `Item with ID ${item_id} reserved.`;
    } else {
        // Return some indication of failure
        return `Item with ID ${item_id} not found.`;
    }
}

const reset = () => {
    document.getElementById('item_code').value = ''
    document.getElementById('item_name').value = ''
    document.getElementById('item_price').value = ''
    document.getElementById('customer_name').value = ''
    document.getElementById('email_address').value = ''

    alert('You cleared the reservation form')
}

const reserveNow = () =>{
    var customer_name = document.getElementById('customer_name').value;
    var email_address = document.getElementById('email_address').value;

    if (email_address.includes('@')){
        if (customer_name === ' '  || customer_name === '' || email_address === '' || email_address === ''){
            alert('Please Fill up the form')
        }
        else{
            alert('Thank you for your reservation!')
            reset()
        }
    }
    else{
        alert('Please enter a valid email')
    }


}