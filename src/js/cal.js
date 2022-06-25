let products = {
    data: [{
            foodName: "Potato",
            category: "vegetables",
            calories: "77",
            img.src = 'f-18.jpg',
        },
        {
            foodName: "Apple",
            category: "fruit",
            calories: "52 ",

        },
        {
            foodName: "chocolate cake",
            category: "food",
            calories: "371 calories | 100 grams",

        },
        {
            foodName: "Milk",
            category: "drink",
            calories: "42",

        },
        {
            foodName: "Fish",
            category: "food",
            calories: "206",

        },
        {
            foodName: "Pineapple",
            category: "fruit",
            calories: "50",

        },
        {
            foodName: "Dark Chocolate",
            category: "food",
            calories: "546 calories | 100 grams",

        },
        {
            foodName: "Honey",
            category: "drink",
            calories: "304",

        },
        {
            foodName: "Regular White T-Shirt",
            category: "vegetables",
            calories: "30",
            image: "white-tshirt.jpg",
        },
        {
            foodName: "Watermelon",
            category: "fruit",
            calories: "30",

        },
        {
            foodName: "Pizza",
            category: "food",
            calories: "266 calories | 100 grams",

        },
        {
            foodName: "Bread",
            category: "food",
            calories: "265",

        },
        {
            foodName: "Regular White T-Shirt",
            category: "vegetables",
            calories: "30",

        },
        {
            foodName: "Bananas",
            category: "fruit",
            calories: "89 ",

        },
        {
            foodName: "Chicken",
            category: "food",
            calories: "239 calories | 100 grams",

        },
        {
            foodName: "Milk",
            category: "drink",
            calories: "42",

        },
        {
            foodName: "Orange",
            category: "fruit",
            calories: "47",

        },
        {
            foodName: "Strawberries",
            category: "fruit",
            calories: "32 ",

        },
        {
            foodName: "Egg",
            category: "food",
            calories: "155 calories | 100 grams",

        },
        {
            foodName: "Grapes",
            category: "fruit",
            calories: "67",

        },
        {
            foodName: "Regular White T-Shirt",
            category: "vegetables",
            calories: "30",

        },
        {
            foodName: "Mango",
            category: "fruit",
            calories: "60 ",

        },
        {
            foodName: "White Rice",
            category: "food",
            calories: "130 calories | 100 grams",

        },
    ],
};

for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.foodName.toUpperCase();
    container.appendChild(name);
    //calories
    let calories = document.createElement("h6");
    calories.innerText = "# " + i.calories;
    container.appendChild(calories);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        //check if value equals innerText
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
        //display all cards on 'all' button click
        if (value == "all") {
            element.classList.remove("hide");
        } else {
            //Check if element contains category class
            if (element.classList.contains(value)) {
                //display element based on category
                element.classList.remove("hide");
            } else {
                //hide other elements
                element.classList.add("hide");
            }
        }
    });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    //loop through all elements
    elements.forEach((element, index) => {
        //check if text includes the search value
        if (element.innerText.includes(searchInput.toUpperCase())) {
            //display matching card
            cards[index].classList.remove("hide");
        } else {
            //hide others
            cards[index].classList.add("hide");
        }
    });
});

//Initially display all products
window.onload = () => {
    filterProduct("all");
};
