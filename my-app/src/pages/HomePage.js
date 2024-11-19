import React, { useEffect, useState } from 'react';
import { Layout, Row, Col, Card, Typography, Button } from 'antd';
import axios from 'axios';

const { Content } = Layout;
const { Title } = Typography;

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    // Fetch products data from API
    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:8888/api/v1/product');
            setProducts(response.data); // Save products data into state
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false); // Set loading to false once data is received
        }
    };

    useEffect(() => {
        fetchProducts(); // Call fetchProducts when component is first rendered
    }, []);

    // Format the price with currency and thousands separator
    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 0,
        }).format(price);
    };

    return (
        <Layout>
            {/* Content */}
            <Content style={{ padding: '100px 200px' }}>
                <Title level={3} style={{ textAlign: 'center' }}>
                    Featured Products
                </Title>
                <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
                    {loading ? (
                        <p>Loading products...</p>
                    ) : (
                        products.map((product) => (
                            <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                                <Card
                                    hoverable
                                    cover={
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '240px' }}>
                                            <img
                                                alt={product.name}
                                                src={`http://localhost:8888/${product.image}`}
                                                style={{
                                                    width: '267px',
                                                    height: '240px',
                                                    objectFit: 'cover',
                                                }}
                                            />
                                        </div>
                                    }
                                    style={{
                                        borderRadius: '8px',
                                        border: 'none',
                                        height: '400px', // Fixed height
                                        width: '100%',
                                    }}
                                >
                                    <Card.Meta
                                        title={<span style={{ color: '#323c42' }}>{product.product_name}</span>} // Apply color to product name
                                        description={
                                            <div>
                                                <div style={{ marginBottom: '10px', fontWeight: 'bold', color: '#eb0f00', fontSize: '16px' }}>
                                                    {formatPrice(product.price)} {/* Format the price */}
                                                </div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <Button
                                                        type="link"
                                                        style={{ padding: 0 }}
                                                        onClick={() => alert(`Added ${product.product_name} to wishlist`)}
                                                    >
                                                        Add to Wishlist
                                                    </Button>
                                                    <Button
                                                        type="primary"
                                                        onClick={() => alert(`Added ${product.product_name} to cart`)}
                                                    >
                                                        Add to Cart
                                                    </Button>
                                                </div>
                                            </div>
                                        }
                                    />
                                </Card>
                            </Col>
                        ))
                    )}
                </Row>
            </Content>
        </Layout>
    );
};

export default HomePage;
