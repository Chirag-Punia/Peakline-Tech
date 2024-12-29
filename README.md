# Product Catalog Application

A modern, full-stack product catalog application built with React, Node.js, and MongoDB. Features include product management, image uploads, search functionality, and dark mode support.

## 🚀 Features

- **Product Management**
  - View products in a responsive grid layout
  - Search products by name
  - Sort products by price
  - View detailed product information
  - Add, edit, and delete products

- **Image Handling**
  - Image upload support via Cloudinary
  - Automatic image optimization
  - Fallback to placeholder images

- **UI/UX**
  - Responsive design
  - Dark/Light mode toggle
  - Modern UI components with NextUI
  - Tailwind CSS styling

## 🛠️ Tech Stack

- **Frontend**
  - React
  - NextUI
  - Tailwind CSS
  - React Router DOM
  - Axios

- **Backend**
  - Node.js
  - Express
  - MongoDB
  - Multer
  - Cloudinary

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account
- Cloudinary account

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

\`\`\`env
PORT=5000
MONGODB_URI=your_mongodb_uri
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
\`\`\`

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd product-catalog
   ```

2. **Install dependencies**
   ```bash
   # Install frontend dependencies
   npm install

   # Install backend dependencies
   cd server
   npm install
   ```

3. **Start the development servers**
   ```bash
   # Start backend server (from server directory)
   npm start

   # Start frontend development server (from root directory)
   npm run dev
   ```

## 📁 Project Structure

```
product-catalog/
├── src/                    # Frontend source files
│   ├── components/         # React components
│   ├── api/               # API integration
│   └── assets/            # Static assets
├── server/                # Backend source files
│   ├── config/           # Configuration files
│   ├── controllers/      # Route controllers
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   └── middleware/      # Custom middleware
└── public/              # Public assets
```

## 🔑 Key Features Implementation

### Product Management
- Products are stored in MongoDB with image references in Cloudinary
- CRUD operations through RESTful API endpoints
- Real-time search and sort functionality

### Image Handling
- Images are uploaded to Cloudinary via Multer middleware
- Automatic optimization and responsive image delivery
- Secure upload handling with size and type restrictions

### Authentication (Optional)
- JWT-based authentication
- Protected routes for CRUD operations
- User role management

## 📝 API Endpoints

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

## 🎨 UI Components

- Modern, responsive navbar with dark mode toggle
- Product grid with search and sort functionality
- Detailed product view
- Add/Edit product forms with image upload

## 🔧 Configuration

### Cloudinary Setup
1. Create a Cloudinary account
2. Get API credentials
3. Add credentials to `.env` file

### MongoDB Setup
1. Create MongoDB Atlas cluster
2. Get connection string
3. Add connection string to `.env` file

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.