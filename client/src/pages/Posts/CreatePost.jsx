import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import api from "../../services/api";
import UserInfo from "../../components/User/UserInfo";
import toast from "react-hot-toast";
import { useAuth } from "../../context/Auth/useAuth";
import { useState } from "react";
import LoadingItems from "../../components/Loading/LoadingItems";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [loading, setLoading] = useState(false);
  const { isLoggedIn, user } = useAuth();
  const navigate = useNavigate();

  const initialValues = {
    title: "",
    posttext: "",
    username: user?.username,
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Você deve escrever um título!"),
    posttext: Yup.string().required("Você deve escrever uma mensagem!"),
    // username: Yup.string()
    //   .min(3)
    //   .max(15)
    //   .required("Você deve escrever um usuário!"),
  });

  const onSubmit = (data) => {
    setLoading(true);
    api
      .post("/posts", data)
      .then((response) => {
        console.log(response);
        toast("Post adicionado com sucesso!");
        navigate("/");
      })
      .catch((e) => {
        console.log(e?.response?.data?.error);
        toast("Erro ao tentar adicionar um post");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="w-2/3 gap-8 flex flex-col p-8">
      <h1 className="caprasimo-font text-2xl">Criar post</h1>
      <div className="rounded-2xl border border-color-bg-light-2 p-5 flex gap-2 font-bold flex-col">
        {isLoggedIn && <UserInfo username={user?.username} />}
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className="flex flex-col gap-2">
            <label className="font-bold text-sm text-color-text-2">
              Título
            </label>
            <ErrorMessage
              className="text-red-700"
              name="title"
              component={"span"}
            />
            <Field
              autoComplete="off"
              id="inputTitlePost"
              name="title"
              className="rounded-2xl bg-color-bg-light py-2 px-4 flex gap-2 font-bold flex-col"
              placeholder="Digite o título do post"
            ></Field>
            <label className="font-bold text-sm text-color-text-2">
              O que está em sua mente?
            </label>
            <ErrorMessage
              className="text-red-700"
              name="posttext"
              component={"span"}
            />
            <Field
              autoComplete="off"
              id="inputTextPost"
              name="posttext"
              className="rounded-2xl bg-color-bg-light py-2 px-4 flex gap-2 font-bold flex-col"
              placeholder="Digite o texto do post"
            ></Field>
            {/* <label className="font-bold text-sm text-color-text-2">
              Usuário
            </label>
            <ErrorMessage
              className="text-red-700"
              name="username"
              component={"span"}
            />
            <Field
              autoComplete="off"
              id="inputUsernamePost"
              name="username"
              className="rounded-2xl bg-color-bg-light py-2 px-4 flex gap-2 font-bold flex-col"
              placeholder="Digite o usuário do post"
            ></Field> */}
            {loading ? (
              <LoadingItems size={"small"} />
            ) : (
              <button
                type={"submit"}
                className="btn-primary text-center flex items-center justify-center w-48 mt-2 ml-auto"
              >
                Postar
              </button>
            )}
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default CreatePost;
