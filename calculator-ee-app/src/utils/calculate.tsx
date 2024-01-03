export const calculate = (
  currentValue: string,
  prevValue: string,
  operation: string
): string | number | undefined => {
  if (!prevValue || !operation) return currentValue;
  const curr = parseFloat(currentValue);
  const prev = parseFloat(prevValue);

  let result;
  switch (operation) {
    case "÷":
      result = prev / curr;
      break;
    case "*":
      result = prev * curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "+":
      result = prev + curr;
      break;
  }
  return result;
};
