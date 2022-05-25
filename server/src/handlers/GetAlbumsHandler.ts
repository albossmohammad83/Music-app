import { DB } from '../Database';
import { MessageHandler } from '../MessageHandler';

/**
 * Return the result of performing the query in sql/get_albums.sql on the
 * database.
 * 
 * @returns the albums
 */
async function onMessage(): Promise<any> {
  const albums = await DB.runQuery('get_albums');

  console.log('albums message');
  console.log(albums);

  return { albums };
}

// Our schema can be empty, as we are not expecting any data with the message
const schema = {};

/**
 * A handler for the get_albums message; internally, queries the database for
 * the albums in it.
 */
export const GetAlbumsHandler = new MessageHandler(
  'get_albums',
  schema,
  onMessage,
);
