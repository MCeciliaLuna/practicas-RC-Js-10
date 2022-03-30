console.log('Javascript 10')

// const getData = () => {
//   fetch('https://pokeapi.co/api/v2/pokemon')
//   .then(resp => resp.json())
//   .then(json => console.log(json.results))
// }

const getData = async() => {
  const resp = await fetch('https://pokeapi.co/api/v2/pokemon')
  const json = await resp.json()
  return json.results
}

getData()

const createData = async() => {
  const infoPokeApi = await getData()

  console.log(infoPokeApi)
}


const userJson = {
  "nombre":"Nicolás",
  "edad":27
}

const userObj = JSON.stringify(userJson)
console.log(userObj)

 const usuario = {
     "id": "012345888",
     "username": "carlosrivera",
     "password": "fkldfn4r09330adafnanf9843fbcdkjdkks",
     "data": {
        "name": "Carlos Rivera",
        "email": "example@gmail.com",
        "city": "Tucumán",
        "country": "ARG"
      }
 }

 const usuarioJson = JSON.stringify(usuario)
 console.log(usuarioJson)