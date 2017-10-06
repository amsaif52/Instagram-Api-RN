// class HashTable{
//     constructor(obj){
//         this.length = 0;
//         this.items = {};
//         obj.map((value)=>{
//             this.items[value.id] = value
//             this.length++;
//         })
//     }

//     setItem = function(key, value)
//     {
//         var previous = undefined;
//         if (this.hasItem(key)) {
//             previous = this.items[key];
//         }
//         else {
//             this.length++;
//         }
//         this.items[key] = value;
//         return previous;
//     }

//     getItem = function(key) {
//         return this.hasItem(key) ? this.items[key] : undefined;
//     }

//     hasItem = function(key)
//     {
//         return this.items.hasOwnProperty(key);
//     }
   
//     removeItem = function(key)
//     {
//         if (this.hasItem(key)) {
//             previous = this.items[key];
//             this.length--;
//             delete this.items[key];
//             return previous;
//         }
//         else {
//             return undefined;
//         }
//     }

//     keys = function()
//     {
//         var keys = [];
//         for (var k in this.items) {
//             if (this.hasItem(k)) {
//                 keys.push(k);
//             }
//         }
//         return keys;
//     }

//     values = function()
//     {
//         var values = [];
//         for (var k in this.items) {
//             if (this.hasItem(k)) {
//                 values.push(this.items[k]);
//             }
//         }
//         return values;
//     }

//     each = function(fn) {
//         for (var k in this.items) {
//             if (this.hasItem(k)) {
//                 fn(k, this.items[k]);
//             }
//         }
//     }

//     clear = function()
//     {
//         this.items = {}
//         this.length = 0;
//     }
// }


function HashTable(size){
    this.buckets=Array(size);
    this.numBuckets = this.buckets.length;
}

HashTable.prototype.hash =function(key){
    let total = 0;
    for(let i =0;i<key.length;i++){
        total += key.charCodeAt(i);
    }
    let bucket = total % this.numBuckets;
    return bucket;
}

HashTable.prototype.insert = function(key,value){
    let index = this.hash(key);
    if(!this.buckets[index]){
        this.buckets[index] = new HashNode(key,value)
    }else if(this.buckets[index].key === key){
        this.buckets[index].value = value
    }else{
        let currentNode = this.buckets[index];
        while(currentNode.next){
            if(currentNode.next.key === key){
                currentNode.next.value = value
                return
            }
            currentNode = currentNode.next
        }
        currentNode.next = new HashNode(key,value)
    }
}

HashTable.prototype.get = function(key){
    let index = this.hash(key)
    if(!this.buckets[index]) return null
    let currentNode = this.buckets[index]
    while(currentNode){
        if(currentNode.key === key) return currentNode.value
        currentNode = currentNode.next
    }
    return null
}


function HashNode(key,value,next){
    this.key = key;
    this.value = value;
    this.next = next || null;
}

export default HashTable