import ScrollToTop from '@/components/ui/ToTop';
import { useCurrentUser } from '@/redux/features/authSlice';
import {
  RemoveCartProductFromLocalState,
  useShoppingCartProducts,
} from '@/redux/features/shoppingCartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { TCurrentUser, TProduct } from '@/types/commonTypes';
import { useState } from 'react';
import { PiEyeLight } from 'react-icons/pi';
import { RxCross2 } from 'react-icons/rx';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import NotFound from './NotFound';

const ShoppingCart = () => {
  const { id } = useParams<{ id: string }>();
  const currentUser = useAppSelector(useCurrentUser) as TCurrentUser;

  if (id !== currentUser._id) {
    return <NotFound />;
  }
  const dispatch = useAppDispatch();
  const shoppingCartProducts = useAppSelector(useShoppingCartProducts);

  const removeFromShoppingCart = (product: TProduct) => {
    dispatch(RemoveCartProductFromLocalState(product));
    toast.success('Product removed from shopping cart', {
      position: 'top-right',
      duration: 1500,
      icon: '🤔',
    });
  };

  const [productQuantities, setProductQuantities] = useState<{
    [productId: string]: number;
  }>(
    shoppingCartProducts.reduce<{ [productId: string]: number }>(
      (acc, product) => {
        acc[product._id] = 1; // Initialize each product's quantity to 1
        return acc;
      },
      {}
    )
  );

  const updateProductQuantity = (productId: string, quantity: number) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: quantity,
    }));
  };

  return (
    <div>
      <ScrollToTop />
      <div className="main-container mt-24 md:mt-28">
        {shoppingCartProducts.length > 0 ? (
          <div className="border border-gray-300 rounded">
            <h4 className="text-custom-black font-semibold py-3 px-4 lg:px-6 border border-gray-300">
              Shopping Cart
            </h4>
            <div className="relative overflow-x-auto">
              <table className="w-full text-left rtl:text-right text-pure-gray px-4 lg:px-6">
                <thead className="text-pure-gray text-xs uppercase bg-gray-100 ">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 lg:px-6 py-3 hidden lg:inline-block"
                    ></th>
                    <th
                      scope="col"
                      className="pl-2 lg:px-6 py-3 text-center lg:text-left"
                    >
                      Product
                    </th>
                    <th scope="col" className="px-4 lg:px-6 py-3 text-center">
                      Price
                    </th>
                    <th scope="col" className="px-4 lg:px-6 py-3 text-center">
                      Quantity
                    </th>
                    <th scope="col" className="px-4 lg:px-6 py-3 text-center">
                      Sub-Total
                    </th>
                    <th scope="col" className="px-4 lg:px-6 py-3 text-center">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {shoppingCartProducts.map((product: TProduct) => (
                    <tr
                      className="bg-white border-b  hover:bg-orange-50 transition-all duration-300 ease-in-out"
                      key={product._id}
                    >
                      <td className="lg:px-6 py-4 font-medium text-gray-700 whitespace-nowrap hidden lg:inline-block">
                        <img
                          src={product.displayImage}
                          alt={product.title}
                          className="w-16 h-16 object-contain"
                        />
                      </td>
                      <td className="px-3 lg:px-6 py-4 font-semibold text-pure-gray text-sm whitespace-nowrap">
                        {product?.title}
                      </td>
                      <td
                        scope="row"
                        className="lg:px-6 py-4 text-pure-gray text-sm font-semibold text-center"
                      >
                        {`$${product.price}`}
                      </td>
                      <td className="lg:px-6 py-4 flex justify-center">
                        <div className="flex justify-between items-center border border-gray-200 py-[9px] px-2 w-16 md:w-20 rounded-md">
                          <button
                            onClick={() =>
                              productQuantities[product._id] > 1
                                ? updateProductQuantity(
                                    product._id,
                                    productQuantities[product._id] - 1
                                  )
                                : null
                            }
                            className="font-medium"
                          >
                            -
                          </button>
                          <span className="text-gray-600 font-semibold">
                            {productQuantities[product._id]}
                          </span>
                          <button
                            onClick={() =>
                              updateProductQuantity(
                                product._id,
                                productQuantities[product._id] + 1
                              )
                            }
                            className="font-medium"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td
                        scope="row"
                        className="lg:px-6 py-4 text-pure-gray text-sm font-semibold text-center"
                      >
                        {`$${Math.floor(
                          product.price * productQuantities[product._id]
                        ).toFixed(2)}`}
                      </td>
                      <td className="lg:px-6 md:py-4 flex md:space-x-2 justify-center items-center mt-4 md:mt-5">
                        <Link to={`/product/${product?._id}`}>
                          <button
                            className="md:border border-gray-300 p-1 rounded-full text-orange"
                            title="view details"
                          >
                            <PiEyeLight className="md:text-orange md:text-sm " />
                          </button>
                        </Link>
                        <button
                          className="text-gray-500 p-1 text-sm"
                          title="remove from wishlist"
                          onClick={() => removeFromShoppingCart(product)}
                        >
                          <RxCross2 className="text-[22px] md:border border-gray-300 p-1 rounded-full -mt-0.5 text-orange" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-96 md:h-72 lg:h-96">
            <h4 className="text-2xl font-semibold text-custom-black">
              Your shopping cart is empty
            </h4>
            <Link to="/shop">
              <button className="bg-orange text-white py-2 px-4 rounded mt-4">
                Shop Now
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
