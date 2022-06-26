const list = [
  "1 idli - 58 calories",
  "1 Dosa - 133 calories",
  "1 Masala dosa - 387 calories",
  "1 Brown Rice Dosa - 81 calories",
  "chicken curry - 110 calories",
  "Curd Rice 300 grams -	433 calories",
  "1 Chapathi	-	40 calories",
  "Fish Fry	100 grams	- 240 calories",
  "Gulab Jamun	2 pieces -	350 calories",
];

const output = document.querySelector(".output");
const search = document.querySelector(".filter-input");

window.addEventListener("DOMContentLoaded", loadList);
search.addEventListener("input", filter);

function loadList() {
  let temp = `<ul class="list-items">`;
  list.forEach((item) => {
    temp += `<li class="list-item"> ${item} </li>`;
  });
  temp += `</ul>`;
  output.innerHTML = temp;
}

function filter(e) {
    let temp = '';
    const result  = list.filter(item=> item.toLowerCase().includes(e.target.value.toLowerCase()));
  
    if(result.length>0){
        temp = `<ul class="list-items">`;
        result.forEach((item) => {
          temp += `<li class="list-item"> ${item} </li>`;
        });
        temp += `</ul>`;
    }else{
        temp =`<div class="no-item"> No Item Found </div>`;
    }

    output.innerHTML =temp;

}
