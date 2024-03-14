import { Link } from "react-router-dom"

const Footer = ({ input, data }) => {
    return (
        <div className={`${input && data ? "searchPage_footer" : "footer"}`}>
            <p className="py-3 px-8">India</p>
            <hr />
            <div className="flex flex-col py-3 space-y-3 sm:flex-row sm:space-y-0 sm:justify-around">
                <div className="flex justify-center space-x-3 flex-wrap gap-y-3 px-3">
                    <Link to={'#'}>About</Link>
                    <Link to={'#'}>Advertising</Link>
                    <Link to={'#'}>Bussiness</Link>
                    <Link to={'#'}>How Search Works</Link>
                </div>
                <div className="flex justify-center space-x-3">
                    <Link to={'#'}>Privacy</Link>
                    <Link to={'#'}>Terms</Link>
                    <Link to={'#'}>Settings</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
