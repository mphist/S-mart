import axios from 'axios'

export const nudgeDyno = () => {
  const host = process.env.SERVER_URL
  console.log('nudging')
  setTimeout(async () => {
    if (host)
      try {
        await axios.get(host)
      } catch (err) {
        console.log(
          'There was an error trying to nudge the dyno. Retrying in 20 minutes',
          err
        )
      } finally {
        nudgeDyno()
      }
  }, 1000 * 60 * 25)
}
