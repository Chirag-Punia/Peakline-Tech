import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardBody, Input, Button, Textarea } from "@nextui-org/react"
import { createProduct } from '../api'

export default function AddProduct() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    stock: '',
    image: null
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const form = new FormData()
      form.append('name', formData.name)
      form.append('price', formData.price)
      form.append('description', formData.description)
      form.append('stock', formData.stock)
      if (formData.image) {
        form.append('image', formData.image)
      }

      await createProduct(form)
      navigate('/')
    } catch (error) {
      setError('Failed to create product')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <Card className="max-w-[600px] mx-auto">
      <CardBody>
        <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
        {error && <p className="text-danger mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Product Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            label="Price"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            required
          />
          <Textarea
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <Input
            label="Stock"
            name="stock"
            type="number"
            value={formData.stock}
            onChange={handleChange}
            required
          />
          <Input
            type="file"
            label="Product Image"
            onChange={(e) => setFormData(prev => ({
              ...prev,
              image: e.target.files[0]
            }))}
          />
          <Button 
            color="primary" 
            type="submit"
            isLoading={loading}
          >
            Add Product
          </Button>
        </form>
      </CardBody>
    </Card>
  )
}