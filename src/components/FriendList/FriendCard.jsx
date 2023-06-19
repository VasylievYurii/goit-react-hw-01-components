import { Card,StatusFriend,AvatarFriend,NameFriend,Wrapper } from "./FriendCard.styled";

export const FriendCard = ({ avatar, name, isOnline }) => {
    return (
        <Card eventType={isOnline}>
  {/* <StatusFriend eventType={isOnline}></StatusFriend> */}
<Wrapper>
  <AvatarFriend src={avatar} alt="User avatar" width="48" />
  </Wrapper>
  <NameFriend>{name}</NameFriend>
</Card>
    )
}