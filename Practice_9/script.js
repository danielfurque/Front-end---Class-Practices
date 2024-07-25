/* const user = {
    username: 'pepe',
    password: '****1234',
    address: 'calle falsa 123',
    email:  'pepe@gmail.com'    
}


const caja = document.getElementById('caja');

caja.innerHTML = `
    <h2>Username: ${user.username}</h2>
    <span>Password: ${user.password}</span><br>
    <label>Address: <input type="text" value="${user.address}" readonly></label><br>
    <label>Email: <input type="email" value="${user.email}" readonly></label>
`; */


const users = [{
    username: 'pepe',
    password: '****1234',
    address: 'calle falsa 123',
    email:  'pepe@gmail.com'    
},  
{
    username: 'juan',           
    password: '****146645',
    address: 'calle falsa 456',
    email:  'juan@gmail.com'
},
{
    username: 'maria',           
    password: '****124124',
    address: 'calle falsa 789',
    email:  'maria@gmail.com'
}
]

const listaHistorial = document.querySelector('.caja');

let listusers = ''
for(user of users){
 listusers += `
    <h2>Username: ${user.username}</h2>
    <span>Password: ${user.password}</span><br>
    <label>Address: <input type="text" value="${user.address}" readonly></label><br>
    <label>Email: <input type="email" value="${user.email}" readonly></label>
`
}

listaHistorial.innerHTML = listusers