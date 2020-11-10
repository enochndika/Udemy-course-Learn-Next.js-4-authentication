import Layout from "../components/layout";
import { ProtectedRoute } from "../auth/protectedRoutes";

const Profile = () => {
  return (
    <Layout>
      <h1>Profile</h1>
    </Layout>
  );
};

export default ProtectedRoute(Profile);
