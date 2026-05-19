export class LinkedList{
    list;
    constructor(){
        this.list = null;
    }
    
    append(value){
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

    prepend(value){
        console.log(this.list);
        let newNode = new Node(value, this.list);
        this.list = newNode;
        console.log(this.list);
    }

    size(){
        if(this.list === null){
            return 0;
        } else{
            let size = 0;
            let copy = this.list;
            while(copy != null){
                size++;
                copy = copy.nextNode;
            }
            return size;
        }
    }

    head(){
        if(this.list == null){
            return undefined;
        }else{
            return this.list.value;
        }
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