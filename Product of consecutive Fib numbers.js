
//   MySolution: https://www.codewars.com/kata/reviews/554398d646002df491000183/groups/5df18ad38841740001ccf67c

function productFib(prod){
    let i, j;
    let fibo_i, fibo_j;
    let product;
     for(i = 0, j = 1; ; i++, j++){
         fibo_i = fibo(i);
         fibo_j = fibo(j);
         product = fibo_i * fibo_j;
         if(product > prod){
           return [fibo_i, fibo_j, false]
         }
         else if(product === prod) {
           return [fibo_i, fibo_j, true]
         }
     }  
  }
  
  function fibo(number) {
    if(number === 0) return 0;
    if(number === 1) return 1;
    return fibo(number - 1) + fibo(number - 2);
  }
  
// Test.assertSimilar(productFib(4895), [55, 89, true])
// Test.assertSimilar(productFib(5895), [89, 144, false])
// Test.assertSimilar(productFib(74049690), [6765, 10946, true])
// Test.assertSimilar(productFib(84049690), [10946, 17711, false])
// Test.assertSimilar(productFib(193864606), [10946, 17711, true])
// Test.assertSimilar(productFib(447577), [610, 987, false])
// Test.assertSimilar(productFib(602070), [610, 987, true])