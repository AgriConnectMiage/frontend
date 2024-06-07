export const interpolateColor = (
  color1: number[],
  color2: number[],
  factor: number,
) => {
  const result = color1.slice();
  for (let i = 0; i < 3; i++) {
    result[i] = Math.round(result[i] + factor * (color2[i] - result[i]));
  }
  return result;
};

export const colorToCss = (rgb: number[]) => {
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
};
