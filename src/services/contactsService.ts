import { instance } from "../api/api"
import { contacts } from "../api/endpoints"
import { store } from "../store/store"
import { IContact } from "../types"

export default class ContactsService {
  static async getContacts() {
    const params = store.getState().contacts.params
    try {
      const res = await instance.get(`${contacts.get_all}`, {
        params: {
          ...params,
        },
      })
      if (res.data.contacts) {
        const values = Object.values(res.data.contacts)
        const mappedValues: IContact[] = values.map((el: any) => {
          return {
            first_name: el.first_name,
            last_name: el.last_name,
            email: el.email,
            address: el.address,
            country: el.country.iso,
            phone_number: el.phone_number,
          }
        })
        return mappedValues
      }
    } catch (e) {
      console.log(e)
    }
  }
}
