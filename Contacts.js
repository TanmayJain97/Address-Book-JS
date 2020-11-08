let firstNameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
let lastNameRegex = RegExp("^[A-Z]{1}[A-Za-z]{3,}$");
let addressRegex = RegExp("^.{4,}$");
let cityRegex = RegExp("^[a-zA-Z]{4,}$");
let stateRegex = RegExp("^[a-zA-Z\\s]{4,}$");
let zipCodeRegex = RegExp("^[1-9]{1}[0-9]{2}[\\s]?[0-9]{3}$");
let phoneRegex = RegExp("^[0-9]{1,}[ ][1-9]{1}[0-9]{9}$");
let emailRegex = RegExp("^[a-zA-Z0-9+_-]+([.][a-zA-Z0-9]+)*@([a-zA-Z0-9]+)([.][a-z]+)?[.][a-z]{2,}$");

class ValidationError extends Error {
    constructor(message) {
      super(message); // (1)
      this.name = "ValidationError"; // (2)
    }
}

class Contacts{
    //properties
    firstName;
    lastName;
    address;
    city;
    state;
    zipCode;
    phone;
    email;

    //constructors
    constructor(...params){
        if(firstNameRegex.test(params[0])) this.firstName = params[0];
        else throw new ValidationError("Invalid First Name: "+params[0]);

        if(lastNameRegex.test(params[1])) this.lastName = params[1];
        else throw new ValidationError("Invalid Last Name: "+params[1]);

        if(addressRegex.test(params[2])) this.address = params[2];
        else throw new ValidationError("Invalid Address: "+params[2]);
        
        if(cityRegex.test(params[3])) this.city = params[3];
        else throw new ValidationError("Invalid City: "+params[3]);
       
        if(stateRegex.test(params[4])) this.state = params[4];
        else throw new ValidationError("Invalid State: "+params[4]);
        
        if(zipCodeRegex.test(params[5])) this.zipCode = params[5];
        else throw new ValidationError("Invalid ZIP Code: "+params[5]);
    
        if(phoneRegex.test(params[6])) this.phone = params[6];
        else throw new ValidationError("Invalid Phone Number: "+params[6]);

        if(emailRegex.test(params[7])) this.email = params[7];
        else throw new ValidationError("Invalid Email: "+params[7]);
    }

    //toString method
    toString(){
        return "First Name="+this.firstName+" : Last Name="+this.lastName+" : Address="
                +this.address+" : City="+this.city+" : State="+this.state+" : ZipCode="+this.zipCode+
                " : Phone="+this.phone+" : Email="+this.email;
    }
}

//Create an obj
let contact = new Contacts("Narendra","Modi","PMOffice","NewDelhi","Delhi",114102,
                                    "9765422564","pmo@office.com");
process.stdout.write(contact.toString()+"\n");

/* let contact2 = new Contacts("Na","Modi","PMOffice","New Delhi","Delhi",114102,
                                    "9765422564","pmo@office.com");
process.stdout.write(contact2.toString());
 */

/* let contact2 = new Contacts("Narendra","Md","PMOffice","New Delhi","Delhi",114102,
                                    "9765422564","pmo@office.com");
process.stdout.write(contact2.toString());
 */

/* let contact2 = new Contacts("Narendra","Modi","PMO","New Delhi","Delhi",114102,
                                    "9765422564","pmo@office.com");
process.stdout.write(contact2.toString());
*/

/* let contact2 = new Contacts("Narendra","Modi","PMOffice","ND","Delhi",114102,
                                    "9765422564","pmo@office.com");
process.stdout.write(contact2.toString());
*/

/* let contact2 = new Contacts("Narendra","Modi","PMOffice","New Delhi","Dh",114102,
                                    "9765422564","pmo@office.com");
process.stdout.write(contact2.toString());
 */

let contact2 = new Contacts("Narendra","Modi","PMOffice","New Delhi","Delhi",114102,
                                    "22","pmo@office.com");
process.stdout.write(contact2.toString());