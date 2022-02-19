import { Node } from './Node'
import { root } from './Tree'

const traverse_tree = head => {

	const results : string[] = []
	const stack : Node[] = [ head ]
	
	while (stack.length){
		const node = stack.pop()
		results.push(node.val)
		
		if(node.right !== null) stack.push(node.right)
		if(node.left !== null) stack.push(node.left)
	} 
return results
}

console.log(traverse_tree(root))
