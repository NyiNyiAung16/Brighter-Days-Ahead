import Header from "../components/Header";

export default function DefaultLayout({ children }) {
    return (
        <div className="min-h-screen">
            <Header/>
            <div className="mt-10">
                { children }
            </div>
        </div>
    )
}