import { useState } from "react";
import Modal from "../ui/modal";
import {
  FaBuffer,
  FaCalendarAlt,
  FaClipboardList,
  FaCommentAlt,
  FaFileArchive,
  FaPage4,
  FaPaperclip,
  FaPaperPlane,
  FaUser,
} from "react-icons/fa";
import { useEffect } from "react";

const TasksModal = ({ isOpen, setIsOpen, id }) => {
  const [task, setTask] = useState(null);
  const [files, setFiles] = useState([]);
  const [newAttachmentNames, setNewAttachmentNames] = useState([]);

  useEffect(() => {
    fetch(`https://task-refactor-server.vercel.app/tasks/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((response) => setTask(response))
      .catch((err) => console.error("Fetch error:", err));
  }, [id]);

  const handleFileChange = (event) => {
    const fileList = event.target.files;
    const newFiles = Array.from(fileList);
    setFiles(newFiles);
  };

  const handleNameChange = (index, newName) => {
    const updatedNames = [...newAttachmentNames];
    updatedNames[index] = newName;
    setNewAttachmentNames(updatedNames);
  };

  const handleSubmit = async (index) => {
    try {
      const newName = newAttachmentNames[index];
      if (newName) {
        const response = await fetch(
          `https://task-refactor-server.vercel.app/tasks/${id}/attachments/${index}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ newName }),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const updatedAttachment = await response.json();
        console.log("Updated attachment:", updatedAttachment);
        // Perform any necessary state updates or UI changes here after successful update
      }
    } catch (error) {
      console.error("Error updating attachment name:", error);
      // Handle error state or display error message to the user
    }
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="bg-gray-100  rounded-md p-5 m-2">
        <div className="flex justify-between mb-4  items-center">
          <div className="flex items-center gap-1 ">
            <img
              className="w-8 h-8 rounded-full"
              src={task?.primaryUser?.image}
              alt=""
            />
            <h1 className="">{task?.primaryUser?.name}</h1>
          </div>
          <div className="flex items-center gap-1">
            <img
              className="w-8 h-8 rounded-full"
              src={task?.secondaryUser?.image}
              alt=""
            />
            <h1 className="">{task?.secondaryUser?.name}</h1>
          </div>
        </div>
        <div className=" mb-3 flex justify-between items-center">
          <div className="flex gap-1">
            <FaBuffer />
            <p className="]">{task?.description}</p>
          </div>
          <div className="flex items-center gap-1 ">
            <FaClipboardList />
            <p>1/2</p>
          </div>
        </div>
        <div className="flex  justify-between items-center ">
          <div>
            <img className="w-7 h-7 rounded-full" src={task?.avatar1} />
          </div>
          <div>
            <img className="w-7 h-7 rounded-full" src={task?.avatar2} />
          </div>
          <div>
            <p>{task?.totalViews}+</p>
          </div>
          <div className="flex gap-1 items-center">
            <FaCommentAlt />
            <p>{task?.totalComments}</p>
          </div>
          <div className="flex gap-1 items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              <FaPaperclip />
            </button>
            <p>25</p>
          </div>
          <div className="flex gap-1 items-center">
            <FaCalendarAlt />
            <p>{task?.date}</p>
          </div>
        </div>
        <div className="mt-3">
          <h1 className="text-xl text-black text-center mb-2">
            Previews Attachments
          </h1>
          {task?.totalAttachments.map((item, index) => (
            <div className="border border-black p-2" key={index}>
              <h2 className="text-black">
                {index + 1} {item?.attachmentName}
              </h2>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <input type="file" multiple onChange={handleFileChange} />
          {files.length > 0 && (
            <ul>
              {files.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default TasksModal;
