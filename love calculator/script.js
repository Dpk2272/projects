let name1 = document.getElementById('name1')
let name2 = document.getElementById('name2')
let score = document.getElementById('score')




function init(){
    if(!name1.value || !name2.value) return
   let result = calculateLoveBetween(name1.value , name2.value)
   score.innerHTML = result+"%"
   const jsConfetti = new JSConfetti()
   jsConfetti.addConfetti({
    emojis: ['❤️'],
    emojiSize: 50,
    confettiNumber: 100,
  })
}



function calculateLoveBetween(name1,name2){
    let combineNames = name1+name2

    let uniqNames = [... new Set(combineNames.toLowerCase())]

    let total = 0

    for(var char of uniqNames){
        total += char.charCodeAt()
    }

    let loverPercentage = (total % 100) + 1

    return loverPercentage
}