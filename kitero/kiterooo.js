class Student {
    constructor(name)
    {
        this.name = name
        this.askedQuestionNum = 0
        askQuestion()
        {
            this.askedQuestionNum++
        }
    }
    
}


class StudentWithWork extends Student{
    constructor(name)
    {
        super(name)
        this.workDone = 0
    }
    doWork()
    {
        this.workDone++
    }
}

const stu1 = new Student("sigma")
stu1.askQuestion()
console.log(stu1)

const stu2 = new StudentWithWork("a")
stu2.doWork()
console.log(stu2)