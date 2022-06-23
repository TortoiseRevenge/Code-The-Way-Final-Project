import { parseFetchResponse } from '../parse-fetch-response/parse-fetch-response';

const baseWasteURL = ' https://ctw-dev-mc-wm.azurewebsites.net/';

/**
 * It makes a request to the server, parses the response, and returns the Waste Items
 * @returns An array of Waste Items.
 */
export const getWasteList = async () => {
  const response = await fetch(`${baseWasteURL}inventory`, {
    method: 'GET',
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json',
    },
  });
  const parsedResponse = await parseFetchResponse(response);

  return parsedResponse;
};

/**
 * It makes a POST request to the endpoint, and returns the Waste Item object that was created
 * @param waste - The Waste Item to add
 * @returns The Waste Item object
 */
export const addWaste = async (waste) => {
  const response = await fetch(`${baseWasteURL}inventory`, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(waste),
  });
  const parsedResponse = await parseFetchResponse(response);
  return parsedResponse;
};

/**
 * It makes a POST request to the endpoint with the updated waste item
 * @param waste - The waste item to update
 * @returns The response from the server.
 */
export const updateWaste = async (waste) => {
  const response = await fetch(`${baseWasteURL}inventory`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(waste),
  });

  const parsedResponse = await parseFetchResponse(response);

  return parsedResponse;
};
