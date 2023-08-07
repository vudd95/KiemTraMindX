const colorGenerate = document.getElementById("colorGenerate")
const container = document.getElementById("container")
const body = document.getElementById('body')

function getRadomHexColor(){
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i<6; i++){
        color += letters[Math.floor(Math.random()*16)]
    }
    console.log(color)
    return color
}
const a = colorGenerate.addEventListener('click', ()=>{
    const colorValue = getRadomHexColor()
    console.log("Value: " + colorValue)
    const colorBox = document.createElement("div")
    const hexColorCode = document.createElement('p')
    const copyBtn = document.createElement('button')
    colorBox.classList.add("colorBox")
    colorBox.style.backgroundColor = `${colorValue}`
    hexColorCode.innerHTML = `HexCode: ${colorValue}`
    const tryColor = document.createElement('button')
    tryColor.innerHTML = 'Try Color'
    tryColor.classList.add('btn')
    copyBtn.innerHTML = 'Copy'
    copyBtn.classList.add('btn')

    container.appendChild(colorBox)
    container.appendChild(hexColorCode)
    container.appendChild(tryColor)
    container.appendChild(copyBtn)
    tryColor.addEventListener('click', ()=>{
        body.style.backgroundColor = `${colorValue}`
    })
    console.log(body.style.backgroundColor)
})
