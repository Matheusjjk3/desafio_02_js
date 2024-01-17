const students = [
  {
    name: 'Matheus',
    grade1: 10,
    grade2: 9
  },
  {
    name: 'Roberto',
    grade1: 3,
    grade2: 7
  },
  {
    name: 'Rodolfo',
    grade1: 7,
    grade2: 9
  },
  {
    name: 'João',
    grade1: 6,
    grade2: 5
  },
]

 function average(grade1, grade2){
  return (grade1 + grade2) / 2
 }

 function printAverage(student){
  if (average(student.grade1, student.grade2) >= 7){
  return `
    A média do(a) aluno(a) ${student.name}, foi de: ${average(student.grade1, student.grade2)}
    Parabéns ${student.name}, você foi aprovado(a)!
    `
  } else {
    return `
    A média do(a) aluno(a) ${student.name}, foi de: ${average(student.grade1, student.grade2)}
    ${student.name}, infelizmente você foi reprovado(a).
    `
  }
 
 }
 
 for(let student of students){
  let AVGmessage = printAverage(student)
  alert(AVGmessage)
 }