import { ChangeEvent, useState } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export interface Fields {
  email?: string;
  password?: string;
}

interface Props {
  error: string | null;
  login: (e: any, fields: Fields) => Promise<any>;
}

const LoginForm = ({ error, login }: Props) => {
  const [fields, setFields] = useState<Fields>({ email: undefined, password: undefined });

  const handleChangeFields = (e: ChangeEvent<HTMLInputElement>) => {
    const newFields = { ...fields, [e.currentTarget.name]: e.currentTarget.value };
    setFields(newFields);
  };

  return (
    <form className={styles.form} onSubmit={(e) => login(e, fields)}>
      <div className={styles.formGroup}>
        <label htmlFor="email">E-mail</label>
        <input
          style={error ? { borderColor: "red" } : {}}
          type="email"
          id="email"
          name="email"
          onChange={handleChangeFields}
          value={fields.email}
          placeholder="melhorcafe@hotmail.com"
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="senha">Senha</label>
        <input
          style={error ? { borderColor: "red" } : {}}
          type="password"
          id="senha"
          name="password"
          onChange={handleChangeFields}
          value={fields.password}
          placeholder="******"
        />
      </div>

      <div className={styles.buttons}>
        <Link to="/">Esqueci minha senha</Link>
        <button type="submit" className={styles.button}>
          ACESSAR
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
