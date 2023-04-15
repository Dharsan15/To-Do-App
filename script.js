const input = document.querySelector(".input");
const listContainer = document.querySelector(".list-container");


function addTask()
{
    const value = input.value;
    if(value == "")
    {
        alert("Please Add some task")
    }

    else
    {
        
        let newEl = document.createElement("li");
        newEl.className = "unchecked";
        newEl.innerHTML = value;
        listContainer.appendChild(newEl);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        newEl.appendChild(span);
        
    }

    input.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e)
{
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }

    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData()
{
    localStorage.setItem("data", listContainer.innerHTML);
}

function getData()
{
    listContainer.innerHTML == localStorage.getItem("data");
}

getData();