// src/utils/priceToWords.js

const rubles = [
  '', 'один', 'два', 'три', 'четыре', 'пять', 'шесть',
  'семь', 'восемь', 'девять', 'десять', 'одиннадцать',
  'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать',
  'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'
];

const tens = [
  '', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят',
  'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'
];

const hundreds = [
  '', 'сто', 'двести', 'триста', 'четыреста',
  'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'
];

function numToWords(n, feminine = false) {
  if (n === 0) return 'ноль';

  const getBelowThousand = (num, feminine) => {
    const units = feminine
      ? ['', 'одна', 'две', ...rubles.slice(3)]
      : rubles;

    let words = '';
    if (num >= 100) {
      words += hundreds[Math.floor(num / 100)] + ' ';
      num %= 100;
    }
    if (num >= 20) {
      words += tens[Math.floor(num / 10)] + ' ';
      num %= 10;
    }
    if (num > 0 && num < 20) {
      words += units[num] + ' ';
    }
    return words.trim();
  };

  const thousands = Math.floor(n / 1000);
  const rest = n % 1000;

  let words = '';

  if (thousands > 0) {
    words += getBelowThousand(thousands, true) + ' ';
    const last = thousands % 10;
    const lastTwo = thousands % 100;
    if (last === 1 && lastTwo !== 11) words += 'тысяча ';
    else if (last >= 2 && last <= 4 && (lastTwo < 10 || lastTwo >= 20)) words += 'тысячи ';
    else words += 'тысяч ';
  }

  words += getBelowThousand(rest, feminine);
  return words.trim();
}

function getRublesSuffix(num) {
  const last = num % 10;
  const lastTwo = num % 100;
  if (last === 1 && lastTwo !== 11) return 'рубль';
  if (last >= 2 && last <= 4 && (lastTwo < 10 || lastTwo >= 20)) return 'рубля';
  return 'рублей';
}

function getKopeksSuffix(num) {
  const last = num % 10;
  const lastTwo = num % 100;
  if (last === 1 && lastTwo !== 11) return 'копейка';
  if (last >= 2 && last <= 4 && (lastTwo < 10 || lastTwo >= 20)) return 'копейки';
  return 'копеек';
}

export function priceToWords(value) {
  if (!value || isNaN(value)) return '';

  const rub = Math.floor(value);
  const kop = Math.round((value - rub) * 100);

  const rubWords = numToWords(rub);
  const rubSuffix = getRublesSuffix(rub);
  const kopWords = numToWords(kop, true);
  const kopSuffix = getKopeksSuffix(kop);

  return `${rubWords} ${rubSuffix} ${kopWords} ${kopSuffix}`.trim();
}