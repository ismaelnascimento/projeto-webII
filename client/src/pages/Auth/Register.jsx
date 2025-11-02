import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../context/Auth/useAuth";
import { useNavigate } from "react-router-dom";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const Register = () => {
  const { register, loading } = useAuth();
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Nome de usuário deve ter no mínimo 3 caracteres")
      .max(20, "Nome de usuário deve ter no máximo 20 caracteres")
      .required("Nome de usuário é obrigatório!"),
    password: Yup.string()
      .min(4, "Senha deve ter no mínimo 4 caracteres")
      .required("Senha é obrigatória!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "As senhas devem ser iguais!")
      .required("Confirmação de senha é obrigatória!"),
  });

  const onSubmit = async (data) => {
    await register(data.username, data.password, navigate);
  };

  return (
    <div className="fixed w-full h-full top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-color-bg">
      <div className="w-full max-w-md p-8">
        <h1 className="caprasimo-font text-2xl flex items-center gap-2 mb-8">
          <HugeiconsIcon
            icon={ArrowLeft01Icon}
            size={32}
            color="currentColor"
            strokeWidth={2}
            className="cursor-pointer hover:scale-95"
            onClick={() => navigate("/")}
          />
          Registrar
        </h1>
        <div className="rounded-2xl p-5 flex gap-2 font-bold flex-col bg-color-bg-light">
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            <Form className="flex flex-col gap-2">
              <label className="font-bold text-sm text-color-text-2">
                Nome de usuário
              </label>
              <ErrorMessage
                className="text-red-700"
                name="username"
                component="span"
              />
              <Field
                autoComplete="off"
                id="username"
                name="username"
                className="rounded-2xl bg-color-bg py-2 px-4 flex gap-2 font-bold flex-col"
                placeholder="Digite seu nome de usuário"
              />

              <label className="font-bold text-sm text-color-text-2">
                Senha
              </label>
              <ErrorMessage
                className="text-red-700"
                name="password"
                component="span"
              />
              <Field
                autoComplete="off"
                type="password"
                id="password"
                name="password"
                className="rounded-2xl bg-color-bg py-2 px-4 flex gap-2 font-bold flex-col"
                placeholder="Digite sua senha"
              />

              <label className="font-bold text-sm text-color-text-2">
                Confirmar Senha
              </label>
              <ErrorMessage
                className="text-red-700"
                name="confirmPassword"
                component="span"
              />
              <Field
                autoComplete="off"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="rounded-2xl bg-color-bg py-2 px-4 flex gap-2 font-bold flex-col"
                placeholder="Confirme sua senha"
              />

              <button
                type="submit"
                disabled={loading}
                className="btn-primary text-center flex items-center justify-center w-full mt-4"
              >
                {loading ? "Carregando..." : "Registrar"}
              </button>
            </Form>
          </Formik>
          <p className="text-center mt-4 text-sm">
            Já tem uma conta?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-color-primary cursor-pointer hover:underline"
            >
              Faça login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;