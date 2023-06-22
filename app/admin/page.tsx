import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "app/api/auth/[...nextauth]/route";

// https://github.com/react-qr-reader/react-qr-reader
// shadcn ui for table
const AdminDashboard = () => {
  return <div>no way, its the super secret admin dashboard</div>;
};


export default AdminDashboard;
