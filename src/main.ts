import './style.css';

const sel = <T extends HTMLElement>(selector: string) =>
  document.querySelector<T>(selector)!;

const form = sel<HTMLFormElement>('#calculate-form');
const input = sel<HTMLInputElement>('#kloc');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert(input.value);
});
