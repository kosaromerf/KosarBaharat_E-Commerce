const searchFilter = (productList, name) => {
  console.log(productList);
  console.log(name);
  return [...productList].filter((e) =>
    e.name.toLowerCase().match(name.toLowerCase())
  );
};

export default searchFilter;
