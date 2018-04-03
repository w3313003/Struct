class Queue {
    constructor() {
        this._item = [];
    }
    // 入列 向队列尾部添加一个（或多个）新的项。
    enqueue(element) {
        this._item.push(element);
    }
    // 出列 移除队列的第一（即排在队列最前面的）项，并返回被移除的元素。
    dequeue() {
        return this._item.shift();
    }
    // 返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何变动（不移除元素，只返回元素信息——与Stack类的peek方法非常类似）。
    front() {
        return this._item[0];
    }
    isEmpty() {
        return this._item.length === 0;
    }
    size() {
        return this._item.length;
    }
    print() {
        console.log(this._items.toString());
    }
}


class QueueElement {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

// priority

class PriorityQueue {
    constructor() {
        this._item = [];
    }
    enqueue(element, priority) {
        let queueElement = new QueueElement(element, priority);
        if (this.isEmpty()) {
            this._item.push(queueElement);
        } else {
            let added = false;
            for (let i = 0; i < this._item.length; i++) {
                if (queueElement.priority < this._item[i].priority) {
                    this._item.splice(i, 0, queueElement);
                    added = true;
                    break;
                }
            };
            if (!added) { //{5} 
                this._item.push(queueElement);
            }
        }
    }
    // 移除队列的第一（即排在队列最前面的）项，并返回被移除的元素。
    dequeue() {
        return this._item.shift();
    }
    // 返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何变动（不移除元素，只返回元素信息——与Stack类的peek方法非常类似）。
    front() {
        return this._item[0];
    }
    isEmpty() {
        return this._item.length === 0;
    }
    size() {
        return this._item.length;
    }
    print() {
        console.log(this._item.toString());
    }
}
//  优先队列
var priorityQueue = new PriorityQueue();
priorityQueue.enqueue("John", 3);
priorityQueue.enqueue("Jack", 1);
priorityQueue.enqueue("Camila", 2);
console.log(priorityQueue._item);

// 击鼓传花
function hotPotato(nameList, num) {
    var queue = new Queue();
    for (var i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i]); 
    }
    var eliminated = '';
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            console.log(3)
            queue.enqueue(queue.dequeue()); 
        }
        eliminated = queue.dequeue();
        console.log(eliminated + '在击鼓传花游戏中被淘汰。');
    }
    return queue.dequeue();
}


var names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
var winner = hotPotato(names, 37); 
console.log('胜利者' + winner); 