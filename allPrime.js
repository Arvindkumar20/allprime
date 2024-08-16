function isPrime(n) {
    // Corner case
    if (n <= 1)
        return false;
    // Check from 2 to n-1
    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return false;
    return true;
}
// Driver Code
primeNum=[];
let n=100//enter your input
for (let i = 2; i <= n; i++) {
    if(i%2==0){
        continue;
    }
    // Check if i is prime
    if (isPrime(i)) {
primeNum.push(i);
      
    }
}
Array.from(primeNum).forEach(e=>{
    console.log(e);
})