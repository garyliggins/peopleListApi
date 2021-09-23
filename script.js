const url = 'http://www.discovery.com/shared/test1.json';
const localUrl = 'people.json'
const btn = document.querySelector('.btn');
const output = document.querySelector('.output');
const inputVal = document.querySelector('.val');
inputVal.style.display = "none";
//click the button and all of the json data will show up using the function below
btn.addEventListener("click", (e) => {
    fetch(localUrl).then(rep => rep.json()
    ).then((json) => {
        maker(json)
    }).catch(err => {
        console.log(err);
    })
})

// function maker(data){
//     data.forEach(element => {
//         console.log(element);
//     });
// }

//to output all of the data
// function maker(data) {
//     output.innerHTML = "<h1>JSON Data</h1>"
//     data.forEach(element => {
//         console.log(element)
//         output.innerHTML += `${JSON.stringify(element)}`
//     })
// }

//how to use specific elements in the json data
function maker(data) {
    output.innerHTML = "<h1>JSON Data</h1>"
    data.forEach(element => {
        console.log(element)
        output.innerHTML += `${element.name.first} ${element.name.last}`;
        output.innerHTML += `<div>${element.location.city} ${element.location.country}</div>`;
        output.innerHTML += `<div>${element.age}</div><hr>`;
    })
}