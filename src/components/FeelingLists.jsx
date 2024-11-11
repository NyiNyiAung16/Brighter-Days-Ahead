import Feeling from "./Feeling";

export default function FeelingLists({ feelings }) {

    return (
        <div className=" grid grid-cols-4 gap-5 p-10">
            {feelings.map((feeling) => (
                <Feeling key={feeling.id} feeling={feeling} />
            ))}
        </div>
    )
}