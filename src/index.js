export class LinkedList{
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

    prepend = function(value){
        console.log(this.list);
        let newNode = new Node(value, this.list);
        this.list = newNode;
        console.log(this.list);
    }
}

export class Node{
    value = null;
    nextNode = null;

    constructor(value, nextNode){
        this.value = value;
        this.nextNode = nextNode;
    }
}