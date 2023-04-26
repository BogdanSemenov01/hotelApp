import axios from "axios"

interface IHotelsAPI {
  currentIndex: number
  getHotels: () => Promise<any>
  loadMoreHotels: () => Promise<any>
}

export const HotelsApi: IHotelsAPI = {
  currentIndex: 0,
  async getHotels() {
    const response = await axios.request({
      method: "POST",
      url: "https://hotels4.p.rapidapi.com/properties/v2/list",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
        "X-RapidAPI-Host": import.meta.env.VITE_HOST_KEY,
      },
      data: `{"currency":"USD","eapid":1,"locale":"en_US","siteId":300000001,"destination":{"regionId":""},"checkInDate":{"day":10,"month":10,"year":2022},"checkOutDate":{"day":15,"month":10,"year":2022},"rooms":[{"adults":2}],"resultsStartingIndex":${this.currentIndex},"resultsSize":30,"sort":"PRICE_LOW_TO_HIGH"}`,
    })
    this.currentIndex += 30
    return response.data.data.propertySearch.properties
  },
  async loadMoreHotels() {
    const response = await axios.request({
      method: "POST",
      url: "https://hotels4.p.rapidapi.com/properties/v2/list",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
        "X-RapidAPI-Host": import.meta.env.VITE_HOST_KEY,
      },
      data: `{"currency":"USD","eapid":1,"locale":"en_US","siteId":300000001,"destination":{"regionId":""},"checkInDate":{"day":10,"month":10,"year":2022},"checkOutDate":{"day":15,"month":10,"year":2022},"rooms":[{"adults":2}],"resultsStartingIndex":${this.currentIndex},"resultsSize":30,"sort":"PRICE_LOW_TO_HIGH"}`,
    })
    this.currentIndex += 30
    return response.data.data.propertySearch.properties
  },
}
