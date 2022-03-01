import { Node } from './Node'
import { root } from './Tree'

const treeValueCount = (head: Node, target: string) => {
	if (head === null) return 0
	const match = head.val === target ? 1 : 0
	
	return match + 
		treeValueCount(head.left,target) + 
		treeValueCount(head.right,target)
}

console.log(treeValueCount(root,'F'))
