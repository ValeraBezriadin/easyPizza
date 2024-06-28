"use client";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import css from "./style.module.css";
import Image from "next/image";
import eye from "@/static/eye.png";
import hidden from "@/static/hidden.png";
import { schema, IFormInput } from "@/utils/adminValidation";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { app } from "@/assets/firebaseApi";

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>({
    resolver: zodResolver(schema),
  });
  const auth = getAuth(app);
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handlerShowPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };

  const onSubmit: SubmitHandler<IFormInput> = ({ password, email }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        router.push("/admin");
      })
      .catch((error) => {
        if (error.code == "auth/invalid-credential") {
          alert("Invalid password or email");
        } else {
          alert("Try again later");
        }
        reset();
      });
  };

  return (
    <div className={css.login}>
      <form className={css.login__form} onSubmit={handleSubmit(onSubmit)}>
        <label className={css.login__label}>
          Email
          <input
            {...register("email")}
            className={css.login__email}
            placeholder="Email"
          />
          {errors.email && <p className={css.error}>{errors.email.message}</p>}
        </label>

        <label className={css.login__label}>
          Password
          <div className={css.login__inner}>
            <input
              {...register("password")}
              className={css.login__password}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <button onClick={handlerShowPassword}>
              <Image
                src={showPassword ? hidden : eye}
                alt="show password"
                width={20}
                height={20}
              />
            </button>
          </div>
          {errors.password && (
            <p className={css.error}>{errors.password.message}</p>
          )}
        </label>

        <button type="submit" className={css.login__submit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
