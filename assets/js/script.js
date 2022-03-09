const calenderEl = document.querySelector(".container");

for (let hour = 1; hour < 9; hour++) {

        calenderEl.insertAdjacentHTML("beforeend", `<div
        class = "hour row">${hour}</div>`);
}