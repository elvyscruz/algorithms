import { Node } from './Node'
import { root } from './Tree'

const countHeight = (head: Node) => {
	if (head === null) return 0

return 1 + Math.max(countHeight(head.left),countHeight(head.right))
}

console.log(countHeight(root))
