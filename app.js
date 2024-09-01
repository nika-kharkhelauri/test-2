//შექმენით JavaScript ფუნქცია, რომელიც გამოიყენებს დახურვებს (closures) ქაუნთერის შესაქმნელად.ქაუნთერს უნდა შეეძლოს მნიშვნელობის გაზრდა, შემცირება და განულება.

// -------------------------------------------------------------მოთხოვნები----------------------------------------------------------------------

// ქაუნთერის ფუნქცია:

// შექმენით ფუნქცია createCounter, რომელიც აბრუნებს ობიექტს სამი მეთოდით: increment, decrement და reset.

// I-მეთოდი Increment:
// increment მეთოდმა უნდა გაზარდოს ქაუნთერი 1-ით და დააბრუნოს განახლებული მნიშვნელობა.

// II-მეთოდი Decrement:
// decrement მეთოდმა უნდა შეამციროს ქაუნთერი 1-ით და დააბრუნოს განახლებული მნიშვნელობა.

// III-მეთოდი Reset:
// reset მეთოდმა უნდა დააყენოს ქაუნთერის მნიშვნელობა უკან 0-ზე.

// დახურვების გამოყენება:
// ქაუნთერის მნიშვნელობა უნდა ინახებოდეს პირად ცვლადში, რომელიც ხელმისაწვდომი და შესაცვლელია მხოლოდ დახურვაში შექმნილი მეთოდების საშუალებით.

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();

function init() {
  var name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName();
}
init();