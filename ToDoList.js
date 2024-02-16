let input = document.getElementById("input")
let list = document.getElementById("list")
let newList = []

function save() {
    newList.push(input.value)
    for (let i = 0; i < newList.length; i++) {
        list.innerHTML += "<li>" + newList[i] + "</li> <input type='checkbox' id='checkbox' > <button id='del'  onclick='del()'>Del</button>"

    }
    newList = []
    render();

}

function render() {
    input.value = ""
}

function del() {
    list.innerHTML = ""
}