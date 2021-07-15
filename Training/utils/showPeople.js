const showPeople = (people) => {
  const newPoeple = people
    .map((item) => {
      const { name, job } = item;
      return `<p>${name}<strong>${job}</strong></p>`;
    })
    .join('');
  return newPoeple;
};

export default showPeople;
