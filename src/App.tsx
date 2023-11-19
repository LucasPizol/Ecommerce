import "./App.scss";
import { QueryClient, QueryClientProvider } from 'react-query'
import RoutesApp from "./routes";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RoutesApp />
    </QueryClientProvider>
  );
}

export default App;
