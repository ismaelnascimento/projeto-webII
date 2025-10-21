import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import api from './../services/api';

const CreatePost = () => {
    const initialValues = {
        title: "",
        posttext: "",
        username: "",
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("Você deve escrever um título!"),
        posttext: Yup.string().required("Você deve escrever uma mensagem!"),
        username: Yup.string().min(3).max(15).required("Você deve escrever um título!"),
    })

    const onSubmit = (data) => {
        api.post("/posts", data).then(response => {
            console.log(data);
            console.log("Post adicionado")
        })
    }

    return (
        <div>
            <h1>Criar post</h1>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form>
                    <label>Título</label>
                    <ErrorMessage name="title" component={"span"} />
                    <Field autoComplete="off" id="inputTitlePost" name="title" placeholder="Digite o título do post"></Field>
                    <label>O que está em sua mente?</label>
                    <ErrorMessage name="posttext" component={"span"} />
                    <Field autoComplete="off" id="inputTextPost" name="posttext" placeholder="Digite o texto do post"></Field>
                    <label>Usuário</label>
                    <ErrorMessage name="username" component={"span"} />
                    <Field autoComplete="off" id="inputUsernamePost" name="username" placeholder="Digite o usuário do post"></Field>
                    <button type={"submit"}>Postar</button>
                </Form>
            </Formik>
        </div>
    )
}

export default CreatePost;