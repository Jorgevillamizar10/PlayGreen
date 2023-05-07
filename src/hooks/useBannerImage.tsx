import { useEffect, useState } from 'react'
import axios from 'axios'

const ENDPOINT =
  'https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League'

export const useBannerImage = () => {
  const [sportsData, setSportsData] = useState<any>()

  useEffect(() => {
    ;(async () => {
      axios
        .get(ENDPOINT)
        .then(function (response) {
          setSportsData(response?.data)
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    })()
  }, [])

  return {
    sportsData: sportsData
  }
}
