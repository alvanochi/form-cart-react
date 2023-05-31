import FormLogin from "../components/Elements/Fragments/FormLogin";
import AuthLayout from "../components/Elements/Layout/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout title="Login" type="login">
      <FormLogin />
    </AuthLayout>
  );
};
export default LoginPage;
