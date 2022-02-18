import { Node } from './Node'

const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')
const e = new Node('E')

a.left = b
a.right = c
b.left = d
b.right = e


// traverse tree and return array with values

const traverse_tree = (node: Node) => {
	if(node === null) return []
		return [ 
			node.val, 
			...traverse_tree(node.left), 
			...traverse_tree(node.right)
		]
}


console.log(traverse_tree(a))
