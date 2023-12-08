import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

interface FriendTileProps {
  name: string;
  level: number;
  userImage: string;
}

function FriendTile({ name, level, userImage }: FriendTileProps): JSX.Element {
  return (
    <div className="flex items-center gap-10 p-4 border-b border-neutral-800 rounded-md">
      <Avatar>
        <AvatarImage src="https://cdn.vectorstock.com/i/preview-1x/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.jpg" />
        <AvatarFallback>Avatar</AvatarFallback>
      </Avatar>
      <h2>{name}</h2>
      <p>Level: {level}</p>
    </div>
  );
}

export default FriendTile;
