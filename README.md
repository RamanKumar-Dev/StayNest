# 🏡 StayNest

StayNest is a full-stack MERN-based travel accommodation platform that allows users to discover, create, and manage short-term stay listings. Inspired by modern vacation rental platforms, StayNest provides a secure and user-friendly experience with authentication, reviews, image uploads, geolocation, and cloud deployment.

---

## 🚀 Features

### User Authentication & Authorization

* User registration and login
* Secure password hashing using Passport.js
* Session-based authentication
* Authorization for listings and reviews
* Protected routes for authenticated users

### Listing Management

* Create, edit, and delete stay listings
* Upload listing images
* View detailed accommodation information
* Listing ownership management

### Reviews & Ratings

* Add reviews and ratings for listings
* Delete reviews
* Review ownership verification
* Validation for review submissions

### Search & Discovery

* Search accommodations
* Filter listings
* Responsive browsing experience

### Maps & Geolocation

* Geocoding support
* Store listing coordinates
* Interactive map markers for locations

### Error Handling & Validation

* Server-side validation using Joi
* Custom error handling middleware
* Flash messages for user feedback
* Secure session management

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Bootstrap / Tailwind CSS
* EJS Templates

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* Passport.js
* Express Session
* Cookies

### Cloud Services

* Cloudinary (Image Storage)
* MongoDB Atlas (Database Hosting)

### Deployment

* Render

---

## 📂 Project Structure

```bash
StayNest/
│
├── controllers/
├── models/
├── routes/
├── views/
├── public/
├── middleware/
├── utils/
├── cloudConfig/
├── app.js
├── schema.js
└── package.json
```

## ⚙️ Installation & Setup

### Clone Repository

```bash
git clone https://github.com/RamanKumar-Dev/StayNest.git
cd StayNest
```

### Install Dependencies

```bash
npm install
```

### Create Environment Variables

Create a `.env` file in the root directory:

```env
ATLASDB_URL=your_mongodb_connection_string

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

SECRET=your_session_secret
```

### Run the Application

```bash
npm start
```

or

```bash
nodemon app.js
```

Application will run on:

```bash
http://localhost:8080
```

---

<!-- ## 📸 Screenshots

Add screenshots of:

* Home Page
* Listing Details Page
* Create Listing Page
* Login Page
* Review Section
* Map Integration

Example:

```md
![Home Page](screenshots/home.png)
``` 

--- -->

## 🔒 Security Features

* Password hashing and authentication
* Session-based login management
* Authorization checks
* Protected routes
* Server-side validation
* Custom error handling

---

## 🌟 Future Enhancements

* Booking and reservation system
* Payment gateway integration
* Wishlist functionality
* User profile management
* Advanced search filters
* Real-time notifications

---

## 📚 Learning Outcomes

Through this project, I gained hands-on experience with:

* Full-Stack MERN Development
* RESTful API Design
* Authentication & Authorization
* MVC Architecture
* MongoDB Data Modeling
* Cloudinary Integration
* Geolocation Services
* Error Handling & Validation
* Deployment & Production Configuration

---

## 👨‍💻 Author

**Raman Kumar**

GitHub: https://github.com/RamanKumar-Dev

LinkedIn: https://linkedin.com/in/ramankumar115

---

## 📄 License

This project is developed for educational and portfolio purposes.
