let gtbn = document.getElementById('btn');
gtbn.addEventListener("click", getdata)
function getdata() {
    console.log("Button Clicked");
    let xhr = new XMLHttpRequest;
    xhr.open("GET","https://jsonplaceholder.typicode.com/users", true)
    xhr.send();
    xhr.onload = function () {
        //console.log(this.responseText)
        //console.log(JSON.parse(this.responseText))
        let data = JSON.parse(this.responseText);
        displaydata(data);
    }
}
function displaydata(data) {
    let tdata = document.getElementById('tabledata')
    for(let i in data){
    let row = `
           <tr>
           <td>${data[i].id}</td >
           <td>${data[i].name}</td>
           <td>${data[i].company.name}</td>
           </tr > `
           tdata.innerHTML += row;
}
}
