import PropTypes from 'prop-types';
import {CardProfile, Avatar, Description, UserName, UserTag, UserLocation, UserStats, List, Label} from './Profile.styled'

export const Profile = ({
    avatar,
    tag,
    location,
    username,
    stats: { followers, views, likes },
}) => {
  return (
    <CardProfile>
      <Description>
        <Avatar src={avatar} alt="User avatar"></Avatar>
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </Description>

      <UserStats>
        <List>
          <Label>Followers</Label>
          <span className="quantity">{followers}</span>
        </List>
        <List>
          <Label>Views</Label>
          <span className="quantity">{views}</span>
        </List>
        <List>
          <Label>Likes</Label>
          <span className="quantity">{likes}</span>
        </List>
      </UserStats>
    </CardProfile>
  );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number.isRequired)
};
