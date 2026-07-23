/*
  EASY EDITING FILE
  -----------------
  Most text, tab names, descriptions, tables, and sample records live here.
  Edit this file in GitHub, click Commit changes, and GitHub Pages updates automatically.
*/
window.PORTAL_CONTENT = {
  portalName: "Industrial Intelligence Portal",
  tabs: [
    { id: "main", label: "Main Page", description: "Click this tab for the portal directory, universal search, and curated industry articles." },
    { id: "comps", label: "Comps", description: "Click this tab for all comparable lease, sale, available, and pipeline properties organized by property type, including Warehouse, IOS / Yard, Truck Terminals, Cold Storage, Raw Land, HVDCs, and Extra Land Rents." },
    { id: "tenant-requirements", label: "Tenant Requirements", description: "Click this tab for the latest tenant requirements in an editable spreadsheet." },
    { id: "dpl-properties", label: "DPL Properties", description: "Click this tab for a master list of all properties owned by Dedeaux Properties." },
    { id: "ios-intelligence", label: "IOS Intelligence", description: "Click this tab for the latest internal IOS market reports and summaries of market conditions." },
    { id: "pipeline", label: "Building Pipeline Reports", description: "Click this tab for buildings under construction and planned industrial developments." },
    { id: "broker-research", label: "Broker Market Research", description: "Click this tab for broker market reports organized by Southern California market." },
    { id: "internal-reports", label: "Internal Reports", description: "Click this tab for Dedeaux white papers, research, presentations, and internal analyses." },
    { id: "actionable-intel", label: "Actionable Intel", description: "Click this tab for internal reports and market intelligence, opportunities, and important developments requiring attention." },
    { id: "targets", label: "Possible Properties to Target", description: "Click this tab for curated acquisition and redevelopment opportunities." },
    { id: "development-intelligence", label: "Development Intelligence", description: "Click this tab to determine the exact building most likely to rent quickly and achieve the highest rent in each Southern California market." }
  ],

  articles: [
    { title: "Add a curated industry article", source: "Editor", date: "Today", note: "Edit the articles list in content.js to replace this placeholder." },
    { title: "Add a second market article", source: "Editor", date: "Today", note: "Keep only articles that are relevant to Dedeaux strategy." }
  ],

  compPropertyTypes: {
    "Warehouse": ["Lease", "Sales", "Available", "Pipeline"],
    "IOS / Yard": ["Lease", "Sales", "Available", "Pipeline"],
    "Truck Terminals": ["Lease", "Sales", "Available", "Pipeline"],
    "Cold Storage": ["Lease", "Sales", "Available", "Pipeline"],
    "Raw Land": ["Land Sales", "Land Available", "Planned Developments", "Ground Leases"],
    "Extra Land Rents": ["Lease", "Available", "Historical", "Market Summary"],
    "HVDCs": ["Lease", "Sales", "Available", "Pipeline"]
  },

  comps: [
    { propertyName: "Sample Logistics Center", address: "1000 Example Avenue", city: "Commerce", submarket: "Central LA", propertyType: "Warehouse", category: "Lease", buildingSF: "250,000", landAcres: "12.4", rent: "$2.10 NNN", date: "2026-06-15" },
    { propertyName: "Sample Yard", address: "2000 Example Street", city: "Carson", submarket: "South Bay", propertyType: "IOS / Yard", category: "Available", buildingSF: "18,000", landAcres: "7.2", rent: "$0.62/LSF", date: "2026-07-01" }
  ],

  tenantRequirements: [
    { priority: "High", tenant: "Example Logistics User", requirement: "200,000–300,000 SF", market: "Central LA", timing: "Q4 2026", broker: "Add broker", notes: "Cross-dock preferred; strong trailer parking." },
    { priority: "Medium", tenant: "Example Food User", requirement: "100,000–175,000 SF", market: "South Bay", timing: "Q1 2027", broker: "Add broker", notes: "Cold-capable building and heavy power." }
  ],

  dplProperties: [
    { name: "Add Dedeaux Property", address: "Property address", city: "City", market: "Market", type: "Warehouse", buildingSF: "—", landAcres: "—", occupancy: "—", tenant: "—", leaseExpiration: "—", status: "Owned" }
  ],

  reports: {
    "ios-intelligence": [
      { title: "IOS Market Intelligence Report", market: "Southern California", date: "Add date", type: "Internal Report", status: "Add file link" }
    ],
    "pipeline": [
      { title: "Southern California Industrial Pipeline", market: "All Markets", date: "Add date", type: "Pipeline Report", status: "Add file link" }
    ],
    "broker-research": [
      { title: "Broker Market Report", market: "Central LA", date: "Add date", type: "Broker Research", status: "Add file link" }
    ],
    "internal-reports": [
      { title: "Internal Research Report", market: "Southern California", date: "Add date", type: "Internal Report", status: "Add file link" }
    ]
  },

  actionableIntel: [
    { priority: "Requires Attention", title: "Add an important development", category: "Important Development", market: "Southern California", date: "Today", action: "Describe the decision or follow-up required." },
    { priority: "Opportunity", title: "Add an actionable opportunity", category: "Opportunity", market: "Central LA", date: "Today", action: "Describe why this matters and who should act." }
  ],

  targetProperties: [
    { property: "Add Target Property", address: "Address", market: "Market", acres: "—", existingSF: "—", thesis: "Add acquisition or redevelopment thesis", status: "Research" }
  ],

  development: {
    markets: ["Inland Empire West", "Inland Empire East", "Inland Empire South", "Central LA", "South Bay", "Orange County", "San Gabriel Valley", "San Fernando Valley"],
    sizeBands: ["Under 100,000 SF", "100,000–200,000 SF", "200,000–300,000 SF", "300,000–400,000 SF", "400,000–500,000 SF", "500,000–600,000 SF", "600,000+ SF"],
    characteristics: [
      "Site size", "Land coverage / FAR", "Site shape and efficiency", "Corner location", "Freeway access", "Port access", "Rail / intermodal access", "Multiple points of ingress and egress", "Driveway width", "Separate truck and auto entrances", "Internal truck circulation", "Truck queuing capacity", "Trailer parking ratio", "Auto parking ratio", "Secured yard", "Expansion potential",
      "Building size", "Building width", "Building depth", "Building shape efficiency", "Cross-dock / rear-load / side-load configuration", "Clear height", "Bay spacing", "Column spacing", "Dock-high door count", "Dock-door ratio", "Dock-door spacing", "Dock levelers", "Hydraulic / pit levelers", "Grade-level doors", "Truck court depth", "Truck apron width", "Slab thickness", "Floor-load capacity", "Roof-load capacity", "ESFR sprinklers", "Fire pump / water capacity",
      "Electrical capacity", "Transformer capacity", "Redundant power feed", "Natural gas", "Water and sewer capacity", "Fiber availability", "Backup-generator readiness", "Battery-storage readiness", "EV-truck charging readiness", "Solar readiness", "Automation / robotics readiness", "Conveyor readiness", "Mezzanine capability", "Flexible demising", "Office percentage", "Office location and finish", "Security systems", "Guard house", "Lighting", "Employee amenities"
    ],
    sampleSizeRankings: [
      { rank: 1, size: "200,000–300,000 SF", rent: "Add current data", premium: "—", days: "—", availability: "—", leases: "—", demand: "—", confidence: "Not yet scored" },
      { rank: 2, size: "100,000–200,000 SF", rent: "Add current data", premium: "—", days: "—", availability: "—", leases: "—", demand: "—", confidence: "Not yet scored" }
    ],
    recommendation: {
      market: "Central LA",
      size: "To be calculated from current market data",
      site: "To be calculated",
      configuration: "To be calculated",
      summary: "The final recommendation will identify the building size, site size, configuration, and complete feature package that provides the strongest current combination of achieved rent, tenant demand, lease velocity, competing supply, construction cost, and future demand in the selected market."
    }
  }
};
