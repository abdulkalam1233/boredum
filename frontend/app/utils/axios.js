import axios from 'axios';

export class AxiosCall {
  static async get(url, source, timeout = 0) {
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

  static async post(url, payload, timeOut = 0) {
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

  static async put(url, payload, timeout = 0) {
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

  static async delete(url, timeout = 0) {
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
