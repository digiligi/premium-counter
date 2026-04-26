let currentLang = "ba";
let currentItem = null;

/* TRANSLATIONS */
const translations = {
    ba: {
        subtitle: "Premium ponuda • Kvalitet • Ambijent",
        highlight: "Happy Hour 08:00 – 11:00 <br><strong>Kafa 1 KM</strong>",
        hot: "Topli napici",
        total: "Ukupno:",

        espresso: "Espresso",
        espresso_desc: "Jak i aromatičan espresso.",

        latte: "Latte",
        latte_desc: "Kremasti latte.",

        cappuccino: "Cappuccino",
        cappuccino_desc: "Kremasti cappuccino.",

        apple: "Sok od jabuke",
        apple_desc: "Svježi sok od jabuke.",

        orange: "Sok od narandže",
        orange_desc: "Svježe cijeđena narandža.",

        cake: "Čokoladna torta",
        cake_desc: "Bogata čokoladna torta.",

        cheesecake: "Cheesecake",
        cheesecake_desc: "Lagani kremasti kolač."
    },

    en: {
        subtitle: "Premium offer • Quality • Atmosphere",
        highlight: "Happy Hour 08:00 – 11:00 <br><strong>Coffee 1 KM</strong>",
        hot: "Hot drinks",
        total: "Total:",

        espresso: "Espresso",
        espresso_desc: "Strong espresso.",

        latte: "Latte",
        latte_desc: "Creamy latte.",

        cappuccino: "Cappuccino",
        cappuccino_desc: "Creamy cappuccino.",

        apple: "Apple Juice",
        apple_desc: "Fresh apple juice.",

        orange: "Orange Juice",
        orange_desc: "Fresh orange juice.",

        cake: "Chocolate Cake",
        cake_desc: "Rich chocolate cake.",

        cheesecake: "Cheesecake",
        cheesecake_desc: "Light creamy dessert."
    },

    de: {
        subtitle: "Premium Angebot • Qualität • Atmosphäre",
        highlight: "Happy Hour 08:00 – 11:00 <br><strong>Kaffee 1 KM</strong>",
        hot: "Warme Getränke",
        total: "Gesamt:",

        espresso: "Espresso",
        espresso_desc: "Starker Espresso.",

        latte: "Latte",
        latte_desc: "Cremiger Latte.",

        cappuccino: "Cappuccino",
        cappuccino_desc: "Cremiger Cappuccino.",

        apple: "Apfelsaft",
        apple_desc: "Frischer Apfelsaft.",

        orange: "Orangensaft",
        orange_desc: "Frischer Orangensaft.",

        cake: "Schokoladenkuchen",
        cake_desc: "Reicher Kuchen.",

        cheesecake: "Käsekuchen",
        cheesecake_desc: "Cremiger Kuchen."
    }
};

/* LANGUAGE */
function setLang(lang) {
    currentLang = lang;

    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.dataset.key;
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    if (currentItem) updateModal(currentItem);
}

/* MODAL */
function openItem(key) {
    currentItem = key;
    updateModal(key);
    document.getElementById("itemModal").classList.add("active");
}

function updateModal(key) {
    const data = translations[currentLang];

    document.getElementById("itemTitle").innerText = data[key];
    document.getElementById("itemDesc").innerText = data[key + "_desc"];
    document.getElementById("itemImg").src = "images/" + key + ".jpg";
}

function closeItem() {
    document.getElementById("itemModal").classList.remove("active");
}

/* CALCULATOR */
function changeQty(btn, change) {
    let qtyEl = btn.parentElement.querySelector(".qty");
    let qty = parseInt(qtyEl.innerText);

    qty = Math.max(0, qty + change);
    qtyEl.innerText = qty;

    updateTotal();
}

function updateTotal() {
    let total = 0;

    document.querySelectorAll(".item").forEach(item => {
        let price = parseFloat(item.dataset.price);
        let qty = parseInt(item.querySelector(".qty").innerText);
        total += price * qty;
    });

    document.getElementById("totalPrice").innerText = total.toFixed(2);
}

/* CLOSE MODAL */
window.onclick = function(e) {
    const modal = document.getElementById("itemModal");
    if (e.target === modal) modal.classList.remove("active");
}
