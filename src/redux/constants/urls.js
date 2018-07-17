const GATEWAY_URL = process.env.NODE_ENV === 'production' ? process.env.GATEWAY_URL : process.env.DEV_HOST;

export const SURVEY_LINK = `${GATEWAY_URL}/survey/`;
export const GET_MOCK2 = `${GATEWAY_URL}/mock2/`;
export const GET_MOCK3 = `${GATEWAY_URL}/mock3/`;

export const INDUSTRY_SPREAD_CHART = `${GATEWAY_URL}/industrySpreadChart/`;
