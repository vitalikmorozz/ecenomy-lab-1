import './main.css';

export type CocomoTypes = 'organic' | 'semi-detached' | 'embedded';

export type CocomoTypeValues = {
  a: number;
  b: number;
  c: number;
  d: number;
};

const basicCocomoTable: Record<CocomoTypes, CocomoTypeValues> = {
  organic: {
    a: 2.4,
    b: 1.05,
    c: 2.5,
    d: 0.38,
  },
  'semi-detached': {
    a: 3.0,
    b: 1.12,
    c: 2.5,
    d: 0.35,
  },
  embedded: {
    a: 3.6,
    b: 1.2,
    c: 2.5,
    d: 0.32,
  },
};

const sel = <T extends HTMLElement>(selector: string) =>
  document.querySelector<T>(selector)!;

const form = sel<HTMLFormElement>('#calculate-form');
const input = sel<HTMLInputElement>('#kloc');
const typeSelector = sel<HTMLSelectElement>('#type-select');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const value = parseInt(input.value);
  if (!value) return;
  if (value <= 0) return alert('Значення повино бути більше 0');

  const type: CocomoTypes = typeSelector.value as CocomoTypes;
  const { a, b, c, d } = basicCocomoTable[type];

  const E = Math.floor(a * Math.pow(value, b));
  const T = Math.round(c * Math.pow(E, d));
  const S = Math.round(E / T);
  const P = (value / E).toFixed(2);

  sel<HTMLSpanElement>('#efforts-value').innerText = `${E}`;
  sel<HTMLSpanElement>('#time-value').innerText = `${T}`;
  sel<HTMLSpanElement>('#staff-value').innerText = `${S}`;
  sel<HTMLSpanElement>('#productivity-value').innerText = `${P}`;
});
