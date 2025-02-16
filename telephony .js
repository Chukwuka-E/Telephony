class Observer {
    update(phoneNumber) {
    }
  }
  
  // this class logs the dialed phone number
  class PhoneNumberObserver extends Observer {
    update(phoneNumber) {
      console.log(`Dialed Phone Number: ${phoneNumber}`);
    }
  }
  
  // This logs a custom message when dialing
  class DialingObserver extends Observer {
    update(phoneNumber) {
      console.log(`Now Dialling ${phoneNumber}`);
    }
  }
  
  // The telephone Class
  class Telephone {
    constructor() {
      this.phoneNumbers = new Set();
      this.observers = [];
    }
    addObserver(observer) {
      this.observers.push(observer);
    }
    removeObserver(observer) {
      this.observers = this.observers.filter((obs) => obs !== observer);
    }
    notifyObservers(phoneNumber) {
      this.observers.forEach((observer) => observer.update(phoneNumber));
    }
  
    // Add a new phone number
    addPhoneNumber(phoneNumber) {
      if (!this.phoneNumbers.has(phoneNumber)) {
        this.phoneNumbers.add(phoneNumber);
        console.log(`Added Phone Number: ${phoneNumber}`);
      } else {
        console.log(`Phone Number ${phoneNumber} already exists.`);
      }
    }
  
    // Remove the existing phone number
    removePhoneNumber(phoneNumber) {
      if (this.phoneNumbers.has(phoneNumber)) {
        this.phoneNumbers.delete(phoneNumber);
        console.log(`Removed Phone Number: ${phoneNumber}`);
      } else {
        console.log(`Phone Number ${phoneNumber} not found.`);
      }
    }
    // Dial a phone number (only if it exists in the list)
    dialPhoneNumber(phoneNumber) {
      if (this.phoneNumbers.has(phoneNumber)) {
        console.log(`Dialing ${phoneNumber}...`);
        this.notifyObservers(phoneNumber);
      } else {
        console.log(`Phone Number ${phoneNumber} not found. Cannot dial.`);
      }
    }
  }
  
  // An example
  const telephone = new Telephone();
  
  const numberObserver = new PhoneNumberObserver();
  const dialingObserver = new DialingObserver();
  
  telephone.addObserver(numberObserver);
  telephone.addObserver(dialingObserver);
  
  // Add some phone numbers
  telephone.addPhoneNumber("09283424341");
  telephone.addPhoneNumber("08283424341");
  
  telephone.dialPhoneNumber("09283424341");//dial a phone number only if it exists
  
  // Remove a phone number
  telephone.removePhoneNumber("08283424341");
  
  // Try dialing the removed number (will fail)
  telephone.dialPhoneNumber("08283424341");
// Thankgod it failed 😊😊