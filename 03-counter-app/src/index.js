import { createRoot } from 'react-dom/client';
import CounterApp from './CounterApp';
import './index.css'
//import PrimeraApp from './PrimeraApp';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(<CounterApp value={0} />);