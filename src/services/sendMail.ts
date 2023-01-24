import axios from 'axios'

export const sendContactEmail = async (
  name: string,
  senderMail: string,
  content: string
) => {
  const data = {
    name,
    senderMail,
    content,
  }

  try {
    const res = await axios.post('/api/contacts', data)
    return res
  } catch (err) {
    console.error(err)
  }
}
