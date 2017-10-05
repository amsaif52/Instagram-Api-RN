class HashTable{
    constructor(obj){
        this.length = 0;
        this.items = {};
        obj.map((value)=>{
            this.items[value.id] = value
            this.length++;
        })
    }

    setItem = function(key, value)
    {
        var previous = undefined;
        if (this.hasItem(key)) {
            previous = this.items[key];
        }
        else {
            this.length++;
        }
        this.items[key] = value;
        return previous;
    }

    getItem = function(key) {
        return this.hasItem(key) ? this.items[key] : undefined;
    }

    hasItem = function(key)
    {
        return this.items.hasOwnProperty(key);
    }
   
    removeItem = function(key)
    {
        if (this.hasItem(key)) {
            previous = this.items[key];
            this.length--;
            delete this.items[key];
            return previous;
        }
        else {
            return undefined;
        }
    }

    keys = function()
    {
        var keys = [];
        for (var k in this.items) {
            if (this.hasItem(k)) {
                keys.push(k);
            }
        }
        return keys;
    }

    values = function()
    {
        var values = [];
        for (var k in this.items) {
            if (this.hasItem(k)) {
                values.push(this.items[k]);
            }
        }
        return values;
    }

    each = function(fn) {
        for (var k in this.items) {
            if (this.hasItem(k)) {
                fn(k, this.items[k]);
            }
        }
    }

    clear = function()
    {
        this.items = {}
        this.length = 0;
    }
}

export default HashTable