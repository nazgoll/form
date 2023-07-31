import AuthLayout from "@/layouts/AuthLayout";
import {useState} from "react";
const Signup = () => {
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

        <AuthLayout headerText={"Sign up"}>

            <div className={"flex flex-col gap-8"}>
                <div>
                    <label className={"text-white font-bold  w-full"}>
                        User name
                    </label>
                    <input
                        className={"rounded-lg mx-3 w-full p-2 bg-white shadow-md shadow-black hover:bg-yellow-400"}
                        type={"text"}
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder="full name"
                    />
                </div>
                <div>
                    <label className={"text-white font-bold  w-full"}>
                        Email
                    </label>
                    <input
                        className={"rounded-lg mx-3 w-full p-2 bg-white shadow-md shadow-black hover:bg-yellow-400"}
                        type={"email"}
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder="email"
                    />
                </div>
                <div>
                    <label className={"text-white font-bold  w-full"}>
                        Password
                    </label>
                    <input
                        className={"rounded-lg  mx-3 w-full p-2 bg-white shadow-md shadow-black hover:bg-yellow-400 "}
                        type={"password"}
                        value={password}
                        onChange={handlePassword}
                        placeholder="password"
                    />
                </div>

                <div className={"flex flex-row items-center"}>
                    <a className={"py-3 px-7 w-2/5 mt-3 ml-5 mr-3 rounded-xl text-2xl bg-yellow-400  font-bold text-black hover:bg-blue-100"}
                       href="/signup">
                        Sign up
                    </a>
                    <p className={"text-2xl ml-4 w-1/12 pr-2 text-white"}> / </p>
                    <a href={"/login"}
                       className={"py-3 px-7 mr-3 w-2/6 mt-3  rounded-xl text-2xl font-bold hover:text-blue-100 text-white" +
                           ""}>
                        Login
                    </a>

                </div>
            </div>

        </AuthLayout>
    )
}
export default Signup;
