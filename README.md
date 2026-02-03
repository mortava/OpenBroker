# OpenBroker - Mortgage Broker Website Template

A modern, clean one-page website template for mortgage brokers. Features a Stripe/Apple-inspired design with Shadcn UI components.

## Placeholders to Replace

Before deploying, replace the following placeholders with your actual information:

### Company Information
- `[COMPANY_NAME]` - Full company name (e.g., "ABC Mortgage Company")
- `[COMPANY_SHORT_NAME]` - Abbreviated name (e.g., "ABC Mortgage")
- `[COMPANY_LEGAL_NAME]` - Legal entity name (e.g., "ABC Mortgage Company, LLC")
- `[LOGO]` - Company logo initials or replace with image
- `[COMPANY_NMLS]` - Company NMLS number (e.g., "NMLS#123456")
- `[COMPANY_ADDRESS]` - Full address
- `[ADDRESS_LINE_1]` - Street address
- `[ADDRESS_SHORT]` - Short address for contact modal
- `[CITY_STATE_ZIP]` - City, State ZIP

### Agent Information
- `[AGENT_NAME]` - Primary contact name
- `[AGENT_NMLS]` - Agent NMLS number

### Contact Information
- `[PHONE]` - Phone number
- `[EMAIL]` - Email address

### Legal Information
- `[STATE]` - State for governing law
- `[COUNTY_STATE]` - County and state for jurisdiction
- `[DATE]` - Last updated date for legal pages
- `[PLATFORM_PROVIDER]` - Platform/technology provider name

### Embed URLs
- `[PREQUAL_IFRAME_URL]` - Pre-qualification tool iframe URL
- `[RATES_IFRAME_URL]` - Rate quote tool iframe URL

### Statistics (AboutSection)
- `[YEARS]` - Years of experience
- `[CLIENTS]` - Number of clients served
- `[FUNDED]` - Amount funded (e.g., "2B")
- `[RATING]` - Customer rating

## Features

- **AI Pre-Qualification Assistant** - Embed section for AI-powered pre-qual
- **Rate Quote Calculator** - Embed section for rate quotes
- **ADA Compliant** - Full accessibility support
- **Mobile Optimized** - Responsive design for all devices
- **Lightbox Modals** - Contact, Terms, Privacy popouts
- **Clean Typography** - Inter (body) + Montserrat (headings)

## Customization

### Branding
- Colors: Edit CSS variables in `src/app/globals.css`
- Logo: Update in `src/components/Header.tsx`
- Footer: Update company info in `src/components/Footer.tsx`

### Legal Pages
- Terms: `src/components/modals/TermsModal.tsx`
- Privacy: `src/components/modals/PrivacyModal.tsx`

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Shadcn UI
- Radix UI Primitives

## Getting Started

```bash
npm install
npm run dev
```

## Deployment

Deploy to Vercel with one click or run:
```bash
vercel
```

## License

OpenBroker Template
