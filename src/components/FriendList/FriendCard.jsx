import { Card,StatusFriend,AvatarFriend,NameFriend } from "./FriendCard.styled";

export const FriendCard = ({ avatar, name, isOnline }) => {
    return (
        <Card>
  <StatusFriend eventType={isOnline}></StatusFriend>
  <AvatarFriend src={avatar} alt="User avatar" width="48" />
  <NameFriend>{name}</NameFriend>
</Card>
    )
}