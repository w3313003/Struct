/*
 * @Author: ZJ 
 * @Date: 2018-04-03 09:58:21 
 * @Last Modified by: ZJ
 * @Last Modified time: 2018-04-03 15:29:20
 */
class OwnSet {
    constructor() {
        this._item = {};
    }
    has(value) {
        return this._item.hasOwnProperty(value);
    } 
    add(value) {
        if(!this.has(value)) {
            this._item[value] = value;
            return true;
        };
        return false;
    }
    remove(value) {
        if(this.has(value)) {
            delete this._item[value];
            return true;
        };
        return false;
    }
    clear() {
        this._item = {}
    }
    size() {
        return Object.keys(this._item).length;
    }
    value() {
        return Object.keys(this._item);
    }
    union(ohterSet) {
        // add方法已经实现去重
        let newSet = new OwnSet(),
            valueList = this.value();
        for(let i = 0, len = valueList.length; i < len ; i++) {
            newSet.add(valueList[i])
        };
        valueList = ohterSet.value();
        for(let i = 0, len = valueList.length; i < len ; i++) {
            newSet.add(valueList[i])
        };
        return newSet;                                                                                        
    }
    intersection(ohterSet) {
        let newSet = new OwnSet(),
            valueList = this.value();
        for(let i = 0, len = valueList.length; i < len; i++) {
            if(ohterSet.has(valueList[i])) {
                newSet.add(valueList[i])
            }
        };
        return newSet;
    }
    difference(ohterSet) {
        let newSet = new OwnSet(),
            valueList = this.value();
        for(let i = 0, len = valueList.length; i < len; i++) {
            if(!ohterSet.has(valueList[i])) {
                newSet.add(valueList[i])
            }
        };
        valueList = ohterSet.value();
        for(let i = 0, len = valueList.length; i < len; i++) {
            if(!this.has(valueList[i])) {
                newSet.add(valueList[i])
            }
        };
        return newSet;
    }
    subset(ohterSet) {
		if (this.size() > otherSet.size()) {
			return false;
		} else {
			var values = this.values();
			for (var i = 0; i < values.length; i++) {
				if (!otherSet.has(values[i])) {
					return false;
				}
			}
		}
		return true;
    }
};

const set = new OwnSet();
set.add(4);
set.add(0);
const ohterSet = new OwnSet();
ohterSet.add(4);
ohterSet.add(32);
console.log(set.difference(ohterSet));