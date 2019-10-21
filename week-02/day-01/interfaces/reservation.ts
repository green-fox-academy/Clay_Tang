interface Reservation2 {
  getDow(): string;
  getCode(): string;
}

class Reservation implements Reservation2 {
  DOW: string[] = ['MON', 'TUE', 'WED', 'THU', 'FIR', 'SAT', 'SUN'];

  getDow(): string {
    let index = Math.floor(Math.random() * 6);
    return this.DOW[index];
  }
  getCode(): string {
    let code = '';
    for (let i = 0; i < 8; i++) {
      code += String.fromCharCode(Math.round(Math.random()) ? Math.floor(Math.random() * 10) + 48 : Math.floor(Math.random() * 26) + 65);
    };
    return code;
  }
}

const reservation = new Reservation()
for (let i = 0; i < 8; i++) {
  console.log(`Booking# ${reservation.getCode()} for ${reservation.getDow()}`);
}