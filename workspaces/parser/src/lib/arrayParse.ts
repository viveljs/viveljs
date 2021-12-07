const arrayParse = (value: string, fn?: (x: any) => any) => {
  const parsedValue = value.split(',');
  const result = parsedValue.map((value: string) => {
    const manipulatedValue = value.trim();
    if (fn) {
      return fn(manipulatedValue);
    }
    return manipulatedValue;
  });
  return result;
};

export { arrayParse };
