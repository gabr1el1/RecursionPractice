function fibs(n){
    
    
    if(n<1){
        return [0]
    }else if(n<=2){
        return [0,1]
    }else{
        let fibs = [0,1]
        for(let i=2;i<=n-1;i++){
            fibs.push(fibs[i-1]+fibs[i-2])
        }
        return fibs;
    }
}

console.log(fibs(8));

/*
fibsRec n
si n es 1 retorna [0] si es 2 retorna [0,1]
si no 
obten el array anterior fibsRec(n-1)
y retorna anterior + [anterior[n-2] + anterior[n-3]]

PRUEBA
fibsRec 4
    anterior = fibsRec(3)
                anterior = fibsRec(2)
                            return [0,1]
                return [0,1,1+0]
    return [0,0,1,1]

*/

function fibsRec(n){
    console.log('This was printed recursively');
    if(n==1){
        return [0]
    }else if(n==2){
        return [0,1]
    }else{
        prevArr = fibsRec(n-1)
        return prevArr.concat(prevArr[n-2] + prevArr[n-3])
    }
}

console.log(fibsRec(8));

