def max(arr):
  if len(arr) == 0:
    return None

  if len(arr) == 1:
    return arr[0]

  while len(arr) > 1:
    if (arr[0] > arr[1]):
      arr[1] = arr[0]
    return  max(arr[1:])

print(max([2,5,7,3,4,9,2,3]))