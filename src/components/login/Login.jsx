import { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import upload from "../../lib/upload";
import Notification from "../notification/Notification";

const Login = () => {
  const [avatar, setAvatar] = useState({ file: null, url: "", });
  const [loading, setLoading] = useState(false);


  const handleAvatar = (e) => {
    setAvatar({
      file: e.target.files[0],
      url: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err)
      toast.error(err.message);
    } finally {
      setLoading(false);
    }

  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);
    if (!username || !email || !password)
      return toast.warn("Please enter inputs!");
    if (!avatar.file) return toast.warn("Please upload an avatar!");
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const imgUrl = await upload(avatar.file)
      await setDoc(doc(db, "users", res.user.uid), {
        username: username,
        email,
        avatar: imgUrl,
        id: res.user.uid,
        blocked: [],
      });
      toast.success("account created!You can login now.")
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
    finally {
      setLoading(false);
    }
  };


  return (
    <div className="login">
      <div className="item">
        <h2>Welcome</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Email" name="email" />
          <input type="text" placeholder="Password" name="password" />
          <button disabled={loading}>{loading ? "Loading..." : "Sig In"}</button>
        </form>
      </div>
      <div className="separator"></div>

      <div className="item">
        <h2>Create An Account</h2>
        <form onSubmit={handleRegister}>
          <label htmlFor="file">
            <img src={avatar.url || "avatar.png"} alt="" />
            Upload An image
          </label>
          <input
            type="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
            name="username"
            id="file"
          />
          <input type="text" placeholder="Username" name="username" />
          <input type="text" placeholder="Email" name="email" />
          <input type="text" placeholder="Password" name="password" />
          <button disabled={loading}>{loading ? "Loading..." : "Sign Up"}</button>
        </form>
      </div>
      <Notification />
    </div>
  );
};

export default Login;
