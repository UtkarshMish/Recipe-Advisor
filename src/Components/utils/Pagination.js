export function paginate(startValue = 1, items, pageSize, currentPage) {
  const pages = [];
  const pageCount = Math.ceil(pageSize / items);
  let value = startValue > Math.ceil(pageCount / 2) ? 1 : startValue;
  startValue = currentPage - 5 < startValue ? 1 : startValue;
  for (let index = value; index < pageCount; index++) {
    pages.push(parseInt(index));
  }
  if (currentPage > Math.ceil(pageCount / 2)) {
    const index = pages.indexOf(currentPage - 5);
    const res = pages.splice(index, 6);
    res.unshift("...");
    res.unshift(1);
    if (res[res.length - 1] !== pageCount - 1) {
      res.push("..");
      res.push(pageCount - 1);
    }
    return res;
  }
  if (pageCount > 10) {
    const res = pages.splice(5);
    pages.push("...");
    if (pages[0] !== 1) {
      pages.unshift("..");
      pages.unshift(1);
    }
    pages.push(res.pop());
  }
  return pages;
}
