import { Outlet } from 'react-router-dom';

const AITradingBoot = () => {
  return (
    <div>
      <h1>AI Trading Boot</h1>
      <Outlet /> {/* Renders child routes like BinanceBoot */}
    </div>
  );
};

export default AITradingBoot;