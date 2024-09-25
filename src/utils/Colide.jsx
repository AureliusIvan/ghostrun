export function elementsColliding(el1, el2) {
  const a = el1.current.getBoundingClientRect();
  const b = el2.current.getBoundingClientRect();
  return (
      ((b.right) > (a.right)) &&
      a.top < b.bottom &&
      (b.left) <= (a.right + 10) &&
      a.bottom > b.top
  );

}
