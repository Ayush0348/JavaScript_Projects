const countValue = document.querySelector('#Counter');

const increment = () => {
    //get value from html
    let value = parseInt(countValue.innerText);

    //update value
    value = value + 1;

    //set value into html
    countValue.innerText = value;
};

const decrement = () => {
    //get value from html
    let value = parseInt(countValue.innerText);

    //update value
    value = value - 1;

    //set value into html
    countValue.innerText = value;
};