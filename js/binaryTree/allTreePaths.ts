import { root } from './Tree'

const allTreePaths = root  => {
if (root === null) return []
if (root.left === null && root.right === null) return [ [root.val] ] 

const paths  = []
	
const leftPath = allTreePaths(root.left)

for (let subpath of leftPath){
	paths.push([root.val, ...subpath])
}

const rightPath = allTreePaths(root.right)

for (let subpath of rightPath){
	paths.push([root.val, ...subpath])
}

return paths
}


console.log(allTreePaths(root))

