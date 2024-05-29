
CRUD operation in Employee collection
API Document link: https://documenter.getpostman.com/view/34920102/2sA3QtdBRm#6306c19f-f035-44ba-87a8-e9b6a1135ad8

POST
Create new employe
http://localhost:5000/api/create
Create Employee
This endpoint allows the client to create a new employee record.

GET
http://localhost:5000/api/get/
GET /api/get/
This endpoint makes an HTTP GET request to retrieve data.


Get Employee by id
GET /api/get/{id}
This endpoint retrieves employee information based on the provided ID.


PUT
Edit Employee Request
http://localhost:5000/api/edit/6655fd632408bd94538e3568
Edit Employee Details
This endpoint allows the user to update the details of an employee.

Request Body
Emp_FirstName (string, optional): The first name of the employee.

Emp_LastName (string, optional): The last name of the employee.

Emp_email (string, optional): The email address of the employee.

Emp_Designation (string, optional): The designation of the employee