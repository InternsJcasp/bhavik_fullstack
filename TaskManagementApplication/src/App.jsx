import { BrowserRouter } from "react-router-dom";
import { Providers } from "./app/providers";

export default function App() {
  return (
    <Providers>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Providers>
  );
}
