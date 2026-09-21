// =========================================================
// DEMO BUILD - LEAD SUBMISSION IS DISCONNECTED
// =========================================================
// This file used to POST visitor details (name, email, phone) to a
// third-party broker endpoint, which assigned an account password and
// logged the visitor's IP server-side. That endpoint has been removed.
//
// Right now this function sends nothing anywhere. It resolves locally so
// the demo forms render their success state, and nothing a visitor types
// leaves the browser.
//
// Before going live, wire this to YOUR OWN backend, and confirm you have:
//   - the visitor's consent to be contacted,
//   - a privacy policy that says where their data goes, and
//   - whatever licence or registration your jurisdiction requires for the
//     activity you are actually conducting.
//
// The old offerName identifier went with it. Do not reinstate it - that
// constant is what routed leads into a shared multi-brand funnel.
// =========================================================

const DEMO_DELAY_MS = 600

export async function submitLead({ firstName, lastName, email, phone }) {
  console.info('[demo] lead captured in-browser only - not transmitted:', {
    firstName,
    lastName,
    email,
    phone,
  })

  await new Promise((resolve) => setTimeout(resolve, DEMO_DELAY_MS))

  return { ok: true, demo: true }
}
