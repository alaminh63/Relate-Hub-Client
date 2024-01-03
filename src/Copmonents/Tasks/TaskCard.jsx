import { useState } from "react";
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
const TaskCard = ({ task, handleModal }) => {
  const [fileSelected, setFileSelected] = useState(false);
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const fileList = event.target.files;
    const newFiles = [];
    for (let i = 0; i < fileList.length; i++) {
      newFiles.push(fileList[i]);
    }
    setFiles(newFiles);
  };

  return (
    <div className="bg-gray-100  rounded-md  p-5 m-2">
      <div className="flex justify-between mb-2 text-[14px] items-center">
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
      <div className="text-[12px] mb-3 flex justify-between items-center">
        <div className="flex gap-1">
          <FaBuffer />
          <p className="text-[12px]">{task?.description}</p>
        </div>
        <div className="flex items-center gap-1 ">
          <FaClipboardList />
          <p>1/2</p>
        </div>
      </div>
      <div className="flex text-[13px] justify-between items-center ">
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
          <button onClick={() => handleModal(task?._id)}>
            <FaPaperclip />
          </button>
          <p>25</p>
        </div>
        <div className="flex gap-1 items-center">
          <FaCalendarAlt />
          <p>{task?.date}</p>
        </div>
      </div>
      
    </div>
  );
};

export default TaskCard;
