function findMiddle(firstIndex, endIndex) {
  return Math.floor((firstIndex + endIndex) / 2);
}

function merge(arr, start, middle, end) {
  const A1 = arr.slice(start, middle);
  const A2 = arr.slice(middle, end);
  A1.push(Number.MAX_SAFE_INTEGER);
  A2.push(Number.MAX_SAFE_INTEGER);

  for (let i = start, j = 0, k = 0; i < end; i++) {
    if (A1[j] < A2[k]) {
      arr[i] = A1[j];
      j++;
    } else {
      arr[i] = A2[k];
      k++;
    }
  }
}

function merge_sort(arr, start = 0, end) {
  end = end || arr.length;
  if (end - start === 1) {
    return;
  }
  const middle = findMiddle(start, end);
  merge_sort(arr, start, middle);
  merge_sort(arr, middle, end);
  merge(arr, start, middle, end);

  return arr;
}


const arr = [2,24,12,17,1,7,3,5,72,53];
console.log(merge_sort(arr));