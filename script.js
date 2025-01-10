document.addEventListener("DOMContentLoaded", () => {
    // Function to create navigation items
    function createNavItems() {
        const navItems = ["Home", "Deals", "Food", "Beverages", "Household", "Personal care", "Most popular", "My Order"];
        const navList = document.getElementById("nav-items");
        
        navItems.forEach(item => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = "#";
            a.textContent = item;
            li.appendChild(a);
            navList.appendChild(li);
        });
    }

    // Function to create best deals items
    function createBestDeals() {
        const bestDealsData = [
            { img: "perfume/pm2.jpeg", name: "Perfume" },
            { img: "shampoo/sham1.jpg", name: "Shampoo" },
            { img: "soap/soap1.webp", name: "Soap" },
            { img: "suncream/sc3.webp", name: "Sun Cream" },
            { img: "toothpaste/tp1.jpg", name: "Toothpaste" }
        ];
        const bestDealsContainer = document.getElementById("best-deals-container");

        bestDealsData.forEach(deal => {
            const div = document.createElement("div");
            div.classList.add("bditem");
            div.innerHTML = `
                <img src="img/product/${deal.img}" alt="${deal.name}">
                <h3>${deal.name}</h3>
                <input type="number" min="1" placeholder="Enter quantity">
                <button>Order ${deal.name}</button>
            `;
            bestDealsContainer.appendChild(div);
        });
    }

    // Function to create popular categories items
    function createPopularCategories() {
        const categoriesData = [
            { img: "bakery", name: "Bakery" },
            { img: "vegetable", name: "Vegetables" },
            { img: "wine", name: "Wine" },
            { img: "dairy", name: "Dairy & Eggs" },
            { img: "meat", name: "Meat & Poultry" },
            { img: "softdrink", name: "Soft Drinks" },
            { img: "cleaning", name: "Cleaning Supplies" },
            { img: "snacks", name: "Cereal & Snacks" }
        ];
        const popularCategoriesContainer = document.getElementById("popular-categories-container");

        categoriesData.forEach(category => {
            const div = document.createElement("div");
            div.classList.add("item");
            div.innerHTML = `
                <img src="img/categories/${category.img}.png" alt="${category.name}">
                <div class="imagetext">${category.name}</div>
            `;
            popularCategoriesContainer.appendChild(div);
        });
    }

    // Initialize the sections
    createNavItems();
    createBestDeals();
    createPopularCategories();
});
