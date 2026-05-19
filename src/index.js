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
        if(this.list === null){
            return undefined;
        }else{
            return this.list.value;
        }
    }

    tail(){
        if(this.list === null){
            return undefined;
        }else{
            let listCopy = this.list;
            while(listCopy.nextNode != null){
                listCopy = listCopy.nextNode;
            }

            return listCopy.value;
        }
    }

    at(index){
        if(index < 0){
            return undefined;
        }else{
            let listCopy = this.list;
            for(let i = 0; i < index; i++){
                if(listCopy === null) return undefined;
                listCopy = listCopy.nextNode;
            }

            return listCopy.value;
        }
    }

    pop(){
        if(this.list === null){
            return undefined;
        }else{
            const headValue = this.list.value;
            this.list = this.list.nextNode;
            return headValue;
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