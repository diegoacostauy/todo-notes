import { Dialog, Transition } from '@headlessui/react'
import { BiTrash } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";
import { Fragment, useState } from 'react'
import { useNotesStore } from '../../store/notes';
import { Note } from '../../types';

type DeleteProps = {
  id: Note['id'],
}

export default function DeleteNote({ id }: DeleteProps) {
  let [isOpen, setIsOpen] = useState(false)
  const deleteNote = useNotesStore(state => state.deleteNote);

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const handleDelete = () => {
    closeModal();
    deleteNote(id);
  }

  return (
    <>
      <button className="btn-default ml-4" onClick={openModal}>
        <BiTrash className="text-primary-500 text-red-500 text-lg" />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 mb-5 flex justify-between"
                  >
                    Delete Note
                    <button className="btn-secondary px-2" onClick={closeModal}><IoCloseOutline/></button>
                  </Dialog.Title>
                  <div className="my-5">
                    <p className="text-sm text-gray-500">
                      Atention! The note data will be erased.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="btn-secondary"
                      onClick={() => closeModal()}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn-danger ml-4"
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
