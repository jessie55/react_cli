const GATEWAY_URL = process.env.NODE_ENV === 'production' ? process.env.GATEWAY_URL : process.env.DEV_HOST;

export const SURVEY_LINK = `${GATEWAY_URL}/survey/`;
