import { IoDocumentTextOutline } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { BiTrash } from "react-icons/bi";
import { FiArchive } from "react-icons/fi";
import { NoteCardProps } from "../../types/index";

interface NoteProps extends NoteCardProps {
  idx: number
}

export default function NoteCard({ note, idx }: NoteProps) {
  const cardClasses = `px-4 py-6 rounded-md bg-white shadow-sm flex items-center border${idx > 0 ? ' mt-5' : ''}`;
  return (
    <article className={cardClasses}>
      <IoDocumentTextOutline className="text-5xl mr-5 text-blue-400"/>
      <div>
        <h3 className="font-bold text-lg mb-1">
        { note.title }
        </h3>
        <p className="text-gray-500 text-sm">
          <b>Last Edited</b>: { note.lastEdited }
        </p>
      </div>
      <div className="flex items-center self-end ml-auto">
        <button className="btn-default">
          <FiArchive className="text-primary-500 text-purple-500 text-lg"/>
        </button>
        <button className="btn-default">
          <MdEdit className="text-primary-500 text-blue-500 text-lg"/>
        </button>
        <button className="btn-default">
          <BiTrash className="text-primary-500 text-red-500 text-lg"/>
        </button>
      </div>
    </article>
  )
}
