import { getSession } from 'next-auth/react';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export async function uploadFile(file) {
  if (!(file instanceof File)) {
    throw new Error('Parameter "file" is not a File.');
  }
  const session = await getSession();
  const formData = new FormData();
  formData.append('files', file);

  const response = await fetch(
    `${publicRuntimeConfig.API_ENDPOINT}/api/upload`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
      body: formData,
    },
  );

  if (!response.ok) {
    throw new Error(await response.text());
  }

  const result = await response.json();
  return result[0];
}

export async function deleteFile(id) {
  const session = await getSession();
  const response = await fetch(
    `${publicRuntimeConfig.API_ENDPOINT}/api/upload/files/${id}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response.json();
}
