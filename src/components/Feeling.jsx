import { Link, useParams } from "react-router-dom";
import Actions from './Actions'
import { useAuth } from '../helpers/useAuth' 

export default function Feeling({ feeling, handleDelete, handleEdit }) {
    const params = useParams();
    
    const { currentUser } = useAuth();
    const userId = currentUser?.uid;

    return (
        <div className="relative group">
            {feeling && <Link to={`/feelings/${feeling.id}`}>
                <blockquote className="">
                    {params.id ? <p>{feeling.text}</p> : <p>{feeling.text?.substring(0, 100) + '...'}</p>}
                    <span>{feeling.user?.name}</span>
                </blockquote>
            </Link>}
            {!params.id && userId === feeling.user?.id && <Actions onDelete={() => handleDelete(feeling.id)} onEdit={() => handleEdit(feeling)}/>}
        </div>
    )
}