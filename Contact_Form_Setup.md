# Setting Up the Contact Form
## Google Apps Script — Step-by-Step Guide

This connects the contact form on your website to your Gmail inbox and a
Google Sheet log. Every message submitted goes to both.

---

## What you'll have when done

- 📧 **Email in your inbox** — beautifully formatted, reply-to visitor's email
- 📊 **Row in Google Sheet** — timestamp, name, email, subject, message, language
- 💬 **"Thank you" on website** — visitor sees confirmation instantly
- 🔁 **Unlimited submissions** — no monthly cap, ever

---

## Step 1 — Create the Google Sheet (2 minutes)

1. Go to [sheets.google.com](https://sheets.google.com)
2. Click **+ Blank** to create a new spreadsheet
3. Name it: `Samskruti Contact Form`
4. At the bottom, find the default tab named **"Sheet1"** — double-click it
   and rename it to: **`Responses`**
5. Add these headers in row 1 (one per cell, A through F):
   ```
   Timestamp | Name | Email | Subject | Message | Language
   ```
   *(The script will also auto-create these if you skip this step)*

---

## Step 2 — Add the Apps Script (5 minutes)

1. In your Google Sheet, click the menu: **Extensions → Apps Script**
   *(A new tab opens with a code editor)*

2. Delete everything in the editor (Ctrl+A, then Delete)

3. Open the file `google-apps-script.gs` from your project folder and
   **copy the entire contents**

4. Paste it into the Apps Script editor

5. **Change these two lines at the top:**
   ```javascript
   var RECIPIENT_EMAIL = "your@email.com";   // ← your real email
   var SHEET_NAME      = "Responses";         // ← leave this as-is
   ```

6. Click the 💾 **Save** button (or Ctrl+S)
   Name the project: `Samskruti Contact Form`

---

## Step 3 — Deploy as a Web App (5 minutes)

1. Click **Deploy → New deployment**

2. Click the ⚙ gear icon next to "Type" and select **Web app**

3. Fill in the settings:
   - **Description:** `Samskruti contact form v1`
   - **Execute as:** `Me (your@email.com)`  ← IMPORTANT
   - **Who has access:** `Anyone`  ← IMPORTANT (allows the website to send data)

4. Click **Deploy**

5. Google will ask you to **Authorise access** — click through:
   - "Review permissions" → choose your Google account
   - You may see "Google hasn't verified this app" — click **Advanced**,
     then **Go to Samskruti Contact Form (unsafe)**
     *(This is your own script — it's safe)*
   - Click **Allow**

6. **COPY the Web App URL** — it looks like:
   ```
   https://script.google.com/macros/s/AKfycbxxxxxxxxxxxxxxxx/exec
   ```
   Keep this URL — you need it for Step 4.

---

## Step 4 — Add the URL to your website (2 minutes)

1. Open `index.html` in your text editor

2. Find this line (near the bottom, in the `<script>` section):
   ```javascript
   const APPS_SCRIPT_URL = "YOUR_SCRIPT_URL";
   ```

3. Replace `YOUR_SCRIPT_URL` with the URL you copied:
   ```javascript
   const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbXXXXXX/exec";
   ```

4. Save the file

5. Push to GitHub:
   ```bash
   git add index.html
   git commit -m "Add Google Apps Script contact form URL"
   git push
   ```

---

## Step 5 — Test it (2 minutes)

1. Wait ~60 seconds for GitHub Pages to update

2. Go to your live site and fill in the contact form:
   - Name: `Test`
   - Email: your own email
   - Subject: `Test submission`
   - Message: `This is a test`

3. Click Send — you should see the **🙏 Thank you** message

4. Check your inbox — you should receive a nicely formatted email

5. Check your Google Sheet — you should see a new row with the data

---

## Troubleshooting

### "Thank you" shows but no email received
- Check your spam folder
- Verify `RECIPIENT_EMAIL` is correct in the script
- In Apps Script: **View → Logs** — check for errors

### Form shows error message
- The Apps Script URL may be wrong — double-check Step 4
- Make sure you deployed with **"Who has access: Anyone"** in Step 3
- Try re-deploying: **Deploy → Manage deployments → Edit → New version → Deploy**

### Need to update the script later
- Edit the code in Apps Script
- Click **Deploy → Manage deployments**
- Click the pencil ✏ icon on your deployment
- Change "Version" to **New version**
- Click **Deploy** (no need to re-authorise)

### Want to change the recipient email
- Edit `RECIPIENT_EMAIL` in the Apps Script
- Deploy a new version (as above)
- No changes needed to `index.html`

---

## How the data looks in your Sheet

| Timestamp | Name | Email | Subject | Message | Language |
|---|---|---|---|---|---|
| 2/06/2026, 10:30 AM | Ravi Kumar | ravi@example.com | Invite for event | We would like to invite... | EN |
| 2/06/2026, 2:15 PM | Lakshmi | l@example.com | Blessings | Wonderful website... | TE |

---

## How the email looks in your inbox

```
From:    Samskruti Contact Form
Subject: ✉ Samskruti: Invite for event (from Ravi Kumar)
Reply-To: ravi@example.com

┌─────────────────────────────────────────┐
│ 🕉 Samskruti                            │
│ New contact form message                │
├─────────────────────────────────────────┤
│ From:     Ravi Kumar                    │
│ Email:    ravi@example.com              │
│ Subject:  Invite for event              │
│ Language: English                       │
│ Time:     Thursday, 2 June 2026, 10:30 │
│                                         │
│ Message:                                │
│ We would like to invite Karthikeya...   │
└─────────────────────────────────────────┘
```

Hit **Reply** and your reply goes directly to the visitor — no copy-paste needed.

---

## Files in this folder

| File | Purpose |
|---|---|
| `google-apps-script.gs` | Paste this into Google Apps Script editor |
| `SETUP.md` | This guide |
| `index.html` | Already updated — just add your URL in Step 4 |

---

*Total time: ~15 minutes once. Zero ongoing maintenance.*
