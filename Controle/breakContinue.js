const nums = [10,26,37,48,59,6,7,8,9,10]
for (x in nums){
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}
for (y in nums){
    if (y == 5) {
        continue // interrompe e vai pra proxima repetição
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: for ( a in nums) {
         for (b in nums){
         if ( a == 2 && b == 3) break externo
         console.log(`Par = ${a}, ${b}`)
    }
}

console.log('Fim!')
