import { RandomUserApiResponse, User } from "../type";

export const transformUser = (user: RandomUserApiResponse): User => {
  return {
    name: `${user.name.title}, ${user.name.first} ${user.name.last}`,
    location: `${user.location.street.number}, ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}`,
    email: user.email,
    age: user.registered.age,
    phone: user.phone,
    cell: user.cell,
    picture: [user.picture.large, user.picture.medium, user.picture.thumbnail],
  };
};
