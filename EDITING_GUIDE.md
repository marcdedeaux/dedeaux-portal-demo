# Editing Guide

## The easiest method

Almost every routine change is made in **content.js**.

1. In GitHub, click `content.js`.
2. Click the pencil icon.
3. Find the section you want to update.
4. Copy an existing row, paste it directly below, and replace the text.
5. Click **Commit changes**.

## Add a Dedeaux-owned property

Find `dplProperties` and add another object:

```js
{ name: "Property Name", address: "123 Main St", city: "Commerce", market: "Central LA", type: "Warehouse", buildingSF: "250,000", landAcres: "12.0", occupancy: "100%", tenant: "Tenant Name", leaseExpiration: "2031-12-31", status: "Owned" }
```

Remember to place a comma between rows.

## Add a tenant requirement

Find `tenantRequirements` and copy an existing row. Replace the tenant, size, market, timing, broker, and notes.

## Add a comp

Find `comps`. The `propertyType` must exactly match one of these:

- Warehouse
- IOS / Yard
- Truck Terminals
- Cold Storage
- Raw Land
- Extra Land Rents
- HVDCs

## Change a tab description

Find `tabs` near the top of `content.js` and edit only the text between quotation marks.

## Update Development Intelligence

Find `development` in `content.js`.

- `markets` controls the market choices.
- `sizeBands` controls building size categories.
- `characteristics` controls all characteristics evaluated.
- `sampleSizeRankings` controls the size-ranking table.
- `recommendation` controls the Perfect Building summary.

## Add files and links

Upload a PDF, spreadsheet, or document into the `docs` folder. Then put its relative path into a report status field, for example:

```js
status: "docs/Central-LA-Market-Report.pdf"
```

The current prototype displays the path as text. A future database version can provide upload buttons and file previews.

## Safe editing rules

- Keep quotation marks around text.
- Keep commas between records.
- Do not rename IDs unless you also update `app.js`.
- Make one small change at a time and verify the site after each commit.
