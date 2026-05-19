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
            let copy = this.list;
            while(copy.nextNode != null){
                copy = copy.nextNode;
            }

            copy.nextNode = new Node(value, null);
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
            let copy = this.list;
            while(copy.nextNode != null){
                copy = copy.nextNode;
            }

            return copy.value;
        }
    }

    at(index){
        if(index < 0){
            return undefined;
        }else{
            let copy = this.list;
            for(let i = 0; i < index; i++){
                if(copy === null) return undefined;
                copy = copy.nextNode;
            }

            return copy.value;
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

    contains(value){
        let copy = this.list;
        while(copy != null){
            if(copy.value === value) return true;
            copy = copy.nextNode;
        }

        return false;
    }

    findIndex(value){
        let copy = this.list;
        let index = 0;
        while(copy != null){
            if(copy.value === value) return index;
            copy = copy.nextNode;
            index++;
        }

        return -1;
    }

    toString(){
        if(this.list === null) return "";

        let copy = this.list;
        let string = "";
        while(copy != null){
            string += `( ${copy.value} ) -> `;
            copy = copy.nextNode;
        }

        string += "null";
        return string;
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