import { Node } from './Node'

export const root = new Node('root')
const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')
const e = new Node('E')
const f = new Node('F')
const g = new Node('G')

root.left = a
root.right = b
a.left = d
a.right = c
b.left = g
b.right = e
d.left = f
