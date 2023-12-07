import Link from "next/link";
import QuestForm from "../forms/QuestForm";
import Modal from "../ui/Modal";

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

const AddQuest = ({ searchParams }: Props) => {
  const showModal = searchParams?.modal;
  // console.log(showModal);
  return (
    <div>
      <Link
        href="/?modal=true"
        className="bg-amber-400 w-1/3 p-2 rounded-sm text-black font-semibold self-end mr-3 mt-3"
      >
        + Add new task
      </Link>

      {showModal && (
        <Modal title="Add New Quest">
          <QuestForm />
        </Modal>
      )}
    </div>
  );
};

export default AddQuest;
