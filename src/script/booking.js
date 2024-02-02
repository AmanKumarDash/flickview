const seatingPlanContainer = document.getElementById('seatingPlan');
    const totalAmountElement = document.getElementById('totalAmount');

    const rows = 9; // Number of rows10
    const cols = 9; // Number of seats in each row
    const seatPrice = 150; // Price per seat in INR

    let selectedSeats = [];

    function createSeatingPlan() {
        for (let i = 1; i <= rows; i++) {
            for (let j = 1; j <= cols; j++) {
                const seatElement = document.createElement('div');
                seatElement.classList.add('seat');
                seatElement.id = `seat-${i}-${j}`;
                seatElement.textContent = `${i}-${j}`;
                seatElement.onclick = function() { selectSeat(i, j); };
                seatingPlanContainer.appendChild(seatElement);
            }
        }
    }

    function selectSeat(row, col) {
        const seatId = `seat-${row}-${col}`;
        const index = selectedSeats.indexOf(seatId);

        if (index === -1) {
            // Seat not selected, add to selectedSeats
            selectedSeats.push(seatId);
        } else {
            // Seat already selected, remove from selectedSeats
            selectedSeats.splice(index, 1);
        }

        updateSeatingPlan();
    }

    function updateSeatingPlan() {
        const allSeats = document.querySelectorAll('.seat');
        
        allSeats.forEach(seat => {
            const seatId = seat.id;
            if (selectedSeats.includes(seatId)) {
                seat.classList.add('selected');
            } else {
                seat.classList.remove('selected');
            }
        });

        updateTotalAmount();
    }

    function updateTotalAmount() {
        const totalAmount = selectedSeats.length * seatPrice;
        totalAmountElement.textContent = totalAmount;
    }

    function toggleSeatingPlan() {
        seatingPlanContainer.style.display = seatingPlanContainer.style.display === 'none' ? 'grid' : 'none';
    }

    // Initialize seating plan
    createSeatingPlan();