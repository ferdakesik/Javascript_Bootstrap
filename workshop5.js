class Student{
    constructor(name, email){
        this.name=name;
        this.email=email;
    }

    getInfo(){

        return `Name : ${this.name} and email: ${this.email}`;
        
     }
   
}

class Bootcamp{
    constructor(name,level,students=[]){
        this.name=name;
        this.level=level;
        this.students=students;
    }
    registerStudent(studentToRegister){
        if (!studentToRegister|| !studentToRegister.name||!studentToRegister.email) {
            console.log('Invalid name or email');
            return false;
        }

        for (let student of this.students){
            if(student.email===studentToRegister.email){
                console.log(`${studentToRegister.email} is already registered`);
                return false;
            }
        }

        this.students.push(studentToRegister);
        console.log(`${studentToRegister.name} has been registered for ${this.name} bootcamp!`);
        return true;
    }

    listStudents(){
    if(this.students.length===0){
        console.log(`No students are registered to the ${this.name} bootcamp.`)
        return false;
    }
        console.log(`The students registered in ${this.name} are:`);
        for (const studentToRegister of this.students){
            console.log(`Name:  ${studentToRegister.name} Email:  ${studentToRegister.email}`);

        }
        return true;
    }
     getInfo(){

        return `Name : ${this.name} and Level: ${this.level}`;  
        
     }

     removeStudent(email) {
        const newStudents = this.students.filter(student => student.email !== email);
        if (newStudents.length === this.students.length) {
          console.log(`Student with email ${email} not found in ${this.name} bootcamp.`);
        } else {
          this.students = newStudents;
          console.log(`Student with email ${email} removed from ${this.name} bootcamp.`);
        }
    }
     
    }
 

    testStudent=new Student('Bugs Bunny','bugs@bunny.com');
    console.log(testStudent);
    if(testStudent.name==='Bugs Bunny'&& testStudent.email==='bugs@bunny.com'){
        console.log('TASK 1 : PASS');
    }

    //bonus-get information-2
    console.log("get info1==> " + testStudent.getInfo());

    reactBootcamp=new Bootcamp("React","Advanced");
    console.log(reactBootcamp);
    if(reactBootcamp.name==='React' && reactBootcamp.level==='Advanced' && reactBootcamp.students.length===0){
        console.log('Task 2 : PASS');
    }
    //get info-1
    console.log("get info2 ==> " +reactBootcamp.getInfo());

    const runTest = (bootcamp, student) => {
        const attemptOne = bootcamp.registerStudent(student);
        const attemptTwo = bootcamp.registerStudent(student);
        const attemptThree = bootcamp.registerStudent(new Student("Babs Bunny"));
        if ( attemptOne && !attemptTwo && !attemptThree) {
            console.log("TASK 3: PASS");
        }

    bootcamp.registerStudent(new Student('Babs Bunny', 'babs@bunny.com'));
    if (bootcamp.listStudents()) {
        console.log("TASK 4: PASS 1/2");
    }


    bootcamp.students = [];
    if (!bootcamp.listStudents()) {
        console.log("TASK 4: PASS 2/2");
    }

    //remove
    bootcamp.removeStudent('bugs@bunny.com');
    if (bootcamp.students.length === 2 &&
        !bootcamp.students.includes('bugs@bunny.com')) {
      console.log("REMOVE STUDENT TEST: PASS");
    } else {
      console.log("REMOVE STUDENT TEST: FAIL");
    }
    

};
    
runTest(reactBootcamp, testStudent);