// 1 - Arrays

let numbers: number[] = [1, 2, 3]

console.log(numbers[2])

const names: string[] = ["igor"]

// 2 - Outra sintaxe array

const nums: Array<number> = [1, 2]
console.log(nums)

// 3 - Any

const arr1: any = [1, "tseq", 3]

console.log(arr1)

// 4 - Parametros tipados

function soma(a: number, b: number){
    console.log(a + b)
}

soma(3, 6)

// 5 - Retorno de função

function greeting(name: string): string{
    return `Olá ${name}`
}

// 6 - Função anonimas

setTimeout(function(){
    const sallary: number = 1000

    //console.log(parseFloat(sallary))

    console.log(sallary)
}, 2000)