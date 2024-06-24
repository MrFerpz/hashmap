// if (index < 0 || index >= buckets.length) {
//     throw new Error("Trying to access index out of bound");
//   }

class HashMap {
    constructor(size = 16) {
        this.buckets = new Array(size).fill(null).map(() => []);
        this.load = 0;
        this.size = size;
    }

    // so this method takes in the key and returns a hash value corresponding to which bucket I guess
    hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
     
        return hashCode % this.buckets.length;
      } 

    set(key, value, nextNode = null) {

        if (this.buckets[this.hash(key)] === undefined) {
            this.buckets[this.hash(key)] = [{key, value}];
        } else {
            this.buckets[this.hash(key)].push({key, value});
        }

        // tracking the load and expanding buckets when it gets big
        this.load++;
        if (this.load >= 0.8 * this.size) {
            console.log(this.buckets);
            let oldBuckets = this.buckets;
            console.log(oldBuckets);
            this.size *= 2;
            this.buckets = new Array(this.size);
            for (let i = 0; i < oldBuckets.length; i++) {
                if (oldBuckets[i]) {
                    this.buckets[i] = oldBuckets[i]
                }
            }
            console.log(this.buckets)
        }
    }

    get(key) {
        // maybe have to refactor this after we allow for collisions
        let i = 0;
        while (i < this.buckets.length) {
            if (this.buckets[i]) {
                if (this.buckets[i].key === key)
                return this.buckets[i].value;
            }
            i++
        }}
    
    has(key) {
        if (this.get(key) !== undefined) {
            return true;
        }
        else return false;
    }

    remove(key) {
        let i = 0;
        while (i < this.buckets.length) {
            if (this.buckets[i]) {
                if (this.buckets[i].key === key) {
                    this.buckets[i].key = "";
                    this.buckets[i].value = "";
                    return true
                    }
                    i++;
                 }
                } return false
            } 

    length() {
        let count = 0;
        for (let i = 0; i <= this.buckets.length; i++) {
            if (this.buckets[i]) {
                count += 1;
            }
        }
        console.log(count);
        return count
    }

    clear() {
        this.buckets.splice(0, this.buckets.length);
        this.buckets = new Array(this.size);
    }

    keys() {
        let keys = [];
        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i]) {
                keys.push(this.buckets[i].key)
            }
        }
        console.log(keys);
        return keys;
    }

    values() {
        let values = [];
        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i]) {
                values.push(this.buckets[i].value)
            }
        }
        console.log(values);
        return values;
    }

    entries() {
        let entries = [];
        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i]) {
                let newEntry = `${this.buckets[i].key}, ${this.buckets[i].value}`;
                entries.push(newEntry);
            }
        }
        console.log(entries);
        return entries;
    }
}

let test = new HashMap;
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('donkey', 'magenta')
test.set('monkey', 'brown');
test.set('notebook', 'blue');
test.set('orange', 'orange');
test.set('pencil', 'yellow');
test.set('queen', 'purple');
test.set('robot', 'silver');
test.set('snake', 'green');
test.set('tree', 'green');
test.set('umbrella', 'red');
test.set('violin', 'brown');

console.log(test);