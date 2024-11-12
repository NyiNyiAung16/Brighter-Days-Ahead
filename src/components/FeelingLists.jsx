import Feeling from "./Feeling";

export default function FeelingLists({ feelings }) {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10">
            {feelings.map(feeling => (
                <div key={feeling.id} className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300">
                    <Feeling feeling={feeling} />
                </div>
            ))}
        </div>
    )
}