import { Row, Col } from 'react-bootstrap';
import { Link, useSearchParams } from 'react-router-dom';

import Paginate from '../components/Paginate';
import Product from '../components/Product';
import ProductCarousel from '../components/ProductCarousel';
import { useGetProductsQuery } from '../slices/productsApiSlice';

const HomeScreen = () => {
  const [searchParams] = useSearchParams();

  const pageNumber = searchParams.get('page') || 1;
  const keyword = searchParams.get('search') || '';

  const { data, isLoading, error } = useGetProductsQuery({
    pageNumber,
    keyword,
  });

  return (
    <>
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-light my-3">
          Go Back
        </Link>
      )}
      {isLoading ? (
        <h2>Loading..</h2>
      ) : error ? (
        <h2>{error?.data?.message || error.error}</h2>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {data.products.map((product) => (
              <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={data.pages}
            page={data.page}
            search={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
