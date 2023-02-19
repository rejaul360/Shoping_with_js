let serial = 0;
document.getElementById('first_card').addEventListener('click', function(){
    serial += 1; 

    const productName =  document.getElementById('first_name').innerText;
    const productPrice =  document.getElementById('first_price').innerText;
    const productQtn =  document.getElementById('first_qtn').innerText;
    // console.log(productName, productPrice, productQtn);

    const total = parseInt(productPrice) * parseInt(productQtn);
    
    setDataWithCard(serial, productName, productPrice, productQtn, total)


})
document.getElementById('second_card').addEventListener('click', function(){
    serial += 1; 

    const productName =  document.getElementById('second_name').innerText;
    const productPrice =  document.getElementById('second_price').innerText;
    const productQtn =  document.getElementById('second_qtn').innerText;
    // console.log(productName, productPrice, productQtn);

    const total = parseInt(productPrice) + parseInt(productQtn);
    
    setDataWithCard(serial, productName, productPrice, productQtn, total)


})
document.getElementById('third_card').addEventListener('click', function(){
    serial += 1; 

    const productName =  document.getElementById('third_name').innerText;
    const productPrice =  document.getElementById('third_price').innerText;
    const productQtn =  document.getElementById('third_qtn').innerText;
    // console.log(productName, productPrice, productQtn);

    const total = parseInt(productPrice) * parseInt(productQtn);
    
    setDataWithCard(serial, productName, productPrice, productQtn, total)


})
document.getElementById('forth_card').addEventListener('click', function(){
    serial += 1; 

    const productName =  document.getElementById('forth_name').innerText;
    const productPrice =  document.getElementById('forth_price').innerText;
    const productQtn =  document.getElementById('forth_qtn').innerText;
    // console.log(productName, productPrice, productQtn);

    const total = parseInt(productPrice) * parseInt(productQtn);
    
    setDataWithCard(serial, productName, productPrice, productQtn, total)


})





function setDataWithCard(serial,productName, productPrice, productQtn, total) {
    const container = document.getElementById('table_container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${1}</td>
    <td>${productName}</td>
    <td>${productPrice}</td>
    <td>${productQtn}</td>
    <td class="font-bold">${total}</td>
    `;
    container.appendChild(tr);
    document.getElementById('total_product').innerText = serial;
}