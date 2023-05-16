import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";

// https://github.com/react-qr-reader/react-qr-reader
const AdminDashboard = () => {
  return <div>no way, its the super secret admin dashboard</div>;
};

// shadcn ui for table  
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session?.user?.name !== "ADMIN") {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default AdminDashboard;
