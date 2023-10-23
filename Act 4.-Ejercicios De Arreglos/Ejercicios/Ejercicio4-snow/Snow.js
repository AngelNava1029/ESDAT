class Solution {
  colectarNieveCuadratica(list) {
    return list.reduce((acc, curr) => acc + curr, 0);
  }

  colectarNieveLineal(list) {
    let count = 0;
    for (let i = 0; i < list.length; i++) {
      if (list[i] !== 0) {
        count++;
      }
    }
    return count -1;
  }

  colectarNieveBest(list) {
    let max = 0;
    let count = 0;
    for (let i = 0; i < list.length; i++) {
      if (list[i] !== 0) {
        count++;
        max = Math.max(max, count);
      } else {
        count = 0;
      }
    }
    return max;
  }
}

export { Solution };