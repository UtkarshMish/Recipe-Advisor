export function paginate(startValue = 1, items, pageSize) {
  const pages = [];
  const pageCount = Math.ceil(pageSize / items);
  let value = startValue;
  startValue = pageCount - 5 < startValue ? 1 : startValue;
  for (let index = startValue; index < pageCount; index++) {
    pages.push(index);
  }
  if (pageCount - 6 <= value) {
    const res = pages.splice(value - 5);
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
