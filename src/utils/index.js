/* eslint-disable camelcase */
const mapDBToModel = ({
  id, name, title, year, performer, genre, duration, album_id, created_at, updated_at, username,
}) => ({
  id,
  name,
  title,
  year,
  performer,
  genre,
  duration,
  albumId: album_id,
  createdAt: created_at,
  updatedAt: updated_at,
  username,
});

module.exports = { mapDBToModel };
