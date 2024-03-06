import { trigram } from "@/lib/trigram";

const phrases = [
  "javascript is a mess",
  "ab-ad-ab-ae-bc-dasd",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in dui at arcu efficitur vulputate. Vestibulum libero urna, fermentum quis dolor ac, fringilla gravida nisi. Suspendisse eu orci aliquam, bibendum nunc in, sagittis quam. Praesent mollis gravida eros tincidunt egestas. Sed bibendum, lorem sit amet rhoncus vestibulum, tellus elit ornare justo, vel condimentum augue orci eget metus. Proin posuere cursus lacinia. Aenean sed viverra erat, eu lacinia purus. Vestibulum finibus nisl ac urna ultricies vehicula et ac turpis. Morbi nec libero ut orci eleifend feugiat nec sit amet mi. Sed accumsan rhoncus convallis. Proin vitae pellentesque magna.",
];

let counter = 0;

const N = 100_000;

const start = performance.now();
for (let i = 0; i < N; i++) {
  const word = phrases[counter++ % phrases.length];

  trigram(word);
}

console.log(`Duration: ${(performance.now() - start).toFixed(2)} ms`);
