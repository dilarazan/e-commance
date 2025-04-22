import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./CategoryDetailsPage.css";

const CategoryDetailsPage = () => {
  const { id } = useParams(); // URL'den kategori ID'sini alıyoruz
  const [products, setProducts] = useState([]);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Kategorinin ID'sine göre ürünleri çekiyoruz
        const response = await fetch(`${apiUrl}/api/products/category/${id}`);
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          console.error("Ürünler alınamadı.");
        }
      } catch (error) {
        console.error("Hata:", error);
      }
    };

    fetchProducts();
  }, [apiUrl, id]);

  return (
    <div className="category-products-container">
      <h2>Ürünler</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <Link to={`/product/${product._id}`}>
              <img src={product.img?.[0]} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price.current} TL</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetailsPage;
