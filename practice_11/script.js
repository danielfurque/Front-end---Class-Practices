const URL_API = 'https://jsonplaceholder.typicode.com'

const fetchUsers = async (id) => {
    const response = await fetch(`${URL_API}/users/1`)
    const data = await response.json()

    const userinfoHTML = document.getElementById('user-info')

    userinfoHTML.innerHTML = `
    <h2Z>Username: ${data.name}</h2>
    <span>Email: ${data.email}</span><br>
    <label>Phone: <input type="email" value="${data.phone}" readonly></label>

    `
}
fetchUsers()
