import { useState, useEffect } from 'react'
import { Card, CardBody, CardFooter, Image, Button, Input, Select, SelectItem } from "@nextui-org/react"
import { Link } from 'react-router-dom'
import { getProducts } from '../api'

export default function ProductList() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [search, setSearch] = useState("")
  const [sortOrder, setSortOrder] = useState("none")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const { data } = await getProducts()
      setProducts(data)
      setFilteredProducts(data)
      setLoading(false)
    } catch (error) {
      setError('Failed to fetch products')
      setLoading(false)
    }
  }

  const handleSearch = (value) => {
    setSearch(value)
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(value.toLowerCase())
    )
    setFilteredProducts(filtered)
  }

  const handleSort = (value) => {
    setSortOrder(value)
    const sorted = [...filteredProducts]
    if (value === "asc") {
      sorted.sort((a, b) => a.price - b.price)
    } else if (value === "desc") {
      sorted.sort((a, b) => b.price - a.price)
    }
    setFilteredProducts(sorted)
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <div className="space-y-6">
      <div className="flex gap-4 items-center">
        <Input
          placeholder="Search products..."
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          className="max-w-xs"
        />
        <Select 
          placeholder="Sort by price"
          onChange={(e) => handleSort(e.target.value)}
          className="max-w-xs"
        >
          <SelectItem key="none" value="none">No sorting</SelectItem>
          <SelectItem key="asc" value="asc">Price: Low to High</SelectItem>
          <SelectItem key="desc" value="desc">Price: High to Low</SelectItem>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <Card key={product._id} className="max-w-[300px]">
            <CardBody className="p-0">
              <Image
                src={product.image?.url || "https://placehold.co/300x200"}
                alt={product.name}
                className="w-full object-cover h-[200px]"
              />
            </CardBody>
            <CardFooter className="flex flex-col items-start">
              <h4 className="font-bold text-large">{product.name}</h4>
              <p className="text-default-500">${product.price}</p>
              <p className="text-small text-default-500 line-clamp-2">
                {product.description}
              </p>
              <Button
                as={Link}
                to={`/product/${product._id}`}
                color="primary"
                className="mt-2"
              >
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}