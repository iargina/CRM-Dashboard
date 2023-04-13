import { Navigation } from './Navigation/Navigation';
import { Product } from './Product/Product';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
      }}
    >
      <Navigation />
      <Product />
    </div>
  );
};
