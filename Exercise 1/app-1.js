const inputA = document.getElementById("input-a")
const inputB = document.getElementById("input-b")
const btn = document.getElementById("btn")
const container = document.getElementById('container')

btn.addEventListener('click', ()=>{
    const valueA = +inputA.value
    const valueB = +inputB.value
    var numbs = []
    if(valueA ==""&& valueB==""){
        alert("Nhập số a và số b")
    }
    else if(valueA>=valueB){
        alert("Số a phải nhỏ hơn số b")
    
    }else{
        for(let i = valueA; i<=valueB; i++){
            if(Math.sqrt(i)%1==0){
                console.log(i)
                numbs.push(i)
            }
        }
        console.log(numbs)
    
        const h2 = document.createElement('h2')
        h2.innerHTML = `Cac so chinh phuong trong khoang tu ${valueA} den ${valueB}:`
        container.appendChild(h2)
        const p = document.createElement('p')
        p.innerHTML = numbs
        container.appendChild(p)
    }
})

 