import ProductListItem from './ProductListItem';
import {Link, Routes, Route} from 'react-router-dom';

const ProductList = () => {
  return (
    <div>
      <h2>This is the ProductList component</h2>

      <nav>
        <Link to="1">Product #1</Link><br/>
        <Link to="2">Product #2</Link><br/>
        <Link to="3">Product #3</Link><br/>
      </nav>

      <Routes>
        <Route path=":id" element={<ProductListItem />} />
        <Route path="" element={<h3>Please choose from the list above</h3>} />
      </Routes>
    </div>
  );
};

export default ProductList;
