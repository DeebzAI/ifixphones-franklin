// ─────────────────────────────────────────────
//  iFixPhones Franklin — Services & Pricing Data
//  Source: Square booking page (April 2026)
//  Fixed prices where known; "varies" otherwise
// ─────────────────────────────────────────────

const BUSINESS = {
  name: "iFixPhones Franklin",
  address: "15 East Central Street, Franklin, MA 02038",
  phone: "(857) 340-8381",
  bookingUrl: "https://book.squareup.com/appointments/v9vckmlr1k93x8/location/LYXQF0ZFD7Y45/services",
  mapsUrl: "https://maps.google.com/?q=15+East+Central+Street+Franklin+MA+02038",
  hours: {
    monday:    { open: "10:00 AM", close: "7:00 PM" },
    tuesday:   { open: "10:00 AM", close: "7:00 PM" },
    wednesday: { open: "10:00 AM", close: "7:00 PM" },
    thursday:  { open: "10:00 AM", close: "7:00 PM" },
    friday:    { open: "10:00 AM", close: "7:00 PM" },
    saturday:  { open: "10:00 AM", close: "6:00 PM" },
    sunday:    null, // closed
  },
};

// ── Device Categories ────────────────────────
const DEVICE_CATEGORIES = [
  { id: "iphone",       label: "iPhone",              icon: "📱" },
  { id: "samsung",      label: "Samsung / Android",   icon: "📱" },
  { id: "pixel",        label: "Google Pixel",        icon: "📱" },
  { id: "ipad",         label: "iPad / Tablet",       icon: "📟" },
  { id: "macbook",      label: "MacBook / Laptop",    icon: "💻" },
  { id: "console",      label: "Game Console",        icon: "🎮" },
  { id: "watch",        label: "Apple / Galaxy Watch",icon: "⌚" },
  { id: "other",        label: "Other",               icon: "❓" },
];

// ── iPhone Models ────────────────────────────
// Used for Step 2 when device = iphone
const IPHONE_MODELS = [
  { id: "16promax",   label: "iPhone 16 Pro Max" },
  { id: "16pro",      label: "iPhone 16 Pro" },
  { id: "16plus",     label: "iPhone 16 Plus" },
  { id: "16",         label: "iPhone 16" },
  { id: "15promax",   label: "iPhone 15 Pro Max" },
  { id: "15pro",      label: "iPhone 15 Pro" },
  { id: "15plus",     label: "iPhone 15 Plus" },
  { id: "15",         label: "iPhone 15" },
  { id: "14promax",   label: "iPhone 14 Pro Max" },
  { id: "14pro",      label: "iPhone 14 Pro" },
  { id: "14plus",     label: "iPhone 14 Plus" },
  { id: "14",         label: "iPhone 14" },
  { id: "13promax",   label: "iPhone 13 Pro Max" },
  { id: "13pro",      label: "iPhone 13 Pro" },
  { id: "13",         label: "iPhone 13" },
  { id: "13mini",     label: "iPhone 13 Mini" },
  { id: "12promax",   label: "iPhone 12 Pro Max" },
  { id: "12pro",      label: "iPhone 12 / 12 Pro" },
  { id: "12mini",     label: "iPhone 12 Mini" },
  { id: "11promax",   label: "iPhone 11 Pro Max" },
  { id: "11pro",      label: "iPhone 11 Pro" },
  { id: "11",         label: "iPhone XR / 11" },
  { id: "xsmax",      label: "iPhone XS Max" },
  { id: "xs",         label: "iPhone X / XS" },
  { id: "8plus",      label: "iPhone 8 Plus" },
  { id: "8se",        label: "iPhone 8 / SE" },
  { id: "7plus",      label: "iPhone 7 Plus" },
  { id: "7",          label: "iPhone 7" },
];

// ── Issue Types ──────────────────────────────
const ISSUE_TYPES = [
  { id: "screen",    label: "Screen / Display",  icon: "🖥" },
  { id: "battery",   label: "Battery",           icon: "🔋" },
  { id: "charging",  label: "Charging Port",     icon: "🔌" },
  { id: "camera",    label: "Camera",            icon: "📸" },
  { id: "backglass", label: "Back Glass",        icon: "🔲" },
  { id: "water",     label: "Water Damage",      icon: "💧" },
  { id: "software",  label: "Software Issue",    icon: "⚙️" },
  { id: "other",     label: "Other",             icon: "❓" },
];

// ── Pricing Data ─────────────────────────────
// Structure: PRICING[deviceId][issueId][modelId]
// price: number (fixed) or null (varies)
// time: minutes
// note: optional string shown on results card
// quality: optional array of {label, price, time} for multi-tier options

