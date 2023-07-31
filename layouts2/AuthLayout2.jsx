const AuthLayout2 = (props) => {
    return(
        <div className={"w-screen h-screen items-center justify-center flex flex-col bg-color-1"}>
            <div  className={"bg-white p-16 pb-20 shadow-inner shadow-black bg-gradient-to-r from-blue-100 to-color-4" +
                " shadow-lg rounded-xl items-center justify-center flex  flex-col shadow-black" +
                "w-3/12 h-3/5 md:h-4/12 md:w-3/12 "}>
                <div className={"rounded-full bg-color-1 w-32 h-32"}></div>
                <header className=" text-6xl font-extrabold text-color-6  mb-10 text-shadow-white ">
                    {props.headerText}
                </header>
                {props.children}
            </div>
        </div>
    )
}
export default AuthLayout2;
