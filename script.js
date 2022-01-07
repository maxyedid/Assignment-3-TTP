// #1
let contain = document.getElementById("container")

//#2
 let containQuery = document.querySelector("#container")

 //#3
 let secondSelect = document.querySelectorAll(".second")

 //#4
 let thirdSelect = document.querySelector("ol > li.third")

//#5
//contain.innerText = "Hello"

//#6
let divSelect = document.querySelector("div.footer");

divSelect.classList.add("main")

//#7
divSelect.classList.remove("main")

//#8
let list = document.createElement("li")

//#9
list.innerText = "four"

//#10
document.querySelector("ul").append(list)

//#12
let ordered = document.querySelectorAll("ol > li")

for (let i = 0; i < ordered.length; i++) {
    ordered[i].style.backgroundColor = "green"
}

//Second answer: ordered.forEach(li => li.style.backgroundColor = "green")
//#13
//divSelect.remove()
document.querySelector("div.footer").remove()
