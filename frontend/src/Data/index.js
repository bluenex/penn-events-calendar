const endPoint = {
  baseURL: 'http://localhost:5000',
  dayEndpoint: '/api/v1/getevent?days=',
};

const definedDays = {
  maximumDays: 90,
  defaultDays: 14,
  dayPerWeek: 7,
  dayPerMonth: 30,
};
class API {
  static getDaysLink(days = definedDays.defaultDays) {
    return `${endPoint.baseURL}${endPoint.dayEndpoint}${days}`;
  }

  // Handle HTTP errors since fetch won't.
  static handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
}

class Category {
  static getColor(catStr) {
    const colorCode = {
      Exhibitions: '#ca8b65',
      'Career/Prof': '#ff7562',
      Academic: '#ffb51c',
      Other: '#2d174d',
      'Perf Arts': '#7c98b3',
      Literary: '#ff83bd',
      Community: '#fde583',
      Film: '#27567b',
      Social: '#8fc0e7',
      Health: '#3a8ba2',
      International: '#fae3d9',
      Religion: '#fbf1f1',
      Meetings: '#aaaaaa',
    };

    return colorCode[catStr];
  }
}

export { API, Category };
