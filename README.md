
<img src="https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg?fit=1600%2C1067&ssl=1" width="1000" height="400">


# FOODFLOW API 🍔

## Introduction 📄 

The FoodFlow API is designed to facilitate food donations by connecting supermarkets, restaurants with individuals and organizations in need. The API allows users to interact with entities such as users, opinions, donors, addresses and food donations. 

It supports CRUD operations for managing data, including user information and feedback. Built using Node.js, the API integrates with a PostgreSQL database and is deployed to ensure accessibility and scalability. The system aims to streamline the food donation process, promote sustainability, and reduce food waste by efficiently connecting donors with recipients.



Link Deploy: https://api-foodflow.onrender.com



## Technologies used💻

* Node.js
* Express
* JavaScript
* PostgreSQL
* Render (for deployment)
* UUID (for generating unique IDs)
* Multer
* Path


## Project Structure📁
- **server.js/**: application server.
- **src/routes/.js**: route configuration files.
- **src/controllers/**: request control logic files.
- **src/models/**: files that define data models.
- **src/database/**: database connection configuration.
- **src/config/**: Multer configuration and Relationships.


## Project Settings🔧 

### Prerequisite
* Node.js installed
* npm (Node Package Manager) or yarn

### Installation
1. Clone the repo
```bash
https://github.com/andreirce/api-foodflow.git
```

2. Install dependencies
```bash
npm i
```
3. To start the development server, use:
```bash
npm start
```
