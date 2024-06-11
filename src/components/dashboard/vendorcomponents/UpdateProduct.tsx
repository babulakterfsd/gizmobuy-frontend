'use client';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
  const { id } = useParams();
  console.log('id', id);
  return (
    <div>
      <p>This is update product</p>
    </div>
  );
};

export default UpdateProduct;
