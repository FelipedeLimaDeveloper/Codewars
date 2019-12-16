 function prefill(n, v = undefined) {
  //console.log(n);
    let result = [];
    if(n === 0) return [];
    if( !Number.isInteger(Number(n)) || n < 0 || isNaN(n) || !isFinite(n) || n === true || n === false ) {
      throw TypeError(n + ' is invalid');
    }
    for(n; n > 0; n--) {
      result.push(v);
    }
    return result;
  }