// Функции
function sum(a: number, b: number): number {
  return a + b;
}

sum(15, 8);

const string = (name: string): string => {
  return `Hello, my name is ${name}`;
};

string('Gadel');

function removeSymbol(text: string, symbol: string): string {
  return text.replaceAll(symbol, '');
}

removeSymbol('banana', 'a');

// Переменные
const statusOne: 'loading' | 'success' | 'error' = 'success';

const textFormat: 'uppercase' | 'lowercase' | 'capitalize' = 'uppercase';

// Интерфейсы
interface IUser {
  name: string;
  surname: string;
  age?: number;
}

let user: IUser = {
  name: 'Ainur',
  surname: 'Kharisov',
  age: 26,
};

interface IUser2 {
  name: string;
  surname: string;
  age: number;
  country: string;
  city: string;
}

interface Student extends IUser2 {
  role: string;
  isAdmin: boolean;
}

const user2: IUser2 = {
  name: 'Gadel',
  surname: 'Khuzin',
  age: 23,
  country: 'Saudia Arabia',
  city: 'Medina',
};

const student: Student = {
  name: 'Gadel',
  surname: 'Khuzin',
  age: 26,
  country: 'Saudia Arabia',
  city: 'Medina',
  role: 'student',
  isAdmin: true,
};

interface IBooks {
  title: string;
  author: string;
  yearOfRelease: number;
  coverColor: string;
  genre: string;
}

const books: IBooks[] = [
  {
    title: 'The Genius of Birds',
    author: 'Jennifer Ackerman',
    yearOfRelease: 2016,
    coverColor: 'Blue',
    genre: 'Nature',
  },
  {
    title: 'Bird by Bird',
    author: 'Anne Lamott',
    yearOfRelease: 1994,
    coverColor: 'White',
    genre: 'Nature',
  },
  {
    title: 'The Bird Way',
    author: 'Jennifer Ackerman',
    yearOfRelease: 2020,
    coverColor: 'Yellow',
    genre: 'Animal Behavior',
  },
  {
    title: 'H Is for Hawk',
    author: 'Helen Macdonald',
    yearOfRelease: 2014,
    coverColor: 'Red',
    genre: 'Memoir',
  },
  {
    title: 'Silent Spring',
    author: 'Rachel Carson',
    yearOfRelease: 1962,
    coverColor: 'Green',
    genre: 'Nature',
  },
];

const yearOfReleases = books.filter((book) => {
  return book.yearOfRelease > 2000;
});

