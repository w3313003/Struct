/*
 * @Author: ZJ 
 * @Date: 2018-04-03 17:26:30 
 * @Last Modified by: ZJ
 * @Last Modified  time: 2018-04-04 16:20:01
 */
class BinaryTree {
	constructor(tree = []) {
		this.root = null;
		this.Node = key => {
			let obj = Object.create(null, {});
			obj.key = key;
			obj.left = null;
			obj.right = null;
			return obj;
		};
		this._init(tree);
	}
	//  初始化
	_init(tree = []) {
		if (typeof tree === 'number') {
			this.insert(tree);
		} else if (Array.isArray(tree)) {
			this.bulkInsert(tree);
		} else {
			console.error('请输入Number类型或者Array类型的参数')
		}
	}
	insert(key) {
		let newNode = this.Node(key);
		function insertNode(node, newNode) {
			if (node.key > newNode.key) {
				if (node.left === null) {
					node.left = newNode
				} else {
					insertNode(node.left, newNode)
				}
			} else {
				if (node.right === null) {
					node.right = newNode
				} else {
					insertNode(node.right, newNode)
				}
			};
		};
		if (this.root === null) {
			this.root = newNode
		} else {
			insertNode(this.root, newNode)
		}
	}
	bulkInsert(nodes) {
		nodes.forEach(key => {
			//遍历数组，插入子树
			this.insert(key);
		})
	}
	showTree() {
		//返回二叉树对象
		return this.root;
	}
	// 先序遍历 根 -> 左 -> 右
	preOrderTraverse(fn) {
		function preOrderTraverseNode(node, callback) {
			if(node !== null) {
				callback(node.key);
				preOrderTraverseNode(node.left, callback);
				preOrderTraverseNode(node.right, callback);
			}
		}
        preOrderTraverseNode(this.root, fn)
	}
	//  中序遍历 左 -> 根 -> 右
	inOrderTraverse(fn) {
		function inOrderTraverse(node, callback) {
			//  node 为null 退出递归
			if(node !== null) {
				inOrderTraverse(node.left, callback);
				callback(node.key);
				inOrderTraverse(node.right, callback);
			}
		};
		inOrderTraverse(this.root, fn)
	}
	//  后序遍历 左 -> 右 -> 根
	postOrderTraverse(fn) {
		function postOrderTraverse(node, callback) {
			postOrderTraverse(node.left, callback);
			postOrderTraverse(node.right, callback);
			callback(node.key)
		};
		postOrderTraverse(this.root, fn);
	}
	getMin() {
		let node = this.root;
		if(node){
			while(node && node.left !== null) {
				node = node.left;
			};
			return node.key
		}
	}
}
var tree = new BinaryTree([8,3,6,4,9,11,2,5,7]);

console.log(tree.showTree());
console.log(tree.getMin());