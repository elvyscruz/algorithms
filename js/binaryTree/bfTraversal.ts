import { Node } from './Node'
import { root } from './Tree'

const traverse_tree = head => {

	const results : string[] = []
	const queue : Node[] = [ head ]
	
	while (queue.length){
		const node = queue.shift()
		results.push(node.val)
		
		if(node.left !== null) queue.push(node.left)
		if(node.right !== null) queue.push(node.right)
	} 
return results
}

console.log(traverse_tree(root))
