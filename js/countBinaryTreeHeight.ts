import { Node } from './Node'

const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')
const e = new Node('E')
const f = new Node('F')
const g = new Node('G')


a.left = b
a.right = c
b.left = d
b.right = e
d.left = f
c.right = g

const countHeight = (head: Node) => {
	if (head === null) return 0

return 1 + Math.max(countHeight(head.left),countHeight(head.right))
}

console.log(countHeight(a))
