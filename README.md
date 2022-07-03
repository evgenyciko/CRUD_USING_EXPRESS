# Routing-User-Services

 Requirement :
 - Node Js 
 - Express @4.18.1
 - Postman
 - Body-parser @1.20.0
 - Ejs @3.1.8

 Instruction :
 ========================
 1. Run server with your terminal by typing "npm start" (if you use nodemon) or "node app.js"
 2. Open url localhost:9000 to your browser for open the homepage with style.![Screenshot_1](https://user-images.githubusercontent.com/104311677/177045529-aca015bc-e8bd-41cf-b14e-a165df6eaa23.png) 
 3. Click Play Now and it will automatically redirect to the suit game page.
 4. Open path localhost:9000/users with Postman using POST method and input "nama: username, pass: yourpassword" to register your account.![Screenshot_2](https://user-images.githubusercontent.com/104311677/177045697-00fb1d37-67b3-40b2-9f2e-d7373f5f65aa.png)
 5. Open path localhost:9000/login with Postman using POST method, input your name and password before or login with my static user :
    {
    nama: "Testing",
    pass: "password",
    },
    {
    nama: "Testing2",
    pass: "password2",
    },
 5. Open path localhost:9000/users/yourname with Postman using PUT method, and input the data you want to change. Example :![Screenshot_3](https://user-images.githubusercontent.com/104311677/177046033-b62f02db-204a-4501-8b10-65f1ca548f7c.png)
 6. Open path localhost:9000/users/yourname with Postman using DELETE method for delete your account. Example : ![Screenshot_4](https://user-images.githubusercontent.com/104311677/177046310-a8828c82-e328-4fa1-aa06-e1d9f28f34d4.png)
 7. Open path localhost:9000/users with Postman using GET method for see all users. Example : ![Screenshot_5](https://user-images.githubusercontent.com/104311677/177046471-2a09ceae-f434-41af-a6d8-42becfb6e1e1.png)
 8. Open path localhost:9000/users/username with Postman using GET method for see all data user. Example : ![Screenshot_6](https://user-images.githubusercontent.com/104311677/177046529-e6f1ff24-69e8-452a-8970-29a4aaf2c0a6.png)

# Note: Instruction 2 & 3 only work using browser (Chrome, Mozzila, Edge, Etc).
