import { Node } from './Node'
import { root } from './Tree'

// traverse tree and return array with values

const traverse_tree = (node: Node) => {
	if(node === null) return []
		return [ 
			node.val, 
			...traverse_tree(node.left), 
			...traverse_tree(node.right)
		]
}

console.log(traverse_tree(root))
