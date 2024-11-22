import Header from "../components/Header";

export default function DefaultLayout({ children }) {
    return (
        <div className="min-h-screen">
            <Header/>
            <div className="mt-5">
                { children }
            </div>
        </div>
    )
}