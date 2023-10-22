# App-de-los-restaurantes
UpRate application is a React-based single page application that dynamically customizes content based on the provided ID in the URL. It offers a personalized user experience with smooth animations. The app collects and stores user feedback in a database using a dedicated API, the same that provides with the photos and questions.

<img src="https://github.com/UO283428/App-de-los-restaurantes/assets/74626888/b7977984-8de2-43cc-9c9c-7ea9b5d0d941" width="300" height="auto" alt="Screenshot 1">
<img src="https://github.com/UO283428/App-de-los-restaurantes/assets/74626888/84087ead-b9ff-42f5-b1be-3763d2971d21" width="300" height="auto" alt="Screenshot 3">
<img src="https://github.com/UO283428/App-de-los-restaurantes/assets/74626888/147d3e72-f3b0-4d7c-8eac-b976a8629177" width="300" height="auto" alt="Screenshot 2">


This is not a finished proyect.


This documentation is inaccurate and outdated.
# Introduction and Goals:

UpRate is a SaaS (Software As a Service) platform designed to enable businesses to manage and improve their customer ratings and reviews on external platforms such as Google Maps, TripAdvisor, and Yelp. By allowing customers to give negative feedback directly to business owners and positive feedback on public platforms, we strive to create a beneficial environment for both business owners and customers. 

•	Business Goals: Improve feedback management and online ratings, foster better customer relations, boost reputation.
•	User Goals: Provide honest feedback, contribute to business improvement, get better service.
•	Technical Goals: Create a responsive, user-friendly, visually appealing application that prioritizes user experience.


# Constraints:

•	Compliance with GDPR and other data protection laws.
•	Responsive and mobile-friendly design.
•	Stack: Node.js, Express.js, React.js, MySQL (20i).
•	Deployment on 20i platform.


# Context and Scope:

The system interfaces with external review platforms like Google Maps, TripAdvisor, Yelp for retrieving and posting reviews. There are two primary user roles - business owners who create profiles and manage feedback, and customers who provide reviews. 


# Solution Strategy:

We will use the MERN stack (with MySQL replacing MongoDB) for application development. React.js will handle the frontend, Node.js and Express.js for the backend, and MySQL for the database. The application will be hosted on the 20i platform.

1.	User: This entity represents the users who have a business. The attributes could include:
•	UserID (Primary Key)
•	UserName
•	Email (Optional)
•	Password (its hash)

2.	Business: This entity represents the businesses that users own. The attributes could include:
•	BusinessID (Primary Key)
•	UserID (Foreign Key)
•	BusinessName
•	BusinessLogo
•	BusinessPhoto
•	Links (External review platform URLs)

3.	Review: This entity represents the reviews that users leave. The attributes could include:
•	ReviewID (Primary Key)
•	BusinessID (Foreign Key)
•	UserID (Foreign Key)
•	StarRating
•	Feedback

The relationships would be:

•	User - Business: One-to-Many (one user can own multiple businesses)
•	User - Review: One-to-Many (one user can leave multiple reviews)
•	Business - Review: One-to-Many (one business can have multiple reviews)



# Building Block View:

Our application is composed of the following main building blocks:

•	Frontend: BusinessProfile, UserReviews, OwnerDashboard, Login components.
•	Backend: controllers, models, routes, services, middleware, and utils.
•	Database: MySQL database storing business owner and review data.


# Runtime View:

Major scenarios like user login, posting a review, and creating a business profile will be depicted using sequence diagrams, showing the interaction between the different components of our application.


# Deployment View:

The application will be deployed in a Linux environment hosted on the 20i platform. The backend, frontend, and MySQL database will all be hosted on the same platform but may be on separate instances for scaling purposes.


# Cross-cutting Concepts:

The system will incorporate security measures such as data encryption and secure HTTP. Error handling will be implemented across the system to ensure stability and data integrity.


# Architectural Decisions:

•	Decision to use MERN stack: This allows us to have a unified language (JavaScript) across the stack, and React offers a robust framework for building interactive UIs.
•	Decision to use MySQL: A relational database is more suited for our data model and MySQL is a well-supported, robust solution. Constraint from the service provider but wanted a relational data base.


# Quality Requirements:

•	Performance: The application should load quickly and perform smoothly.
•	Usability: The application should be intuitive and easy to use.
•	Security: Data protection and privacy should be assured at all times.
•	Availability: The service should be available with minimum downtime.

# Risks and Technical Debt:

•	Technical Debt: If we need to rush certain features, we may accrue technical debt that will need to be addressed in future iterations.
•	Risks: Data breaches, non-compliance with legal requirements, service downtime.

# Glossary:

•	SaaS: Software as a Service.
•	MERN: MongoDB, Express, React, Node.js stack.
•	GDPR: General Data Protection Regulation.
