const numbers = [
  { id: 1, letter: 'un' }, 
  { id: 2, letter: 'deux' }, 
  { id: 3, letter: 'trois' }, 
  { id: 4, letter: 'quatre' }, 
  { id: 5, letter: 'cinq' }, 
  { id: 6, letter: 'six' }, 
  { id: 7, letter: 'sept' }, 
  { id: 8, letter: 'huit' }, 
  { id: 9, letter: 'neuf' }, 
  { id: 10, letter: 'dix' }
]
const children = ['Julie', 'Benjamin', 'Thomas', 'Manon', 'Anaïs']

let childObject = { name: '' }
let scores = []

for (let i = 0; i < children.length; i++) {
  let newChild = Object.assign({}, childObject)
  newChild.name = children[i]
  console.log(`${newChild.name} dit :`)
  
  let count
  for (count = 0; count < numbers.length; count++) {
    let newNumbers = JSON.parse(JSON.stringify(numbers))
    console.log(`- ${newNumbers.splice(count, 1)[0].letter}`)
  }

  scores.push({ child: newChild, count: count })
}

console.log('Résultat :')
for (score of scores) {
  console.log(`- ${score.child.name} sait compter jusqu'à ${score.count}.`)
}
