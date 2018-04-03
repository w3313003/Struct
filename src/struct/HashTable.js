/*
 * @Author: ZJ 
 * @Date: 2018-04-03 15:37:52 
 * @Last Modified by: ZJ
 * @Last Modified time: 2018-04-03 17:24:19
 */

 class HashTable {
    constructor() {
        this._table = []
    }
    loseloseHashCode(key) {
        let hash = 0;
        for(let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    }
    put(key, value) {
        const position = this.loseloseHashCode(key);
        this._table[position] = value;
        console.log(`${position}-${key}`)
    }
    get(key) {
        return this._table[this.loseloseHashCode(key)]
    }
    remove(key) {
        this._table[this.loseloseHashCode(key)] = undefined;
    }
 };

 let table = new HashTable();
 table.put('name', 'zj');
 table.put('age', 34);
console.log(table.get('name'));
console.log(table)