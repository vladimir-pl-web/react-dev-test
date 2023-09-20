import { instance } from "../api/api"
import { contacts } from "../api/endpoints"

export default class ContactsService {
  static async getContacts(
    companyId: number = 171,
    query?: { name: string; number: string },
    page: number = 1,
    countryId: number = 226
  ) {
    const params = { companyId, countryId, page, query }
    return await instance.get(`${contacts.get_all}`, {
      params: {
        ...params,
      },
    })
  }
}
