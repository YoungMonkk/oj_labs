"use client"

export const OPEN_CONTACT_PANEL_EVENT = "ojlabs:open-contact-panel"

export function openContactPanel() {
  if (typeof window === "undefined") {
    return
  }

  window.dispatchEvent(new Event(OPEN_CONTACT_PANEL_EVENT))
}
