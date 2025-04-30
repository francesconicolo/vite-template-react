import axios from 'axios';

export const ApiApis = {
  async getExampleRequest(): Promise<{ [key: string]: string[] }> {
    const response = await axios.get(
      'https://official-joke-api.appspot.com/random_joke'
    );
    return response.data;
  }
};
