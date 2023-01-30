import makeData from '../utils/generateData'

export default {
  Query: {
    user: async (parents: any, {offset, limit}: { offset: number, limit: number }) => {
      const data = await makeData(2000)
      return data.slice(offset, limit + offset);
    }
  }
};