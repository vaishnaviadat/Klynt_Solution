// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});

// TRAVEL PACKAGES (DUMMY DATA)
const packageList = document.getElementById("packageList");

const packages = [
    {
        title: "Beach Paradise",
        price: "₹14,999",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        desc: "Relax on sunny beaches with crystal-clear water."
    },
    {
        title: "Mountain Escape",
        price: "₹19,499",
        img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        desc: "Enjoy cool weather and breathtaking hill views."
    },
    {
        title: "City Explorer",
        price: "₹22,999",
        img: "https://cdn.pixabay.com/photo/2023/08/04/22/59/sunset-8170058_1280.jpg",
        desc: "Experience modern life, shopping, and nightlife."
    },
    {
        title: "Luxury Resort Stay",
        price: "₹29,999",
        img: "https://cdn.pixabay.com/photo/2015/11/15/14/30/veligandu-island-1044366_1280.jpg",
        desc: "Premium resort stay with private pool & spa."
    },
    {
        title: "Adventure Trekking",
        price: "₹16,499",
        img: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
        desc: "Thrilling adventure activities with expert guides."
    },
    {
        title: "Desert Safari",
        price: "₹18,999",
        img: "https://cdn.pixabay.com/photo/2022/08/23/01/10/cape-7404790_1280.jpg",
        desc: "Experience jeep safari, camel rides & desert camp."
    }
];

function loadPackages() {
    packages.forEach(pkg => {
        const card = document.createElement("div");
        card.classList.add("package-card");

        card.innerHTML = `
            <img src="${pkg.img}" alt="${pkg.title}" />
            <h3>${pkg.title}</h3>
            <p>${pkg.desc}</p>
            <strong>${pkg.price}</strong>
            <button>Book Now</button>
        `;

        packageList.appendChild(card);
    });
}

loadPackages();