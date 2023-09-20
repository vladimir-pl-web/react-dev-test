export enum Endpoints {
  Contacts = "contacts.json",
}
const api = {
  contacts: {
    get_all: `/api/${Endpoints.Contacts}`,
  },
}

export const { contacts } = api
