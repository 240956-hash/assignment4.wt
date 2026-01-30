
PART 1. PROJECT OVERVIEW

This project is a RESTful API built using Node.js, Express, and MongoDB.
The main goal of the assignment was to refactor the previous project into a scalable MVC architecture and implement professional security features such as authentication and role-based access control.

The application allows managing two related objects: Posts and Comments.
Authentication is implemented using JSON Web Tokens (JWT), and access to protected routes is controlled using user roles.


PART 2. PROJECT ARCHITECTURE (MVC PATTERN)

The project follows the Model-View-Controller (MVC) architectural pattern.

Models are responsible for defining the database structure using Mongoose schemas.
Routes define the available API endpoints.
Controllers contain the business logic and database operations.
Middleware is used for authentication, authorization, and request validation.

The server.js file is kept minimal and is only responsible for initializing the server, connecting to the database, and registering routes.

This structure improves code readability, maintainability, and scalability.


PART 3. DATABASE MODELS

The application uses three main models.

User model:
The User model contains email, password, and role fields.
Passwords are hashed using bcrypt before being stored in the database.
The role field is used for role-based access control and can be either "user" or "admin".

Post model:
The Post model represents the primary object of the application.
It contains a title and content.

Comment model:
The Comment model represents the secondary object.
Each comment contains text and a reference to a Post using MongoDB ObjectId.
This creates a relationship between posts and comments.



PART 4. AUTHENTICATION AND SECURITY

Authentication is implemented using JSON Web Tokens (JWT).

Users can register and log in using email and password.
After successful login, the server returns a JWT token.
This token must be included in the Authorization header when accessing protected routes.

Passwords are never stored in plain text.
They are hashed using bcrypt to ensure security.



PART 5. ROLE-BASED ACCESS CONTROL (RBAC)

Role-based access control is implemented using middleware.

There are two roles in the system:

* user
* admin

Public access:
GET (read) requests are publicly accessible to all users.

Protected access:
POST, PUT, and DELETE requests require authentication.

Admin-only access:
Only users with the "admin" role can create, update, or delete posts and comments.

If a regular user attempts to access admin-only routes, the server responds with a 403 Forbidden error.
This behavior was verified and tested using Postman.



PART 6. CRUD OPERATIONS

Both Post and Comment objects support full CRUD operations.

Posts:

* Create post (admin only)
* Read posts (public)
* Update post (admin only)
* Delete post (admin only)

Comments:

* Create comment (admin only)
* Read comments (public)
* Update comment (admin only)
* Delete comment (admin only)

Comments are linked to posts through ObjectId references, ensuring relational behavior within MongoDB.



PART 7. API TESTING WITH POSTMAN

All API endpoints were tested using Postman.

The Postman collection includes:

* User registration
* User login and JWT generation
* Failed requests from users without admin role (403 Forbidden)
* Successful requests from admin users (200 OK)
* CRUD operations for posts and comments

This confirms that authentication and role-based access control are working correctly.


PART 8. CONCLUSION

This project successfully implements a clean MVC architecture, secure authentication, and role-based authorization.
It demonstrates proper separation of concerns, secure password handling, JWT-based authentication, and relational data modeling using MongoDB.

The project fully meets the requirements of Assignment 4.
