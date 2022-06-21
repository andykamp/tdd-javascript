class Stack {
  top: number;
  items: any;

  constructor() {
    this.top = -1;
    this.items = {};
  }

  get peek() {
    return this.items[this.top];
  }

  push(value: any) {
    this.top += 1;
    this.items[this.top] = value;
  }

  pop() {
    const popped = this.items[this.top];
    this.top -= 1;
    delete this.items[this.top];
    return popped;
  }
}

describe("My Stack", () => {
  let stack: Stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("iscreatede empty", () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  it("can push to the top", () => {
    stack.push("item");
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe("item");
  });

  it("can poop off", () => {
    stack.push("item");
    const popped = stack.pop();
    expect(popped).toBe("item");
    expect(stack.top).toEqual(-1);
  });
});

export {};
