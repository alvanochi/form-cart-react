import FormRegister from "../components/Elements/Fragments/FormRegister";
import AuthLayout from "../components/Elements/Layout/AuthLayout";

const RegistPage = () => {
  return (
    <AuthLayout title="Register" type="register">
      <FormRegister />
    </AuthLayout>
  );
};
export default RegistPage;
