# Telephone Package

## Hey there! 👋🙂 Welcome to my Telephone Package!

### The Description

I built this little JavaScript package to simulate a telephone system. It's pretty simple: the `Telephone` class helps you manage phone numbers, dial them, and let other parts of your code know when a number has been dialed. I used the observer pattern, which means you can easily hook in different "observers" to do various things when dialing occurs!

### Features

-   **Add Phone Number:** You can add new numbers to your telephone directory.
-   **Remove Phone Number:** Easily remove numbers you don't need anymore.
-   **Dial Phone Number:** Dial a number, and if it's in the directory, it will trigger notifications to all the observers.
-   **Observer Pattern:** I used the observer pattern, so you can add multiple listeners to dialing events.
-   **Customizable Observers:** Super easy to create your own observers to do custom actions when dialing happens!

## Classes

-   **`Observer`:** This is a base class for creating your own observers. It has an `update` method you'll override.
-   **`PhoneNumberObserver`:** A simple observer that logs the dialed phone number to the console.
-   **`DialingObserver`:** Another observer that logs a custom message like "Now Dialling..." when a number is dialed.
-   **`Telephone`:** This is the main class! It manages the phone numbers, observers, and dialing logic.

## Usage

### Installation

No setup needed! Just grab the code and drop it into your JavaScript project.

### Implementation

1.  **Include the Code:** Just copy the code into your project files.

2.  **Create a Telephone Instance:**

    const telephone = new Telephone();


3.  **Create Observers:**

    const numberObserver = new PhoneNumberObserver();

      const dialingObserver = new DialingObserver();


5.  **Add Observers to the Telephone Instance:**


    telephone.addObserver(numberObserver);

     telephone.addObserver(dialingObserver);


6.  **Add Phone Numbers:**


    telephone.addPhoneNumber("09283424341");

     telephone.addPhoneNumber("08283424341"); 
7.  **Dial a Phone Number:**


    telephone.dialPhoneNumber("09283424341");


8.  **Remove a Phone Number:**


    telephone.removePhoneNumber("0828342434");
### Output.
Added Phone Number: 09283424341

Added Phone Number: 08283424341

Dialing 09283424341...

Dialed Phone Number: 09283424341

Now Dialling 09283424341

Removed Phone Number: 08283424341

Phone Number 08283424341 not found. Cannot dial.

Hope you understood  . thank you😊😊

### Example Code
Hope you understood the example . thank you😊😊
