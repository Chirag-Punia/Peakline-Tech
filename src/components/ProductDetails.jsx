import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardBody, Image } from "@nextui-org/react"
import { getProduct } from '../api'

export default function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchProduct()
  }, [id])

  const fetchProduct = async () => {
    try {
      const { data } = await getProduct(id)
      setProduct(data)
      setLoading(false)
    } catch (error) {
      setError('Failed to fetch product details')
      setLoading(false)
    }
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>
  if (!product) return <div>Product not found</div>

  return (
    <Card className="max-w-[800px] mx-auto">
      <CardBody className="flex flex-col md:flex-row gap-6">
        <Image
          src={product.image?.url || "https://placehold.co/300x200"}
          alt={product.name}
          className="w-full md:w-1/2 object-cover"
        />
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className="text-xl font-semibold">${product.price}</p>
          <p className="text-default-500">{product.description}</p>
          <p className="text-default-500">
            Stock: <span className={product.stock > 0 ? "text-success" : "text-danger"}>
              {product.stock > 0 ? `${product.stock} units available` : 'Out of stock'}
            </span>
          </p>
        </div>
      </CardBody>
    </Card>
  )
}