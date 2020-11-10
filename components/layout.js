import { Header } from "./header";

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

export default Layout;
