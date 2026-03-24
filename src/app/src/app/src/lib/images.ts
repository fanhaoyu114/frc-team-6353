export const images = {
  teamGroupPhoto: "",
  campus: { activity: "", openDay: "", carnival: "" },
  global: { mentorship: "", scrimmage: "", seminar: "" },
  outreach: { kindergarten: "", industry: "" },
  sustainability: { leadership: "", partnership: "" },
  members: ["","","","","","","","","","","","","","","","",""],
  footer: { qrCode: "", badge1: "", badge2: "" },
}

export function hasImage(url: string | undefined): url is string {
  return typeof url === "string" && url.length > 0
}
