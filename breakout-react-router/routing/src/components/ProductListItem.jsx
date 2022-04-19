import {useParams, useNavigate} from 'react-router-dom';
import {useEffect} from 'react';

const ProductListItem = () => {
  const params = useParams();
  const navigate = useNavigate();
  // console.log('params', params);

  useEffect(() => {
    setTimeout(() => {
      // navigate('/');
      // navigate(-1);
      navigate('/about');
      // navigate('/products/418');
    }, 3000);
  }, [navigate]);

  useEffect(() => {
    // axios.get(`/products/${params.id}`)
    //   .then((product) => {
    //     setProduct(product);
    //   });

    // getProductById(params.id);
  }, [params.id]);

  return (
    <div>
      <h2>This is the ProductListItem component #{params.id}</h2>
    </div>
  );
};

export default ProductListItem;
