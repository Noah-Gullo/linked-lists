class LinkedList{
    list;
    constructor(){
        this.list = null;
    }
    
    append = function(value){
        if(this.list === null){
            this.list = new Node(value, null);
            return;
        }else{
            let listCopy = this.list;
            while(listCopy.nextNode != null){
                listCopy = listCopy.nextNode;
            }
            
            listCopy.nextNode = new Node(value, null);
        }
    }
}

class Node{
    value = null;
    nextNode = null;

    constructor(value, nextNode){
        this.value = value;
        this.nextNode = nextNode;
    }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("mouse");

console.log(list);