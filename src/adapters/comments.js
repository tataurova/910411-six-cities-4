export const getComment = (data) => {
  return {
    id: data.id,
    name: data.user.name,
    photo: data.user.avatar_url,
    rating: data.rating,
    text: data.comment,
    date: new Date(data.date),
  };
};
