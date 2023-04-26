const isAdded = Symbol()

const HotelObject = {
  [isAdded]: 0,
  __typename: "Property",
  id: "12404083",
  featuredMessages: [],
  name: "Red Roof Inn - University",
  availability: {
    __typename: "PropertyAvailability",
    available: true,
    minRoomsLeft: 1,
  },
  propertyImage: {
    __typename: "PropertyImage",
    alt: "",
    fallbackImage: null,
    image: {
      __typename: "Image",
      description: "Exterior",
      url: "https://images.trvl-media.com/lodging/13000000/12410000/12404100/12404083/e1939641.jpg?impolicy=resizecrop&rw=455&ra=fit",
    },
    subjectId: 91024,
  },
  destinationInfo: {
    __typename: "PropertyDestinationInfo",
    distanceFromDestination: {
      __typename: "Distance",
      unit: "MILE",
      value: 3.43,
    },
    distanceFromMessaging: null,
    regionId: "6058675",
  },
  legalDisclaimer: null,
  listingFooter: null,
  mapMarker: {
    __typename: "MapMarker",
    label: "$73",
    latLong: {
      __typename: "Coordinates",
      latitude: 33.465796,
      longitude: -88.808874,
    },
  },
  neighborhood: {
    __typename: "Region",
    name: "s",
  },
  offerBadge: null,
  offerSummary: {
    __typename: "OfferSummary",
    messages: [
      {
        __typename: "OfferSummaryMessage",
        message: "Fully refundable",
        theme: "SUCCESS",
        type: "FREE_CANCEL",
        mark: null,
      },
      {
        __typename: "OfferSummaryMessage",
        message: "Reserve now, pay later",
        theme: "SUCCESS",
        type: "PAY_LATER",
        mark: null,
      },
      {
        __typename: "OfferSummaryMessage",
        message: "Collect stamps",
        theme: null,
        type: "LOYALTY_EARN",
        mark: {
          __typename: "Mark",
          id: "loyalty",
          token: "mark__loyalty",
          description: "loyalty logo",
        },
      },
    ],
    attributes: [
      {
        __typename: "OfferAttribute",
        type: "FREE_CANCELLATION",
      },
      {
        __typename: "OfferAttribute",
        type: "PAYMENT_CHOICE",
      },
    ],
  },
  pinnedDetails: null,
  price: {
    __typename: "PropertyPrice",
    options: [
      {
        __typename: "PropertyPriceOption",
        strikeOut: null,
        disclaimer: null,
        formattedDisplayPrice: "$73",
      },
    ],
    priceMessaging: null,
    lead: {
      __typename: "Money",
      amount: 72.99,
      currencyInfo: {
        __typename: "Currency",
        code: "USD",
        symbol: "$",
      },
      formatted: "$73",
    },
    strikeOut: null,
    displayMessages: [
      {
        __typename: "PriceDisplayMessage",
        lineItems: [
          {
            __typename: "DisplayPrice",
            disclaimer: null,
            price: {
              __typename: "FormattedMoney",
              formatted: "$73",
              accessibilityLabel: "The price is $73",
            },
            role: "LEAD",
          },
        ],
      },
      {
        __typename: "PriceDisplayMessage",
        lineItems: [
          {
            __typename: "LodgingEnrichedMessage",
            accessibilityLabel: null,
            mark: null,
            state: null,
            value: "$401 total",
            badge: null,
          },
        ],
      },
      {
        __typename: "PriceDisplayMessage",
        lineItems: [
          {
            __typename: "LodgingEnrichedMessage",
            accessibilityLabel: null,
            mark: null,
            state: null,
            value: "includes taxes & fees",
            badge: null,
          },
        ],
      },
    ],
    strikeOutType: "STANDALONE",
    priceMessages: [
      {
        __typename: "LodgingPlainMessage",
        value: "per night",
      },
    ],
  },
  priceAfterLoyaltyPointsApplied: {
    __typename: "PropertyPrice",
    options: [],
    lead: null,
  },
  propertyFees: [],
  reviews: {
    __typename: "PropertyReviewsSummary",
    score: 6.2,
    total: 407,
  },
  sponsoredListing: null,
  star: null,
  supportingMessages: null,
  regionId: "6058675",
  priceMetadata: {
    __typename: "PropertyPriceMetadata",
    discountType: null,
    rateDiscount: null,
    totalDiscountPercentage: null,
  },
  saveTripItem: null,
}


export type HotelType = typeof HotelObject