// Функции
function sum(a: number, b: number): number {
  return a + b;
}

sum(15, 8);

const formatString = (text: string, format: string): string => {
  if (format === 'uppercase') {
    return text.toUpperCase();
  }

  if (format === 'lowercase') {
    return text.toLowerCase();
  }

  if (format === 'capitalize') {
    return text[0].toUpperCase() + text.slice(1).toLowerCase();
  }

  return text;
};

formatString('gadel', 'uppercase');
formatString('GADEL', 'lowercase');
formatString('gADEL', 'capitalize');

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
  age: number;
  country: string;
  city?: string;
}

interface Student extends IUser {
  role: string;
  isAdmin: boolean;
}

const user: IUser = {
  name: 'Gadel',
  surname: 'Khuzin',
  age: 23,
  country: 'Saudia Arabia',
  city: 'Medina',
};

const student: Student = {
  name: 'Gadel',
  surname: 'Khuzin',
  age: 23,
  country: 'Saudia Arabia',
  city: 'Medina',
  role: 'Angular developer',
  isAdmin: true,
};

const studentArr: Student[] = [
  {
    name: 'Gadel',
    surname: 'Khuzin',
    age: 23,
    country: 'Saudia Arabia',
    city: 'Medina',
    role: 'Angular developer',
    isAdmin: true,
  },
  {
    name: 'Ainur',
    surname: 'Kharisov',
    age: 26,
    country: 'Russia',
    city: 'Moskow',
    role: 'Security',
    isAdmin: false,
  },
  {
    name: 'Niyaz',
    surname: 'Ahmetshin',
    age: 29,
    country: 'Russia',
    city: 'Kazan',
    role: 'cook',
    isAdmin: true,
  },
];

const filterIsAdmin = studentArr.filter((student) => {
  return student.isAdmin === false;
});
