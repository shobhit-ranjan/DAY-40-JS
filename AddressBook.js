
console.log("ADDRESS BOOK !");

const prompt = require('prompt-sync')();
const firstname = prompt('Enter Your FirstName ');
const lastname = prompt('Enter Your Lastname ');
const address = prompt('Enter Your Address ');
const city = prompt('Enter Your City ');
const state = prompt('Enter Your state ');
const zipcode = prompt('Enter Your pincode ');
const phoneNumber = prompt('Enter Your phnumber ');
const emailId= prompt('Enter Your mailid ');

const addressbook =[];

//addressbook.push(firstname,lastname,address,city,state,zipcode,phoneNumber,emailId);



function firstnameW(firstname){
    const fnamepattern = RegExp('^[A-Z]{1}[a-z]{3,}$');
    if(fnamepattern.test(firstname))
      {
          addressbook.push(firstname);
      }
      else
      {
          console.log("Wrong format");
      }
}
function lastnameW(lastname){
    const lnameoattern = RegExp('^[A-Z]{1}[a-z]{3,}$');
    if(lnameoattern.test(lastname))
      {
          addressbook.push(lastname);
      }
      else
      {
          console.log("Wrong format");
      }
}

function addressW(address){
    const addrsspattern = RegExp('^[A-Z]{1}[a-z]{4,}$');
    if(addrsspattern.test(address))
      {
          addressbook.push(address);
      }
      else
      {
          console.log("Wrong format");
      }
}

function cityW(city){
    const citypattern = RegExp('^[A-Z]{1}[a-z]{4,}$');
    if(citypattern.test(city))
      {
          addressbook.push(city);
      }
      else
      {
          console.log("Wrong format");
      }
}

function stateW(state){
    const statepattern = RegExp('^[A-Z]{1}[a-z]{4,}$');
    if(statepattern.test(state))
      {
          addressbook.push(state);
      }
      else
      {
          console.log("Wrong format");
      }
    
   return false
}
function phoneW(phoneNumber){
    const phonenupattern= RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$');
    
    if(phonenupattern.test(phoneNumber))
    {
        addressbook.push(phoneNumber);
    }
    else
    {
        console.log("Wrong format");
    }
    
  }
  function emailW(emailId){
    const emailigpattern = RegExp(/^[a-z1-9]+@[a-z1-9]+[.][a-z]+$/)
       
    if(emailigpattern.test(emailId))
    {
        addressbook.push(emailId);
    }
    else
    {
        console.log("Wrong format");
    }
  }

firstnameW();
lastnameW();
addressW();
cityW();
stateW();
phoneW();
emailW();
   // UPDATE NAME
 let name = (addressbook).filter(() => addressbook.firstname == 'Shobhit');
 
  if (name) {
    name[0].firstname = 'Himashu';
    name[2].address = 'Varanasi';
  }
  console.log("After  update " + name);


  //PERSON IS THERE OR NOT
const place = addressbook.filter((any) => any.city == 'Allahahabd');
console.log("yes person wfrom " + place + " is there there in oue history");


// SORT BY FIRST NAME

const sortedaddressbook = addressbook.sort();
console.log("AFTER SORTING " + sortedaddressbook);


// TOTAL NUMBER OF CONTANCT


const total = addressbook.length;
console.log("We have total of  " + total + "In your record");



// DELETE THE FIRST NAME

const del = addressbook.shift();
console.log(" after removal of first name " + del);






console.log(addressbook);