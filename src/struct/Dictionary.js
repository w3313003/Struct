class Dictionary {
    constructor() {
        this._item = {}
    }
    set(key, value) {
        this._item[key] = value;
    }
    has(key) {
        return this._item.hasOwnProperty(key);
    }
    remove(key) {
        if(this.has(key)) {
            delete this._item[key];
            return true;
        } else {
            return false;
        }
    }
    get(key) {
        return this.has(key) ? this._item[key] : undefined;
    }
    values() {
        const entrise = [];
        for(let key in this._item) {
            if(this.has(key)) {
                entrise.push(this._item[key])
            }
        };
        return entrise;
    }
    getValue() {
        return this._item;
    }
    clear() {
        return this._item = {}
    }
    keys() {
        return Object.keys(this._item);
    }
    length() {
        return this.keys().length;
    }
    getSoucre() {
        return this._item;
    }
}

const dictionary = new Dictionary();
dictionary.set('name', 34);
dictionary.set('age', 25);
console.log(dictionary.values())