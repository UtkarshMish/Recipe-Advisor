export function paginate(startValue = 1, items, pageSize, currentPage) {
  const pages = [];
  const pageCount = Math.ceil(pageSize / items);
  let value = startValue;
  startValue = currentPage - 5 < startValue ? 1 : startValue;
  for (let index = startValue; index < pageCount; index++) {
    pages.push(index);
  }
  if (currentPage - 6 <= value) {
    const res = pages.splice(currentPage - 5);
    res.unshift("...");
    res.unshift("1");
    return res;
  }
  if (pages.length > 10) {
    const res = pages.splice(5);
    pages.push("...");
    pages.push(res.pop());
  }
  return pages;
}
