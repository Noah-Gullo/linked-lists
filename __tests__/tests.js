import { experiments } from "webpack";
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

test("Appending mix of types", () => {
    const ll = new LinkedList();
    ll.append(2);
    ll.append("bob");
    ll.append(-3.5);
    expect(ll).toMatchObject({list: new Node(2, new Node("bob", new Node(-3.5, null)))});
})

test("Appending long linked list appending", () => {
    const ll = new LinkedList();
    ll.append("tom");
    ll.append("mary");
    ll.append("jane");
    ll.append("peter");
    expect(ll).toMatchObject({list: new Node("tom", new Node("mary", new Node("jane", new Node("peter", null))))});
})

test("Prepending to blank list", () => {
    const ll = new LinkedList();
    ll.prepend("a");
    expect(ll).toMatchObject({list: new Node("a", null)});
    
    const ll2 = new LinkedList();
    ll2.prepend(0.5);
    expect(ll2).toMatchObject({list: new Node(0.5, null)});
})

test("Prepending to existing list", () => {
    const ll = new LinkedList();
    const llNodes = new Node("banana", new Node("cherry", null));
    ll.list = llNodes;
    ll.prepend("apple");
    expect(ll).toMatchObject({list: new Node("apple", new Node("banana", new Node("cherry", null)))});

    const ll2 = new LinkedList();
    const ll2Nodes = new Node(5, new Node(10, new Node(15, new Node(20, null))));
    ll2.list = ll2Nodes;
    ll2.prepend(0);
    ll2.prepend(-5);
    expect(ll2).toMatchObject({list: new Node(-5, new Node(0, new Node(5, new Node(10, new Node(15, new Node(20, null))))))});
})


test("Prepending to a long linked list", () => {
    const ll = new LinkedList();
    const llNodes = new Node(500, new Node(600, new Node(700, new Node(800, new Node(900, new Node(1000))))));
    ll.list = llNodes;
    ll.prepend(400);
    ll.prepend(300);
    ll.prepend(200);
    ll.prepend(100);
    ll.prepend(0);
    expect(ll).toMatchObject({list: new Node(0, new Node(100, new Node(200, new Node(300, new Node(400, new Node(500, 
                                    new Node(600, new Node(700, new Node(800, new Node(900, new Node(1000)))))))))))});
})

test("Size of blank linked list", () => {
    const ll = new LinkedList();
    expect(ll.size()).toBe(0);
})

test("Size of 1", () => {
    const ll = new LinkedList();
    ll.list = new Node("Hello, world!", null);
    expect(ll.size()).toBe(1);
})

test("More than 1 value", () => {
    const ll = new LinkedList();
    ll.list = new Node(1, new Node(2, new Node(3, null)));
    expect(ll.size()).toBe(3);

    const ll2 = new LinkedList();
    ll2.list = new Node("a", new Node(5, new Node(-0.5, new Node(3, new Node("Fifty", null)))));
    expect(ll2.size()).toBe(5);

    const ll3 = new LinkedList();
    ll3.list = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6, new Node(7, new Node(8, null))))))));
    expect(ll3.size()).toBe(8);
})

test("Return undefined for head() on an empty ll", () => {
    const ll = new LinkedList();
    expect(ll.head()).toBe(undefined);
})

test("Return first value for length 1 ll", () => {
    const ll = new LinkedList();
    ll.list = new Node("hi", null);
    expect(ll.head()).toBe("hi");

    const ll2 = new LinkedList();
    ll2.list = new Node(500);
    expect(ll2.head()).toBe(500);
})

test("Return first value for linked list longer than 1", () => {
    const ll = new LinkedList();
    ll.list = new Node("a", new Node("b", new Node("c", null)));
    expect(ll.head()).toBe("a");

    const ll2 = new LinkedList();
    ll2.list = new Node(10, new Node(9, new Node(5), null));
    expect(ll2.head()).toBe(10);

    const ll3 = new LinkedList();
    ll3.list = new Node(-0.5, new Node("asdfadf", new Node(11234, null)));
    expect(ll3.head()).toBe(-0.5);
})

test("Return undefined for tail on an empty linked list", () => {
    const ll = new LinkedList();
    expect(ll.tail()).toBe(undefined);
})

test("Return only value for a linked list of length 1", () => {
    const ll = new LinkedList();
    ll.list = new Node("bye", null);
    expect(ll.tail()).toBe("bye");

    const ll2 = new LinkedList();
    ll2.list = new Node(5);
    expect(ll2.tail()).toBe(5);
})

test("Return last value for a linked list with length > 1", () => {
    const ll = new LinkedList();
    ll.list = new Node("This", new Node("is", new Node("a", new Node("test."))));
    expect(ll.tail()).toBe("test.");
    
    const ll2 = new LinkedList();
    ll2.list = new Node(-50, new Node(0, new Node(50, new Node(100, null))));
    expect(ll2.tail()).toBe(100);

    const ll3 = new LinkedList();
    ll3.list = new Node("z", new Node("y", new Node("x", new Node("...", new Node("a")))));
    expect(ll3.tail()).toBe("a");
})