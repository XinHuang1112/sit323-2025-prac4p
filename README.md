# SIT323 - Cloud Native Application Development (2025)

## Task 4.1p Overview

This is a simple calculator microservice built using Node.js and Express. It supports basic arithmetic operations: addition, subtraction, multiplication, and division.

## Tools Required

- **Git**: Version control to manage code changes.
- **Visual Studio Code**: A code editor to write and manage code.
- **Node.js**: JavaScript runtime to run the microservice.

## Task Requirements

### Part I: Requirements
- The microservice should accept requests for arithmetic operations via a REST API.
- The microservice should handle errors and provide meaningful error messages to clients.

### Part II: Instructions

1. **Set up the development environment**:
    - Install Node.js and any necessary dependencies to build and run the microservice.
   
2. **Create a new Node.js project**:
    - Initialize the project using `npm init`.
    - Install Express with the following command: `npm install express`.

3. **Design the API endpoints**:
    - Create four endpoints: `/add`, `/subtract`, `/multiply`, and `/divide`. 
    - Each endpoint should accept two query parameters (`num1` and `num2`).
  
4. **Implement the API endpoints**:
    - Use Express to create the endpoints and implement arithmetic operations.
  
5. **Handle errors**:
    - Implement error handling for invalid input or other exceptions.

## Instructions to Set Up the Microservice

1. **Clone the Repository**:
    - Clone this repository to your local machine.
    ```bash
    git clone https://github.com/XinHuang1112/sit323-2025-prac4p.git
    ```
   
2. **Navigate to the Project Directory**:
    - Change to the project directory:
    ```bash
    cd sit323-2025-prac4p
    ```
   
3. **Install Dependencies**:
    - Install the necessary dependencies using npm:
    ```bash
    npm install
    ```

4. **Run the Microservice**:
    - Start the microservice:
    ```bash
    node server.js
    ```

    - The service will be running at `http://localhost:3000`. You can test the API with the following endpoints:
        - **Addition**: `http://localhost:3000/add?num1=5&num2=3`
        - **Subtraction**: `http://localhost:3000/subtract?num1=5&num2=3`
        - **Multiplication**: `http://localhost:3000/multiply?num1=5&num2=3`
        - **Division**: `http://localhost:3000/divide?num1=5&num2=3`



## Conclusion

By following the instructions above, you should have a working Node.js microservice that performs basic arithmetic operations.
