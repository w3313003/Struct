/*
 * @Author: ZJ 
 * @Date: 2018-04-02 15:44:08 
 * @Last Modified by: ZJ
 * @Last Modified time: 2018-04-03 09:48:55
 */

function LinkedList() {
    var Node = function (element) {
        this.element = element;
        this.next = null;
    };

    var length = 0,
        head = null;
    // 将元素加入链表尾部
    this.append = function (element) {
        var node = new Node(element),
            current;
        if (head === null) {
            head = node;
        } else {
            // 从头部开始迭代链表
            current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        };
        length++;
    };

    // 向列表的特定位置插入一个新的项。
    this.insert = function (position, element) {
        if(position >= 0 && position < length) {
            let node = new Node(element),
                current = head,
                index = 0,
                previous;
            if(position === 0) {
                node.next = current;
                head = node;
            } else {
                while(index++ < position) {
                    previous = current;
                    current = current.next;
                };
                console.group();
                    console.log(previous);
                    console.log(current);
                console.groupEnd();
                // 插入;
                node.next = current;
                previous.next = node;
            }
            length++;
            return true;
        } else {
            return false;
        }
    };
    // 从列表的特定位置移除一项。
    this.removeAt = function (position) {
        var current = head,
            previous,
            index = 0;
        if (position > -1 && position < length) {
            if (position === 0) {
                head = head.next;
            } else {
                // 迭代链表 找到指定位置
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                };

                previous.next = current.next;
            }
            length--;
            return current.element;
        } else {
            return null;
        }

    };
    // 从列表中移除项
    this.remove = function (element) {
        const index = this.indexOf(element);
        this.removeAt(index);
    };
    // 返回元素在列表中的索引。如果列表中没有该元素则返回-1。
    this.indexOf = function (element) {
        let current = head,
            index = -1;
        while(current) {
            index++;
            if(element === current.element) {
                return index;
            };
            current = current.next;
        };
        return index;
    };
    // 如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false。
    this.isEmpty = function () {
        return length === 0;
    };
    // 返回链表包含的元素个数与数组的length属性类似
    this.size = function () {
        return length;
    };
    // 由于列表项使用了Node类，就需要重写继承自JavaScript对象默认的 toString方法，让其只输出元素的值。
    this.toString = function () {
        var current = head,
            string = ''; 
        while (current) {
            string += current.element + ' '; 
            current = current.next;
        }
        return string; //{6} 
    };
    this.getHead = function () {
        return head;
    };
}

var list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.insert(2, 30);
console.log(list.getHead());
console.log(list.toString())