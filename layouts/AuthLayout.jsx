const AuthLayout = (props) => {
    return(
        <div className={"w-screen h-screen items-center justify-center flex flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"}>
            <div className={"bg-white p-16 pb-20 shadow-inner shadow-black " +
                " shadow-lg rounded-xl items-center justify-center flex  flex-col shadow-black" +
                "w-3/12 h-3/5 md:h-3/12 md:w-3/12 "}>
                <header className=" text-6xl font-extrabold text-white  mb-10 text-shadow-white ">
                    {props.headerText}
                </header>
                {props.children}
            </div>
        </div>
    )
}
export default AuthLayout;
