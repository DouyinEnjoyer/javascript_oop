function Student(nev)
{
    this.name = nev
    this.askedQuestionNum = 0

}
Student.prototype.askQuestion = function()
{
    console.log("???")
    this.askedQuestionNum++
}
const stu1 = new Student("ELEGEM VAN MAR")
const stu2 = new Student("Netanyahu")
console.log(stu1)
console.log(stu2)

stu1.askQuestion()
console.log(stu1)

function StudentWithWork(nev)
{
    Student.call(this,nev)
    this.workDone = 0
}
Object.setPrototypeOf(StudentWithWork.prototype, Student.prototype)
StudentWithWork.prototype.doWork = function()
{
    console.log("fa")
    this.workDone++
}
const stu3 = new StudentWithWork("umbreon")
stu3.askQuestion()
console.log(stu3)
stu3.doWork()
console.log(stu3)
