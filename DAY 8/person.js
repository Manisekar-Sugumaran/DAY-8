class person{
    constructor(firstname,lastname,email,phoneno,state,country){
        this.firstname=firstname;
        this.lastname=lastname;
        this.email=email;
        this.phoneno=phoneno;
        this.state=state;
        this.country=country;
        this.output=function(){
        console.log(
        `Firstname: ${this.firstname}
        Lastname: ${this.lastname}
        E-mail: ${this.email}
        Phoneno:${this.phoneno}
        State:${this.state}
        Country:${this.country}`        
            );
        }
    }
}
var person1=new person("Manisekar","Sugumaran","mani.bio.197@gmail.com",0000000000,"TN","India");
var person2=new person("Arunkumar","Sugumaran","arun.bio.197@gmail.com",1111111111,"TN","India");
person1.output();
person2.output();