const PRICING = {

  iphone: {

    screen: {
      "16promax":  { price: 149, time: 30 },
      "16pro":     { price: 149, time: 30 },
      "16plus":    { price: 129, time: 30 },
      "16":        { price: 129, time: 20 },
      "15promax":  { quality: [
                      { label: "AQ7 (Standard)",   price: 119, time: 20 },
                      { label: "Soft OLED (Premium)", price: 139, time: 20 },
                    ]},
      "15pro":     { quality: [
                      { label: "AQ7 (Standard)",   price: 119, time: 20 },
                      { label: "Soft OLED (Premium)", price: 139, time: 20 },
                    ]},
      "15plus":    { price: 109, time: 20 },
      "15":        { price: 109, time: 25 },
      "14promax":  { quality: [
                      { label: "AQ7 (Standard)",   price: 119, time: 25 },
                      { label: "Soft OLED (Premium)", price: 149, time: 20 },
                    ]},
      "14pro":     { quality: [
                      { label: "AQ7 (Standard)",   price: 119, time: 25 },
                      { label: "Soft OLED (Premium)", price: 149, time: 20 },
                    ]},
      "14plus":    { price: 109, time: 20 },
      "14":        { price: 99,  time: 20 },
      "13promax":  { price: 119, time: 25 },
      "13pro":     { price: 119, time: 20 },
      "13":        { price: 89,  time: 20 },
      "13mini":    { price: 109, time: 20 },
      "12promax":  { price: 109, time: 20 },
      "12pro":     { price: 99,  time: 20 },
      "12mini":    { price: 99,  time: 20 },
      "11promax":  { price: 99,  time: 20 },
      "11pro":     { price: 89,  time: 20 },
      "11":        { price: 89,  time: 15 },
      "xsmax":     { price: 79,  time: 20 },
      "xs":        { price: 79,  time: 20 },
      "8plus":     { price: 70,  time: 20 },
      "8se":       { price: 79,  time: 15 },
      "7plus":     { price: 65,  time: 15 },
      "7":         { price: 69,  time: 15 },
    },

    battery: {
      "16promax":  { price: null, time: 40, note: "Call for pricing" },
      "16pro":     { price: null, time: 40, note: "Call for pricing" },
      "16plus":    { price: null, time: 40, note: "Call for pricing" },
      "16":        { price: null, time: 40, note: "Call for pricing" },
      "15promax":  { price: 109,  time: 1  },
      "15pro":     { price: 109,  time: 1  },
      "15plus":    { price: 109,  time: 40 },
      "15":        { price: 109,  time: 40 },
      "14promax":  { price: 109,  time: 30 },
      "14pro":     { price: 109,  time: 30 },
      "14plus":    { price: 109,  time: 30 },
      "14":        { price: 109,  time: 30 },
      "13promax":  { price: 99,   time: 30 },
      "13pro":     { price: 99,   time: 30 },
      "13":        { price: 99,   time: 35 },
      "13mini":    { price: 99,   time: 35 },
      "12promax":  { price: 99,   time: 30 },
      "12pro":     { price: 89,   time: 25 },
      "12mini":    { price: 89,   time: 25 },
      "11promax":  { price: 89,   time: 30 },
      "11pro":     { price: 79,   time: 35 },
      "11":        { price: 69,   time: 20 },
      "xsmax":     { price: 69,   time: 30 },
      "xs":        { price: 69,   time: 25 },
      "8plus":     { price: 60,   time: 20 },
      "8se":       { price: 60,   time: 20 },
      "7plus":     { price: 59,   time: 20 },
      "7":         { price: 59,   time: 20 },
    },

    charging: {
      // All iPhone charging ports vary in price
      _default: { price: null, time: 35, note: "Free estimate · Price depends on model" },
    },

    camera: {
      _default: { price: null, time: 60, note: "Free estimate · Front or back camera" },
    },

    backglass: {
      _default: { price: null, time: 90, note: "Free estimate · All models" },
    },

    water: {
      _default: { price: null, time: 120, note: "Free diagnosis · Price depends on damage" },
    },

    software: {
      _default: { price: null, time: 30, note: "Free diagnosis · Unlocking, logo stuck, black screen, etc." },
    },

    other: {
      _default: { price: null, time: 30, note: "Come in for a free estimate" },
    },
  },

  // ── Samsung / Android ──
  samsung: {
    screen:    { price: null, time: 30, note: "Price varies by model · Free estimate" },
    battery:   { price: null, time: 30, note: "Price varies by model · Free estimate" },
    charging:  { price: null, time: 30, note: "Price varies by model · Free estimate" },
    camera:    { price: null, time: 30, note: "Price varies by model · Free estimate" },
    backglass: { price: null, time: 30, note: "Price varies by model · Free estimate" },
    water:     { price: null, time: 120, note: "Free diagnosis · Price depends on damage" },
    other:     { price: null, time: 30, note: "Come in for a free estimate" },
  },

  // ── Google Pixel ──
  pixel: {
    screen:  { price: null, time: 30, note: "Price varies by model · Free estimate" },
    battery: { price: null, time: 30, note: "Price varies by model · Free estimate" },
    other:   { price: null, time: 30, note: "Come in for a free estimate" },
  },

  // ── iPad / Tablet ──
  ipad: {
    screen: {
      ipad_78_9:  { price: 119, time: 45, note: "iPad 7th, 8th, 9th gen" },
      ipad_56:    { price: 89,  time: 30, note: "iPad 5th, 6th gen" },
      other:      { price: null, time: 45, note: "Price varies · Free estimate" },
    },
    battery:  { price: null, time: 90,  note: "Price varies by model · Free estimate" },
    charging: { price: null, time: 30,  note: "Price varies · Free estimate" },
    other:    { price: null, time: 30,  note: "Come in for a free estimate" },
  },

  // ── MacBook / Laptop ──
  macbook: {
    screen:   { price: null, time: 120, note: "Price varies by model · Free estimate" },
    keyboard: { price: null, time: 90,  note: "MacBook, HP, Dell · Free estimate" },
    charging: { price: null, time: 90,  note: "Price varies · Free estimate" },
    other:    { price: null, time: 60,  note: "Come in for a free estimate" },
  },

  // ── Game Console ──
  console: {
    other: { price: null, time: 60, note: "Xbox, PlayStation, Nintendo · Free estimate" },
    hdmi:  { price: null, time: 30, note: "PS5, Xbox, Hard Drive · Free estimate" },
  },

  // ── Apple / Galaxy Watch ──
  watch: {
    screen:  { price: null, time: 60, note: "Apple Watch, Galaxy, Fitbit · Price varies" },
    battery: { price: null, time: 30, note: "Apple Watch, Galaxy, Fitbit · Price varies" },
    other:   { price: null, time: 30, note: "Come in for a free estimate" },
  },

  other: {
    other: { price: null, time: 30, note: "Come in for a free estimate or give us a call" },
  },

};

