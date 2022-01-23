import axios from 'axios';

export class AxiosCall {
  static async get(url: string, source?: any, timeout = 0): Promise<any> {
    try {
      if (source) {
        const response = await axios.get(url, {
          cancelToken: source.token,
          timeout: timeout,
        });
        return response.data;
      } else {
        const response = await axios.get(url);
        return response.data;
      }
    } catch (err) {
      if (err.response && err.response.data) {
        throw err.response.data;
      } else {
        throw err;
      }
    }
  }

  static async post(url: string, payload: any, timeOut = 0): Promise<any> {
    try {
      const response = await axios.post(url, payload, {
        timeout: timeOut,
      });
      return response.data;
    } catch (err) {
      if (err.response && err.response.data) {
        throw err.response.data;
      } else {
        throw err;
      }
    }
  }

  static async put(url: string, payload: any, timeout = 0): Promise<any> {
    try {
      const response = await axios.put(url, payload, {
        timeout: timeout,
      });
      return response.data;
    } catch (err) {
      if (err.response && err.response.data) {
        throw err.response.data;
      } else {
        throw err;
      }
    }
  }

  static async delete(url: string, timeout = 0): Promise<any> {
    try {
      const response = await axios.delete(url, {
        timeout: timeout,
      });
      return response.data;
    } catch (err) {
      if (err.response && err.response.data) {
        throw err.response.data;
      } else {
        throw err;
      }
    }
  }
}

export {axios};
