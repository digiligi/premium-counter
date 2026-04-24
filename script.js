// Update quantity (+ / -)
function changeQty(button, change) {
    const item = button.closest(".item");
    const qtySpan = item.querySelector(".qty");

    let qty = parseInt(qtySpan.innerText);

    // prevent weird errors
    if (isNaN(qty)) qty = 0;

    qty += change;

    if (qty < 0) qty = 0;

    qtySpan.innerText = qty;

    updateTotal();
}

// Calculate total price
function updateTotal() {
    let total = 0;

    const items = document.querySelectorAll(".item");

    items.forEach(item => {
        const price = parseFloat(item.getAttribute("data-price"));
        const qty = parseInt(item.querySelector(".qty").innerText);

        if (!isNaN(price) && !isNaN(qty)) {
            total += price * qty;
        }
    });

    // format nicely (2 decimal places)
    document.getElementById("total").innerText = total.toFixed(2);
}