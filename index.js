let url = `https://rickandmortyapi.com/api/character/`


const array = []
const size = 826
for (let i = 0; i < size; i++) {
    array.push(i+1)
}

const sla = []

for (i = 0; i < array.length; i++) {
    sla.push(`${url}${array[i]}`) 
       
}
console.log(sla)


// function async qualquer(parametro){
//     const arr = []
//     for (let i = 0; i < parametro.length; i++){
//       let response = await (axios.get(url)).data
//       arr.push(response)
//     }
//     return arr
//   }


// await qualquer()
   
// function requestApi() {
//     $.ajax({url: url,
//         success: function (result) {
//             return sendApi(result)
//         }
//     })
// }

requestApi()



function sendApi(obj) {

    let imagens = obj.image
    let nome = obj.name
    let status = obj.status
    let specie = obj.species
    let type = obj.type
    let location = obj.location.name
    let gender = obj.gender
    let origin = obj.origin.name
    let anoCriação = obj.created.substring(0, 10)

    // if(gender == "unknown") {
    //     gender = "Desconhecido"
    // }  else if (origin == "unknown") {
    //     origin =  "Desconhecido"
    // } else if (nome == "unknown") {
    //     nome = "Desconhecido"
    // } else if (status == "unknown") {
    //     status = "Desconhecido"
    // } else if (specie == "unknown") {
    //     specie = "Desconhecido"
    // } else if (type == "unknown") {
    //     type = "Desconhecido"
    // } else if (location == "unknown") {
    //     location = "Desconhecido"
    // } else if (anoCriação == "unknown") {
    //     anoCriação = "Desconhecido"
    // } 
    
    
    
     
    
    
    
    
    
   

    
    $("#umNome").html(`Nome:</br>  ${nome}`)
    $("#imagem").attr("src", imagens)
    $("#status").html(`${status} - ${specie}`)
    $("#type").html(type)
    $("#gender").html(`Gênero:</br> ${gender}`)
    $("#origin").html(`Origen: </br> ${origin}`)
    $("#location").html(`Localização: </br> ${location}`)
    $("#created").html(`Primeira aparição: </br> ${anoCriação}`)
}





