fetch('http://localhost:3000/user',{
    method: 'GET',
    mode: 'cors',
    headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
}})
    .then(response => response.json())
    .then(data =>console.log(data))
    .catch(err => console.error(err));