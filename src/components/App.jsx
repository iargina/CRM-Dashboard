import { Navigation } from './Navigation/Navigation';
import { Table } from './Table/Table';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
      }}
    >
      <Navigation />
      <Table />
    </div>
  );
};
