import { concatenation, stranger, admin } from "./helpers";

const button = document.querySelector("button")!;
const input = document.querySelector("input")!;

if (button && input) {
  button.addEventListener("click", () => {
    concatenation(input.value, stranger.name);
  });
}

let total: number | string = 100;
let name: string = "Bob";
let isActive: boolean = false;
let nullValue: null = null;
let age = 12;
// age = "12";

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let mixed: (number | string)[] = [1, "two"];
type UserArr = {
  name: string;
  age: number;
};

let users: UserArr[] = [
  { name: "Tom", age: 30 },
  { name: "Jack", age: 25 },
  { name: "Alice", age: 32 },
];
// numbers.push(`11`);

type User = { name: string; age: number };

// const user: { name: string; age: number } = {
//   name: "Sergey",
//   age: 18,
// };
const user: User = {
  name: "Sergey",
  age: 18,
};

// user.age = "18";
// user.name = 1;

type eventType = "lesson" | "deadline";
// резерв значень

// const event: eventType = "homework";
const event: eventType = "deadline";

type size = "small" | "medium" | "large";

const string: size = "small";

let many: any = 10;
many = "small";
many = false;

let surname: unknown = "BOB";
surname = 12;
// surname.toFixed();
// toFixed робить тільки с числами (треба тайп any)

enum Sizes {
  small = "small",
  medium = "medium",
  xxxlarge = "xxxlarge",
}
type sizes = "small" | "medium" | "xxxlarge";

const btn1: sizes = "medium";
const btn2: Sizes = Sizes.medium;

function add(num1: number, num2: number): string {
  return (num1 + num2).toString();
}

console.log(add(1, 2));

function add2(num1: number, num2: number): void {
  console.log(num1 + num2);
}
// void ф-я без ретерн

add2(2, 3);
type User2 = {
  name: string;
  surname: string;
};

function greeting(user: User2): void {
  console.log(`hello ${user.name} ${user.surname}`);
}

greeting({ name: "Bob", surname: "Smith" });

type User3 = {
  name: string;
  age: number;
  hobby: string;
};

function useConstructor(name: string, age: number, hobby: string): User3 {
  return { name, age, hobby };
}

type Car = {
  brand: string;
  color: string;
  price: number;
  currency: string;
  // start:()=>{}
  //
  start: (color: string) => void;
};

const car: Car = {
  brand: "BMW",
  color: "Red",
  price: 1000,
  currency: "UAN",
  start: function (color) {
    console.log(this.color);
  },
};
let arrString: number[];