// ── Misc Fixed-Price Services ────────────────
const MISC_SERVICES = [
  { label: "Charging port cleaning",    price: 15,   time: 5,   note: "Quick fix · Works most of the time" },
  { label: "Data transfer",             price: null, time: 60,  note: "Phone to phone, secure & fast" },
  { label: "Phone / tablet unlocking",  price: null, time: 30,  note: "iCloud or password issues" },
];

// ── Helper: is the shop open right now? ──────
function isOpenNow() {
  const days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
  const now = new Date();
  const day = days[now.getDay()];
  const hours = BUSINESS.hours[day];
  if (!hours) return { open: false, message: "We're closed today (Sunday)" };

  function parseTime(str) {
    const isPM = str.includes("PM");
    const cleaned = str.replace(" AM","").replace(" PM","");
    const [h, m] = cleaned.split(":").map(Number);
    let hour = h;
    if (isPM && h !== 12) hour += 12;
    if (!isPM && h === 12) hour = 0;
    return hour * 60 + (m || 0);
  }

  const openMin  = parseTime(hours.open);
  const closeMin = parseTime(hours.close);
  const nowMin   = now.getHours() * 60 + now.getMinutes();

  if (nowMin >= openMin && nowMin < closeMin) {
    const remaining = closeMin - nowMin;
    const hrs = Math.floor(remaining / 60);
    const mins = remaining % 60;
    const timeStr = hrs > 0 ? `${hrs}h ${mins}m` : `${mins} min`;
    return { open: true, message: `Open now · Closes at ${hours.close} (${timeStr} left)` };
  } else if (nowMin < openMin) {
    return { open: false, message: `Closed · Opens at ${hours.open} today` };
  } else {
    // find next open day
    const nextDay = days[(now.getDay() + 1) % 7];
    const nextHours = BUSINESS.hours[nextDay];
    return { open: false, message: nextHours
      ? `Closed · Opens tomorrow at ${nextHours.open}`
      : `Closed · Opens Monday at 10:00 AM` };
  }
}

// ── Helper: look up pricing ──────────────────
function getPricing(deviceId, issueId, modelId) {
  const deviceData = PRICING[deviceId];
  if (!deviceData) return null;

  // Flat device (no model step)
  if (deviceId !== "iphone" && deviceId !== "ipad") {
    return deviceData[issueId] || deviceData["other"] || null;
  }

  // iPhone: look up by issue then model
  if (deviceId === "iphone") {
    const issueData = deviceData[issueId];
    if (!issueData) return deviceData["other"]?.["_default"] || null;
    return issueData[modelId] || issueData["_default"] || null;
  }

  // iPad: screen has sub-models, others flat
  if (deviceId === "ipad") {
    const issueData = deviceData[issueId];
    if (!issueData) return deviceData["other"] || null;
    if (typeof issueData === "object" && !issueData.price && !issueData.quality && !issueData.note) {
      return issueData[modelId] || issueData["other"] || null;
    }
    return issueData;
  }

  return null;
}
