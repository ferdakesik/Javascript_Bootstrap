class Student{
    constructor(name,email){
        this.email=email;
        this.name=name;
    }
}

class Bootcamp{
    constructor(name,level,students=[]){
        this.name=name;
        this.level=level;
        this.students=students;
    }

    listStudents(){
        if(this.students.length===0){
            console.log(`No students are registered to the ${this.name} bootcamp.`)
            return false;
        }
        console.log(`The students registered in ${this.name} are: `);
        for(const studentToRegister of this.students){
            console.log(` ${studentToRegister.name} and ${studentToRegister.email} `)
            return true;
        }
    }
    registerStudent(studentToRegister){
        if(!studentToRegister||!studentToRegister.name||!studentToRegister||!studentToRegister.email){
            console.log(`invalid ${this.email} or ${this.name} `)
            return false;
        }

        for(let student of this.students){
            if(student.email===studentToRegister.email){
                console.log(`${studentToRegister.email} is already registered`)
                return false;
            }
        }

        this.students.push(studentToRegister);
        console.log(`${studentToRegister.name} has been registered for ${this.name}`)
        return true;
    }

}
//task1
testStudent = new Student('Bugs Bunny','bugs@bunny.com');
console.log(testStudent);
if(testStudent.name==='Bugs Bunny' && testStudent.email==='bugs@bunny.com'){
    console.log('TASK 1 : PASS')
}

//task2
reactBootcamp=new Bootcamp("React","Advanced");
console.log(reactBootcamp);
if(reactBootcamp.name==='React'&& reactBootcamp.level==='Advanced'
&& Array.isArray(reactBootcamp.students)&&reactBootcamp.students.length===0){
    console.log('TASK 2 : PASS')
}

//task3
const runTest=(bootcamp,student)=>{
    const attemptOne=bootcamp.registerStudent(student);
    const attemptTwo=bootcamp.registerStudent(student);
    const attemptThree=bootcamp.registerStudent(new Student("Babs Bunny"));
    if(attemptOne && !attemptTwo && !attemptThree){
        console.log("Task 3 : pass");
    }
    //task4

bootcamp.registerStudent(new Student('Babs Bunny','babs@bunny.com'));
if(bootcamp.listStudents()){
    console.log("TASK 4 : PASS 1/2");
}
bootcamp.students=[];
if(!bootcamp.listStudents()){
    console.log("TASK 4: PASS 2/2")

}


};

runTest(reactBootcamp,testStudent);