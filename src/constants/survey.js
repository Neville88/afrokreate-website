// Paste your Google Form link here after you create it at https://forms.google.com
// Use the public "viewform" URL, e.g.:
// https://docs.google.com/forms/d/e/1FAIpQLS.../viewform
export const GREEN_JOBS_SURVEY_FORM_URL = 'https://forms.gle/uWdTiGQotnPwqJhk9';

export const GREEN_JOBS_SURVEY_WHATSAPP_INTRO =
  'Doing something for work — 5 min, fully anonymous, no names or emails collected. Would mean a lot if you filled it in: ';

/** Convert a Google Form view URL into an embeddable iframe src. */
export function getSurveyEmbedUrl(formUrl) {
  if (!formUrl) return '';
  try {
    const url = new URL(formUrl);
    url.searchParams.set('embedded', 'true');
    return url.href;
  } catch {
    return '';
  }
}
