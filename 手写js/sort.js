var arr = [3, 7, 1]

function bunbleSort () {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      let temp = arr[j]
      if (temp> arr[j + 1]) {
        arr[j] = arr[j + 1]
        arr[j+1] = temp
      }
    }
  }
  console.log(arr)
}
bunbleSort()


function quickSort (arr) {
  function swap (arr, right, left) {
    let temp = arr[right]
    arr[right] = arr[left]
    arr[left] = temp
  }
  function partition (arr, left, right) {
    let base = arr[right]
    let stopIndex = left
    for (let i = left; i < right; i++) {
      if (arr[i] <= base) {
        swap(arr, stopIndex, i)
        stopIndex++
      }
    }
    swap(arr, right, stopIndex)
    return stopIndex
  }

  function sort (arr, left, right) {
    if (left > right) return
    var storeIndex = partition(arr, left, right)
    sort(arr, left, storeIndex - 1)
    sort(arr, storeIndex + 1, right)
  }
  sort(arr, 0, arr.length - 1)
  return arr
}