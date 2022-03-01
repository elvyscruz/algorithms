import { root } from './Tree'

const rekur = root => {
	if(root === null) return []
	console.log('i finished -> ' + root.val)
  rekur(root.left)
  return('ok')
}


console.log(rekur(root))
