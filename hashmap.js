// if (index < 0 || index >= buckets.length) {
//     throw new Error("Trying to access index out of bound");
//   }

class HashMap {
    constructor(size = 16) {
        this.buckets = new Array(size)
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

    set(key, value) {
        this.buckets[this.hash(key)] = {key, value};
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
        this.buckets = new Array(16);
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

let hashMap = new HashMap;
hashMap.set("Carlos", "Sainz");
hashMap.set("Green", "Mamba");
hashMap.length();
console.log(hashMap);
hashMap.keys();
hashMap.values();
hashMap.entries();