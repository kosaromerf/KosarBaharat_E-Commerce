const searchFilter = (productList, name) => {
  return [...productList].filter((e) =>
    e.name.toLowerCase().match(name.toLowerCase())
  );
};

export default searchFilter;
