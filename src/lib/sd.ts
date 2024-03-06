export function standardDeviation(data: Array<number>) {
  const m = mean(data);

  let sum = 0;

  for (const curr of data) {
    sum += Math.pow(curr - m, 2);
  }

  return Math.sqrt(sum / data.length);
}

export function mean(data: Array<number>) {
  return data.reduce((prev, curr) => prev + curr) / data.length;
}
