function appendSeats(seats, rowType) {
  const row = document.querySelector(`.${rowType}`);
  for (let i = 1; i <= seats; i++) {
    const seat = document.createElement("div");
    seat.classList.add("seat");
    row.appendChild(seat);
  }
}

function selectSeats() {
  const seat = document.querySelectorAll(".seat");
  seat.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("selected");
    });
  });
}

function markRandomSeats(SEAT_RESERVED) {
  const totalSeats = document.querySelectorAll(".seat");
  const reservedSeats = getRandomSeats(totalSeats, SEAT_RESERVED);
  reservedSeats.forEach((seat) => {
    seat.classList.add("reserved");
  });
}

function getRandomSeats(seats, count) {
  const shuffledSeats = Array.from(seats).sort(() => 0.5 - Math.random());
  return shuffledSeats.slice(0, count);
}

window.addEventListener("DOMContentLoaded", () => {
  const SEAT_RESERVED = 10;
  appendSeats(12, "first-front-row");
  appendSeats(14, "second-front-row");
  appendSeats(96, "middle-row");
  appendSeats(14, "second-last-row");
  appendSeats(12, "first-last-row");
  selectSeats();
  markRandomSeats(SEAT_RESERVED);
});
