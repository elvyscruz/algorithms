import { root } from './Tree'

const treeLevels = (root) => {

  const queue = [{ node: root, level: 0 }]
  const results = []

  while (queue.length) {

    const { node, level } = queue.shift()

    if (results.length === level) {

      results[level] = [node.val]
    } else {
      results[level].push(node.val)
    }

    if (node.left !== null) queue.push({ node: node.left, level: level + 1 })
    if (node.right !== null) queue.push({ node: node.right, level: level + 1 })
  }

  return results
}
console.log(treeLevels(root))
