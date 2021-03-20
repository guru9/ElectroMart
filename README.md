## 🛒 ProShop eCommerce Platform 🔥 💟 

> eCommerce platform built with the MERN stack & Redux. 🤸

# demo  🚀 ✈️

https://electromartapp.herokuapp.com/  🏃‍♀️ 👓

## Project Screen Shot(s) 🖼️ 🛄

### Login Page

![alt text](https://github.com/guru9/ElectroMart/blob/master/blob/electromart-login.png)

### Home Page

![alt text](https://github.com/guru9/ElectroMart/blob/master/blob/electromart-home.png)

### Product Details Page

![alt text](https://github.com/guru9/ElectroMart/blob/master/blob/electromart-product-details.png)

### Cart Page

![alt text](https://github.com/guru9/ElectroMart/blob/master/blob/electromart-cart.png)

### Cart Item Removed Page

![alt text](https://github.com/guru9/ElectroMart/blob/master/blob/electromart-itemremoved.png)

### Cart Item Remove Prompt Page

![alt text](https://github.com/guru9/ElectroMart/blob/master/blob/electromart-removeitem-prompt.png)

### Profile Page

![alt text](https://github.com/guru9/ElectroMart/blob/master/blob/electromart-profile.png)

### 404 Page

![alt text](https://github.com/guru9/ElectroMart/blob/master/blob/electromart-nopage.png)

### Register Page

![alt text](https://github.com/guru9/ElectroMart/blob/master/blob/electromart-register.png)

## Features

- Authentication
- Full featured shopping cart
- Product reviews and ratings
- User profile with update
- Database seeder (products & users)
- adding to cart and remove cart items
- remove items from cart - prompt dialog
- Forms and alert message

## Features coming soon (in development)

- Top products carousel
- Product pagination
- Product search feature
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Ordered products
- Country based currencry and price rate
- Image upload

## Note on Issues

Please do not post issues here that are related to your own code when taking the course. Add those in the Udemy Q/A. If you clone THIS repo and there are issues, then you can submit

## Usage

### ES Modules in Node

We us ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.

Also, when importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error

You can also install and setup Babel if you would like

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
```

### Install Dependencies (frontend & backend)

```
npm install (for server)
install-client (for client)
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

guru@example.com (Customer)
123456

```

## License

The MIT License

Copyright (c) 2021 by Gururaj Moger.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
