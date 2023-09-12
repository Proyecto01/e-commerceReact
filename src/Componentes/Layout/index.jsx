const Layout = ({ children }) => {
    return (
        <>
        <div className="w-3/4 mx-2">
            <div className="flex flex-col items-center mt-20">
                { children }
            </div>
        </div>
        </>
    )
}

export default Layout 