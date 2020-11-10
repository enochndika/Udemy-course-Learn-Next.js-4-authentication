import { useState, useEffect } from "react";
import Layout from "../components/layout";
import style from "../styles/login.module.css";
import useAuth from "../auth/context";
import { useRouter } from "next/router";
import { redirectFromServer } from "../auth/cookies";

const Login = () => {
  const { login, isAuthenticated } = useAuth();

  const router = useRouter();

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (isAuthenticated) router.push("/");
  }, [isAuthenticated]);

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    login(values.username, values.password);
  };
  return (
    <Layout>
      <div className={style}>
        <h1>Formulaire de connexion</h1>
        <form>
          <label htmlFor="username">Nom d'utilisateur</label>
          <br />
          <input
            className={style.input}
            type="text"
            placeholder="username"
            onChange={handleChange("username")}
          />
          <br />
          <label htmlFor="password">Mot de passe</label>
          <br />
          <input
            className={style.input}
            type="password"
            placeholder="password"
            onChange={handleChange("password")}
          />
          <br />
          <button type="submit" onClick={onSubmit} className={style.button}>
            Connexion
          </button>
        </form>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  redirectFromServer(context);

  return {
    props: {},
  };
};

export default Login;
