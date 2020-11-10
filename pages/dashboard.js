import Layout from "../components/layout";
import { AdminRoute } from "../auth/adminRoutes";

const Dashboard = () => {
  return (
    <Layout>
      <h1>Dashboard</h1>
    </Layout>
  );
};

export default AdminRoute(Dashboard);
