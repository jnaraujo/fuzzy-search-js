import { mean, standardDeviation } from "@/lib/sd";
import { fast_trigram } from "@/lib/trigram";

const TEXT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in dui at arcu efficitur vulputate. Vestibulum libero urna, fermentum quis dolor ac, fringilla gravida nisi. Suspendisse eu orci aliquam, bibendum nunc in, sagittis quam. Praesent mollis gravida eros tincidunt egestas. Sed bibendum, lorem sit amet rhoncus vestibulum, tellus elit ornare justo, vel condimentum augue orci eget metus. Proin posuere cursus lacinia. Aenean sed viverra erat, eu lacinia purus. Vestibulum finibus nisl ac urna ultricies vehicula et ac turpis. Morbi nec libero ut orci eleifend feugiat nec sit amet mi. Sed accumsan rhoncus convallis. Proin vitae pellentesque magna.";

function mensure(cb: () => void, title = "Untitled") {
  const times = [];

  for (let i = 0; i < 50; i++) {
    const start = performance.now();
    for (let j = 0; j < 10_000; j++) {
      cb();
    }
    times.push(performance.now() - start);
  }

  const total = times.reduce((acc, curr) => acc + curr, 0);
  const meantm = mean(times) / times.length;
  const stdev = standardDeviation(times);

  console.log("=".repeat(10));
  console.log(`Mensure for '${title}'`);
  console.log(`Total: ${total.toFixed(2)} ms`);
  console.log(`Mean: ${meantm.toFixed(2)} ms`);
  console.log(`Stdev: ${stdev.toFixed(2)} ms +/-`);
  console.log("=".repeat(10));
}

mensure(() => {
  fast_trigram(TEXT);
}, "fast_trigram");
