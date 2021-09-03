const multipleResult = (names: string[], and: string) => {
  const result = names.map((name, index) => {
    const separator = () => {
      if (index == names.length - 2) return ` ${and} `;
      if (index == names.length - 1) return '';
      return ', ';
    };

    return `${name}${separator()}`;
  });

  return result;
};

export { multipleResult };
