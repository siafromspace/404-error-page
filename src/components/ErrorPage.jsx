import ErrorImg from "../images/404-page.svg"

const ErrorPage = () => {
    return ( 
        <main className="error_main">
            <section className="error_main-one">
                <div>
                    <p className="error_text-one">OOps!</p>
                    <p className="error_text-two">Page not found</p>
                    <p className="error_text-three">This page doesn't exist, we suggest you go back to home.</p>
                </div>
                <a href="/" className="error_btn">Back to home</a>
            </section>
            <section className="error_main-two">
                <img src={ErrorImg} alt="error img" className="error_img" />
            </section>
        </main>
     );
}
 
export default ErrorPage;