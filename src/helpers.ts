type Role = {
  name: string;
  age: number;
  role?: string;
  // може буду а може не бути
};

const stranger: Role = {
  name: "Stranger",
  age: 18,
};

const admin: Role = {
  name: "Andy",
  age: 25,
  role: "admin",
};

function concatenation(firstWord: string, secondWord: string) {
  console.log(`${firstWord}, " ", ${secondWord}`);
}
export { concatenation, stranger, admin };
