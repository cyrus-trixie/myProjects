let leads = [];
const input = document.getElementById("input");
const save = document.getElementById("save");
const un = document.getElementById("un");

save.addEventListener("click", function() {
    leads.push(input.value)
    input.value = ""
    render();

})

function render() {
    let listItem = "";
    for (let i = 0; i < leads.length; i++) {
        listItem += "<li><a target='_blank' href='" + leads[i] + "'>" + leads[i] + "</a></li>";

    }
    un.innerHTML = listItem;
}