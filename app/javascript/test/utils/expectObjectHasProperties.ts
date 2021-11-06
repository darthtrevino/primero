export function expectObjectHasProperties(object: Record<string, any>, props: string[]) {
  const keySet = new Set<string>(Object.keys(object));

  props.forEach(prop => {
    expect(keySet.has(prop)).to.be.true;
    keySet.delete(prop);
  });
  expect(keySet.size).to.equal(0);
}
