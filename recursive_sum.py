def sum(arr):
  if len(arr) == 0 : 
    return 0

  if len(arr) == 1 :
    return arr[0]  

  while len(arr) > 1: 
    return arr[0] + sum(arr[1:]) 


nums = [0,1,2,3,4,5,6,7,8,9]
print(sum(nums))