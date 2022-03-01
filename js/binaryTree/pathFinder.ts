import { Node } from './Node'
import { root } from './Tree'

const pathFinder = (head: Node, target: string) => {
	if (head === null) return null

	if (head.val === target) return [ head.val ]

		const leftPath = pathFinder(head.left,target)
		if(leftPath!== null) return [ head.val, ...leftPath ]

		const rightPath = pathFinder(head.right,target)
		if(rightPath !== null) return [ head.val, ...rightPath ]

		return null
}


console.log(pathFinder(root,'F'))
