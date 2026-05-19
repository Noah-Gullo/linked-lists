import { LinkedList, Node } from "../src/index.js";

test("Blank linked list", () => {
    expect(new LinkedList()).toMatchObject({list: null});
})

test("Appending to a linked list", () => {
    const ll = new LinkedList();
    ll.append("cat");
    expect(ll).toMatchObject({list: new Node("cat", null)});
})

test("Appending two items to a linked list", () => {
    const ll = new LinkedList();
    ll.append("tom");
    ll.append("jane");
    expect(ll).toMatchObject({list: new Node("tom", new Node("jane", null))});
})

test("Appending numbers to a linked list", () => {
    const ll = new LinkedList();
    ll.append(2);
    ll.append(50);
    ll.append(-3);
    expect(ll).toMatchObject({list: new Node(2, new Node(50, new Node(-3, null)))});
})

test("Testing mix of types", () => {
    const ll = new LinkedList();
    ll.append(2);
    ll.append("bob");
    ll.append(-3.5);
    expect(ll).toMatchObject({list: new Node(2, new Node("bob", new Node(-3.5, null)))});
})

test("Testing long linked list appending", () => {
    const ll = new LinkedList();
    ll.append("tom");
    ll.append("mary");
    ll.append("jane");
    ll.append("peter");
    expect(ll).toMatchObject({list: new Node("tom", new Node("mary", new Node("jane", new Node("peter", null))))});
})