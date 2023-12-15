import { faCheck, faPenSquare, faPenToSquare, faPencil, faPencilAlt, faPencilSquare, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// tasks actions
export default function TaskActions () {
    return (
        <div className="flex gap-4 text-white">
            <button aria-label="Mark task as completed" className="text-green-500"><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></button>
            <button aria-label="Edit task" className="text-blue-500"><FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon></button>
            <button aria-label="Delete task"><FontAwesomeIcon icon={faTimes} className="text-red-500"></FontAwesomeIcon></button>
        </div>
    )
}