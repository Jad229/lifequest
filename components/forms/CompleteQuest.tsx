"use client";

import { useToast } from "../ui/use-toast";
import { completeQuestAction } from "@/actions/quests";
import { Button } from "../ui/button";
import { FaPlus } from "react-icons/fa";

type CompleteQuestProps = {
  questId?: string | null | undefined;
};

export default function CompleteQuest({ questId }: CompleteQuestProps) {
  const completeQuestWithId = completeQuestAction.bind(null, questId);
  const { toast } = useToast();

  return (
    <form
      className="flex justify-center items-center"
      action={completeQuestWithId}
    >
      <Button
        onClick={() => {
          toast({
            title: "Quest Completed!",
            description: "You have completed the quest!",
          });
        }}
        id="quest-complete"
        variant="outline"
        className="bg-green-500 text-black hover:text-green-500"
        size="icon"
      >
        <FaPlus />
      </Button>
    </form>
  );
}
