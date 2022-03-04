# Team Profile Generator

A command line application to dynamically create a webpage of key employee info (names, roles, contact info).

## Built With 🧰
- HTML
- CSS
- JavaScript
- Node
- Jest
- Inquirer

## Work Completed

- [x] A command line application is set up to help a user define a working team, composed of several roles: Manager, engineer, and intern
- [x] An inquirer question series helps build employee profile information 
- [x] The information is brought in to a dynamically generated webpage that features the above information, as defined by user inputs
- [x] Information a user inputs like email and github profile links is made actionable - opening the website and/or the user default mail client
- [x] Jest tests written to validate the employee definitions


## Project Visuals :sunglasses:
### Example from Assignment
![10-object-oriented-programming-homework-demo](https://user-images.githubusercontent.com/77648727/112775165-dbf32480-8ff0-11eb-9e61-46d008bd0d72.png)

### Example Output

<img width="1156" alt="Screen Shot of Example page" src="./assets/exampleimage.PNG">

[See Video Demo of Page Generation](https://drive.google.com/file/d/1Lf8usd6Vjb711MsQqUTEGAt6guvWthZx/view)

<img width="444" alt="Screen Shot of Test" src="./assets/tests.PNG">


#### User Story 📖

> AS A manager        
> I WANT to generate a webpage that displays my team's basic info        
> SO THAT I have quick access to their emails and GitHub profiles   

#### Acceptance Criteria ✅

> GIVEN a command-line application that accepts user input        
> WHEN I am prompted for my team members and their information       
> THEN an HTML file is generated that displays a nicely formatted team roster based on user input       
> WHEN I click on an email address in the HTML       
> THEN my default email program opens and populates the TO field of the email with the address       
> WHEN I click on the GitHub username       
> THEN that GitHub profile opens in a new tab       
> WHEN I start the application       
> THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number       
> WHEN I enter the team manager’s name, employee ID, email address, and office number       
> THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team       
> WHEN I select the engineer option       
> THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu       
> WHEN I select the intern option       
> THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu       
> WHEN I decide to finish building my team       
> THEN I exit the application, and the HTML is generated             

## Acknowledgement, & Resources 🤝
### Additional Documents & Links       
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [W3 Schools](https://www.w3schools.com/jsref/jsref_class_super.asp)