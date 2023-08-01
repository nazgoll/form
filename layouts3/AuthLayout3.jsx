import Switcher from "@/switcher/Switcher";

const AuthLayout3 = (props) => {
    return(
        <div className={"w-screen h-screen items-center justify-center flex flex-col bg-color-1"}>
            <div  className={" p-16 pb-20 shadow-inner shadow-black bg-gradient-to-r from-blue-100 to-color-4" +
                " shadow-lg rounded-xl items-center justify-center flex  flex-col shadow-black " +
                "w-3/12 h-3/5 md:h-4/12 md:w-3/12 "}>
                <header className=" text-6xl font-extrabold text-color-6 mb-10 text-shadow-white ">
                    {props.headerText}
                </header>
                {props.children}
            </div>
            <div>

            </div>
        {/*<Switcher/>*/}
        </div>

    )
}
export default AuthLayout3;
