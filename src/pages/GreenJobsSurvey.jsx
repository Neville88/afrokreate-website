import { ExternalLink } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import WhatsAppIcon from '../components/WhatsAppIcon.jsx';
import { WHATSAPP_URL } from '../constants/contact.js';
import {
  GREEN_JOBS_SURVEY_FORM_URL,
  GREEN_JOBS_SURVEY_WHATSAPP_INTRO,
  getSurveyEmbedUrl,
} from '../constants/survey.js';

const FORM_SETUP_STEPS = [
  'Go to forms.google.com and create a blank form.',
  'Set the title to "Quick take: AI, green jobs & your future (anonymous)" and paste the intro text from the survey brief.',
  'Add Q1–Q4 as multiple choice (required). Add Q5–Q6 as short answer (optional in Forms settings).',
  'Under Settings → Responses: turn OFF "Collect email addresses" and turn OFF "Limit to 1 response".',
  'Click Send → link icon → copy the form URL and paste it into src/constants/survey.js as GREEN_JOBS_SURVEY_FORM_URL.',
];

function SurveySetupNotice() {
  return (
    <div className="rounded-3xl bg-white shadow-soft border border-black/5 p-6 sm:p-8">
      <p className="eyebrow text-gold">Setup required</p>
      <h2 className="mt-3 font-display text-2xl sm:text-3xl text-navy leading-tight">
        Connect your Google Form
      </h2>
      <p className="mt-4 text-ink/70 leading-relaxed">
        This page is ready to embed a Google Form. Create the form using the questions from your
        survey brief, then paste the public link into{' '}
        <code className="text-sm bg-cream px-1.5 py-0.5 rounded break-all">src/constants/survey.js</code>.
      </p>
      <ol className="mt-6 space-y-3 text-ink/80 list-decimal list-inside">
        {FORM_SETUP_STEPS.map((step) => (
          <li key={step} className="leading-relaxed">
            {step}
          </li>
        ))}
      </ol>
      <a
        href="https://forms.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-gold mt-8 w-full sm:w-auto"
      >
        <ExternalLink size={16} aria-hidden="true" />
        Open Google Forms
      </a>
    </div>
  );
}

export default function GreenJobsSurvey() {
  const embedUrl = getSurveyEmbedUrl(GREEN_JOBS_SURVEY_FORM_URL);
  const hasForm = Boolean(embedUrl);

  const whatsappShareUrl = hasForm
    ? `${WHATSAPP_URL}?text=${encodeURIComponent(
        `${GREEN_JOBS_SURVEY_WHATSAPP_INTRO}${GREEN_JOBS_SURVEY_FORM_URL}`
      )}`
    : null;

  return (
    <>
      <PageHeader
        eyebrow="Quick take"
        title="AI, green jobs & your future"
        italic="(anonymous)"
        lead="A few honest questions for recent grads and current students. Takes 2 minutes. No names, no emails collected — just want to know what you actually think, not what sounds good."
        image="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="relative noise py-12 sm:py-20 pb-28 sm:pb-20">
        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 lg:px-10">
          {hasForm ? (
            <>
              <div className="flex flex-col gap-4 mb-6">
                <p className="text-sm text-ink/70 max-w-xl">
                  Your answers go straight to Google Forms. No sign-in required, no email collected.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-2">
                  <a
                    href={GREEN_JOBS_SURVEY_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gold text-sm w-full sm:w-auto"
                  >
                    <ExternalLink size={16} aria-hidden="true" />
                    Open survey
                  </a>
                  {whatsappShareUrl && (
                    <a
                      href={whatsappShareUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp text-sm w-full sm:w-auto"
                      aria-label="Share survey on WhatsApp"
                    >
                      <WhatsAppIcon size={16} />
                      Share on WhatsApp
                    </a>
                  )}
                </div>
              </div>

              {/* Mobile: prefer opening Forms natively — embeds are awkward on small screens */}
              <div className="md:hidden rounded-3xl bg-white shadow-soft border border-black/5 p-6 text-center">
                <p className="font-display text-xl text-navy leading-snug">
                  Best experience: open the survey in Google Forms
                </p>
                <p className="mt-3 text-sm text-ink/70 leading-relaxed">
                  On phones, Google Forms works more smoothly in its own page than inside an embed.
                </p>
                <a
                  href={GREEN_JOBS_SURVEY_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold mt-6 w-full"
                >
                  <ExternalLink size={16} aria-hidden="true" />
                  Start the survey
                </a>
              </div>

              <div className="hidden md:block rounded-3xl overflow-hidden bg-white shadow-soft border border-black/5">
                <iframe
                  title="AI, green jobs & your future — anonymous survey"
                  src={embedUrl}
                  width="100%"
                  height="1800"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="w-full min-h-[75vh] bg-white"
                >
                  Loading survey…
                </iframe>
              </div>
            </>
          ) : (
            <SurveySetupNotice />
          )}
        </div>
      </section>
    </>
  );
}
