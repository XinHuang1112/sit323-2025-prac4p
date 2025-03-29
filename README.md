# SIT323/SIT737 - Cloud Native Application Development (2025)
## 4.2C: Enhanced Functionality for the Calculator Microservice

### Overview
In this task, I enhanced the calculator microservice from Task 4.1P. We added support for advanced arithmetic operations like exponentiation, square root, and modulo.
Additionally, I refined error handling to provide more informative error messages and ensure better usability.
---
### Part I

#### a. Additional Arithmetic Operations
Expand the capabilities of the calculator microservice by introducing support for advanced arithmetic operations such as exponentiation, square root, and modulo operations. 
You need to implement corresponding API endpoints to handle these operations, thereby enriching the functionality of the microservice and providing users with more comprehensive calculation capabilities.

#### b. Error Handling
Enhance the error handling mechanism of the microservice to deliver more informative error messages to clients. You need to refine error detection and reporting mechanisms, addressing scenarios such as invalid inputs and division by zero.
By improving error handling, students will enhance the usability and reliability of the microservice, ensuring a smoother user experience.

---
### Part II: Instructions

1. **Set up the development environment**:
    - Install Node.js and any necessary dependencies to build and run the microservice.
    - Install `express` using the following command:
      ```bash
      npm install express
      ```

2. **Create a new Node.js project**:
    - Initialize the project using `npm init` to create the `package.json` file.
    - Install the `express` library using `npm install express` to enable handling HTTP requests.

3. **Design the API endpoints on the enhanced-calculator branch**:
    - The microservice now includes the following endpoints:
      - `/add` (Addition)
      - `/subtract` (Subtraction)
      - `/multiply` (Multiplication)
      - `/divide` (Division)
      - `/sqrt` (Square Root)
      - `/mod` (Modulo)
    - Each endpoint accepts two query parameters (`num1` and `num2`), except for `/sqrt`, which only requires `num1`.

4. **Implement the API endpoints enhanced-calculator branch**:
    - I used `Express.js` to set up the endpoints, and each endpoint performs the corresponding arithmetic operation:
      - **Addition**: `num1 + num2`
      - **Subtraction**: `num1 - num2`
      - **Multiplication**: `num1 * num2`
      - **Division**: `num1 / num2` (Handles division by zero)
      - **Square Root**: `Math.sqrt(num1)` (Handles negative input)
      - **Modulo**: `num1 % num2` (Handles modulo by zero)

5. **Handle errors**:
    - I refined the error handling to cover:
      - Invalid inputs: If `num1` or `num2` is not a valid number, an error message will be returned.
      - Division by zero: For division and modulo operations, if `num2` is zero, an error is returned.
      - Negative square root: For the square root operation, if `num1` is negative, an error is returned.
      - Invalid operation: If an unsupported operation is requested, an appropriate error message is returned.

---
By following the steps above, I enhanced the functionality of the original microservice from Task 4.1P on the enhanced-calculator branch, adding advanced operations like square root and modulo, 
and improving error handling for various exceptional cases. This makes the microservice more robust and user-friendly.

### Instructions to Set Up the Microservice

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

4. **Switch to the enhanced-calculator branch**:
    - Switch to the `enhanced-calculator` branch:
    ```bash
    git checkout enhanced-calculator
    ```

5. **Run the Microservice**:
    - Start the microservice:
    ```bash
    node server.js
    ```

    - The service will be running at `http://localhost:3000`.

---

### Available API Endpoints

You can test the API with the following endpoints:

- **Addition**: `http://localhost:3000/add?num1=5&num2=3`
- **Subtraction**: `http://localhost:3000/subtract?num1=5&num2=3`
- **Multiplication**: `http://localhost:3000/multiply?num1=5&num2=3`
- **Division**: `http://localhost:3000/divide?num1=5&num2=3`
- **Square Root**: `http://localhost:3000/sqrt?num1=25`
- **Modulo**: `http://localhost:3000/mod?num1=5&num2=3`

---

### Testing for Errors

You can test how the service handles errors with the following endpoints:

- **Invalid Number (num1)**: `http://localhost:3000/add?num1=abc&num2=3`
  - This should return an error indicating that `num1` must be a number.
  
- **Invalid Number (num2)**: `http://localhost:3000/add?num1=5&num2=xyz`
  - This should return an error indicating that `num2` must be a number.

- **Division by Zero**: `http://localhost:3000/divide?num1=5&num2=0`
  - This should return an error indicating that division by zero is not allowed.

- **Square Root of Negative Number**: `http://localhost:3000/sqrt?num1=-25`
  - This should return an error indicating that you cannot take the square root of a negative number.

- **Modulo by Zero**: `http://localhost:3000/mod?num1=5&num2=0`
  - This should return an error indicating that modulo by zero is not allowed.

- **Invalid Operation**: `http://localhost:3000/square?num1=5&num2=3`
  - This should return an error indicating that the operation is invalid.
    
### Conclusion
By following the instructions above, you will have set up a robust calculator microservice with added advanced arithmetic operations like square root and modulo, and error handling for invalid inputs and edge cases. 
This microservice allows users to perform various mathematical calculations, while also providing detailed error messages to help users understand any issues with their inputs.
