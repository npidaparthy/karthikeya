/**
 * ═══════════════════════════════════════════════════════════════════
 *  Samskruti — Contact Form Handler
 *  Google Apps Script
 * ═══════════════════════════════════════════════════════════════════
 *
 *  Paste this entire file into:
 *    Google Sheet → Extensions → Apps Script
 *
 *  Then deploy as a Web App (see SETUP.md for step-by-step).
 * ═══════════════════════════════════════════════════════════════════
 */

// ── CONFIGURATION ─────────────────────────────────────────────────
// Change these two values before deploying:

var RECIPIENT_EMAIL = "your@email.com";   // ← your email address
var SHEET_NAME      = "Responses";         // ← sheet tab name (create this tab)

// ─────────────────────────────────────────────────────────────────

/**
 * Handles POST requests from the contact form.
 * Called automatically by Google when the form submits.
 */
function doPost(e) {
  try {
    // ── 1. Parse the incoming data ──────────────────────────────
    var data   = JSON.parse(e.postData.contents);
    var name    = sanitise(data.name    || "");
    var email   = sanitise(data.email   || "");
    var subject = sanitise(data.subject || "(no subject)");
    var message = sanitise(data.message || "");
    var lang    = sanitise(data.lang    || "en");   // EN / TE / SA
    var ts      = new Date();

    // ── 2. Write to Google Sheet ─────────────────────────────────
    saveToSheet(ts, name, email, subject, message, lang);

    // ── 3. Send email notification ───────────────────────────────
    sendEmailNotification(ts, name, email, subject, message, lang);

    // ── 4. Return success ────────────────────────────────────────
    return buildResponse({ status: "ok", message: "Message received." });

  } catch (err) {
    // Log the error for debugging in Apps Script logs
    Logger.log("Error in doPost: " + err.toString());
    return buildResponse({ status: "error", message: err.toString() }, 500);
  }
}

/**
 * Handles GET requests (used for testing that the script is live).
 */
function doGet(e) {
  return buildResponse({
    status:  "ok",
    message: "Samskruti contact form endpoint is live.",
    time:    new Date().toString()
  });
}

// ── HELPERS ───────────────────────────────────────────────────────

/**
 * Writes a new row to the Google Sheet.
 */
function saveToSheet(ts, name, email, subject, message, lang) {
  var ss    = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    // Auto-create the sheet if it doesn't exist
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow([
      "Timestamp", "Name", "Email", "Subject", "Message", "Language"
    ]);
    // Bold the header row
    sheet.getRange(1, 1, 1, 6).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }

  sheet.appendRow([
    ts.toLocaleString("en-AU", { timeZone: "Australia/Sydney" }),
    name,
    email,
    subject,
    message,
    lang.toUpperCase()
  ]);

  // Auto-resize columns for readability
  sheet.autoResizeColumns(1, 6);
}

/**
 * Sends an HTML email notification to RECIPIENT_EMAIL.
 */
function sendEmailNotification(ts, name, email, subject, message, lang) {
  var timeStr = ts.toLocaleString("en-AU", {
    timeZone: "Australia/Sydney",
    dateStyle: "full",
    timeStyle: "short"
  });

  var htmlBody = [
    '<div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;border:1px solid #e8c878;border-radius:10px;overflow:hidden;">',

    // Header
    '<div style="background:linear-gradient(135deg,#7a4d06,#b8730a);padding:24px 28px;">',
    '<p style="margin:0;font-family:serif;font-size:20px;color:#faedc8;letter-spacing:0.05em;">🕉 Samskruti</p>',
    '<p style="margin:6px 0 0;font-size:13px;color:rgba(250,237,200,0.8);">New contact form message</p>',
    '</div>',

    // Body
    '<div style="padding:24px 28px;background:#fffbf3;">',

    '<table style="width:100%;border-collapse:collapse;font-size:14px;">',

    '<tr><td style="padding:8px 0;color:#a07850;font-style:italic;width:90px;vertical-align:top;">From</td>',
    '<td style="padding:8px 0;color:#2c1a0e;font-weight:bold;">' + escHtml(name) + '</td></tr>',

    '<tr><td style="padding:8px 0;color:#a07850;font-style:italic;vertical-align:top;">Email</td>',
    '<td style="padding:8px 0;"><a href="mailto:' + escHtml(email) + '" style="color:#b8730a;">' + escHtml(email) + '</a></td></tr>',

    '<tr><td style="padding:8px 0;color:#a07850;font-style:italic;vertical-align:top;">Subject</td>',
    '<td style="padding:8px 0;color:#2c1a0e;">' + escHtml(subject) + '</td></tr>',

    '<tr><td style="padding:8px 0;color:#a07850;font-style:italic;vertical-align:top;">Language</td>',
    '<td style="padding:8px 0;color:#2c1a0e;">' + langLabel(lang) + '</td></tr>',

    '<tr><td style="padding:8px 0;color:#a07850;font-style:italic;vertical-align:top;">Time</td>',
    '<td style="padding:8px 0;color:#2c1a0e;">' + escHtml(timeStr) + '</td></tr>',

    '</table>',

    '<hr style="border:none;border-top:1px solid #e8c87844;margin:16px 0;">',

    '<p style="color:#a07850;font-style:italic;font-size:13px;margin:0 0 8px;">Message</p>',
    '<div style="background:#faf5eb;border-left:3px solid #b8730a;padding:14px 16px;border-radius:0 8px 8px 0;">',
    '<p style="margin:0;color:#2c1a0e;line-height:1.75;font-size:14px;">' + escHtml(message).replace(/\n/g,'<br>') + '</p>',
    '</div>',

    '</div>',

    // Footer
    '<div style="padding:14px 28px;background:#fff9ef;border-top:1px solid #e8c87833;text-align:center;">',
    '<p style="margin:0;font-size:11px;color:#c8a878;">',
    'Sent from <a href="https://npidaparthy.github.io/karthikeya/" style="color:#b8730a;text-decoration:none;">samskruti.info</a>',
    ' · Reply directly to <a href="mailto:' + escHtml(email) + '" style="color:#b8730a;">' + escHtml(email) + '</a>',
    '</p>',
    '</div>',

    '</div>'
  ].join("");

  var plainBody = [
    "New message from Samskruti contact form",
    "─────────────────────────────────────",
    "From:     " + name,
    "Email:    " + email,
    "Subject:  " + subject,
    "Language: " + langLabel(lang),
    "Time:     " + timeStr,
    "",
    "Message:",
    message,
    "",
    "─────────────────────────────────────",
    "Reply to: " + email
  ].join("\n");

  GmailApp.sendEmail(
    RECIPIENT_EMAIL,
    "✉ Samskruti: " + subject + " (from " + name + ")",
    plainBody,
    {
      htmlBody:    htmlBody,
      replyTo:     email,
      name:        "Samskruti Contact Form"
    }
  );
}

/**
 * Builds a CORS-friendly JSON response.
 */
function buildResponse(obj, code) {
  var output = ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
  return output;
}

/**
 * Removes HTML tags and trims whitespace from user input.
 */
function sanitise(str) {
  return String(str)
    .replace(/<[^>]*>/g, "")   // strip HTML tags
    .replace(/&/g, "&amp;")
    .trim()
    .substring(0, 2000);        // max 2000 chars per field
}

/**
 * Escapes HTML entities for safe embedding in email HTML.
 */
function escHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Returns a human-readable language label.
 */
function langLabel(lang) {
  var labels = { en: "English", te: "Telugu (తెలుగు)", sa: "Sanskrit (संस्कृतम्)" };
  return labels[lang.toLowerCase()] || lang;
}
