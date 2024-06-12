let list = [];
document.querySelector("#Button").addEventListener("click", submitEvent);

function submitEvent(e){
    e.preventDefault();
    let input = document.querySelector("#data");
    list.push(input.value);
    console.log(input.value);
    input.value = "";
    printList();
    }


function printList(){
    let output = document.querySelector("#list");
    let HTML = "";
    for (let i = 0; i < list.length; i++) {
       HTML += displayElement(list[i]);
    }
output.innerHTML = HTML;
}

function displayElement(val) {
    return "<h3>" + val + "</h3>";
}
