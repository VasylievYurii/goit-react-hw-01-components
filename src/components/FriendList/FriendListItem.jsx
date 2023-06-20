import { Card, AvatarFriend, NameFriend } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Card eventType={isOnline}>
      <AvatarFriend src={avatar} alt="User avatar" width="48" />
      <NameFriend>{name}</NameFriend>
    </Card>
  );
};
