import AuthLayout3 from "@/layouts3/AuthLayout3";
import {useState} from "react";
const LoginPage = () => {
    const [username, setUsername] =
        useState("");
    const [password, setPassword] = useState("");
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
    return(
        <AuthLayout3 headerText={"Login"}>
            <div className={"flex flex-col gap-8"}>
                <div>
                    <label className={"text-color-1 font-bold  w-full"}>
                        User name
                    </label>
                    <input
                        className={"rounded-lg mx-3 w-full p-2 bg-white shadow-md shadow-black hover:shadow-black hover:shadow-inner"}
                        type={"text"}
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder="email/name"
                    />
                </div>
                <div>
                    <label className={"text-color-1 font-bold  w-full"}>
                        Password
                    </label>
                    <input
                        className={"rounded-lg mx-3 w-full p-2 bg-white shadow-md shadow-black hover:shadow-inner hover:shadow-black"}
                        type={"password"}
                        value={password}
                        onChange={handlePassword}
                        placeholder="password"
                    />
                </div>

                <div className={"flex flex-row items-center"}>
                    <a href={"/signup"}
                       className={"py-3 px-7 ml-9 mr-3 w-2/6 mt-3 bg-color-6 shadow-sm shadow-black rounded-xl text-2xl font-bold hover:shadow-inner hover:shadow-black text-color-5" +
                           ""}>
                        Login
                    </a>
                    <p className={"text-2xl ml-2 w-1/12 pr-2 text-color-1"}> / </p>
                    <a className={"border-r-amber-400 py-3 px-7 w-2/5 mt-3 mr-3 rounded-xl text-2xl font-bold text-color-1 hover:text-color-6"}
                       href="">
                        Sign up
                    </a>
                </div>
            </div>
        </AuthLayout3>

    )
}
export default LoginPage;
