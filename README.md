# virtusa_assignment
NodeJS Assignment Virtusa

How to run application

run:-
docker-compose up --build -d

then there is 3 routes

Note:- include Authorization header in all requests
Header:-
Authorization :- somesupersecretsomesupersecrets

1:- create user
route:- http://localhost:8081/user/create-user

Body:- {
	"email":"rajesh@tatrasdata1.com",
	"firstname": "Rajesh1",
	"lastname": "Patel",
	"address": "Green Park New Delhi"
}

Method:- Post

2:- list all users
route:- http://localhost:8081/user/users
Method:- Get

3:- get single user
route:- http://localhost:8081/user/<userId>
Method:- Get
