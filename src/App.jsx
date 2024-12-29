import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'
import AddProduct from './components/AddProduct'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </main>
    </div>
  )
}

export default App