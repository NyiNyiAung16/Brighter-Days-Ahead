import Spinner from "./Spinner";

export default function FormButton({ isLoading, label, className }) {
    return (
        <button className={`btn btn-outline btn-sm disabled:btn-outline ${className ?? ''}`} type="submit" disabled={isLoading}>
          {isLoading ? <Spinner size="sm"/> : label }
        </button>
    )
}