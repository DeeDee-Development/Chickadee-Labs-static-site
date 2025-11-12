import cytoscape from 'cytoscape';
import dagre from 'cytoscape-dagre';

// Register dagre extension
cytoscape.use(dagre);

export function initArchitectureDiagram() {
  const container = document.getElementById('cy');
  if (!container) {
    console.error('Cytoscape container not found');
    return;
  }

  // Initialize Cytoscape diagram
  const cy = cytoscape({
    container: container,

    elements: [
      // End Users
      { data: { id: 'senior', label: '👴 Senior User', type: 'user', category: 'users', details: '• Wears Apple Watch\n• Uses iOS App Daily\n• Health Data Source\n• Fall Risk Monitoring' } },
      { data: { id: 'caregiver', label: '👨‍👩‍👧 Family Caregiver', type: 'user', category: 'users', details: '• Receives SMS Alerts\n• Opts In via Website\n• Real-time Notifications\n• Can View Dashboard' } },

      // Client Applications
      { data: { id: 'ios', label: '📱 iOS App\nSwift / SwiftUI', type: 'client', category: 'frontend', details: '• Health Data: HealthKit\n• App Data: SwiftData\n• Apple Watch Sync\n• Push Notifications\n• Offline Support' } },
      { data: { id: 'website', label: '🌐 Static Website\nAstro / TypeScript', type: 'client', category: 'frontend', details: '• Marketing Pages\n• SMS Opt-In Portal\n• GitHub Pages\n• SEO Optimized' } },

      // API Gateway & Backend
      { data: { id: 'backend', label: '⚡ Backend API\nPython / FastAPI', type: 'api', category: 'backend', details: '• RESTful API Endpoints\n• Health Data Processing\n• Fall Risk Analysis Engine\n• Authentication/Authorization\n• Rate Limiting' } },
      { data: { id: 'ml-engine', label: '🤖 ML Engine\nFall Risk Analysis', type: 'ml', category: 'backend', details: '• Walking Pattern Analysis\n• Sleep Quality Scoring\n• Activity Level Trends\n• Predictive Risk Models\n• Real-time Processing' } },

      // Data Layer
      { data: { id: 'database', label: '🗄️ MongoDB\nPrimary Database', type: 'data', category: 'data', details: '• User Profiles\n• Health Metrics\n• SMS Consent\n• Time-series Data\n\n🖱️ Click to expand', clickable: true } },
      { data: { id: 'cache', label: '⚡ Redis Cache\nSession & Data', type: 'cache', category: 'data', details: '• Session Management\n• API Response Cache\n• Rate Limiting\n• Real-time Counters' } },

      // External Services
      { data: { id: 'sms', label: '📲 Telnyx API\nSMS Service', type: 'external', category: 'external', details: '• Alert Delivery\n• Rate Limiting\n• Delivery Tracking\n• Two-way Messaging' } },
      { data: { id: 'auth', label: '🔐 Auth Service\nJWT + OAuth', type: 'auth', category: 'external', details: '• User Authentication\n• Token Management\n• Social Login\n• MFA Support' } },
      { data: { id: 'monitoring', label: '📊 Monitoring\nSentry + Analytics', type: 'monitoring', category: 'infrastructure', details: '• Error Tracking\n• Performance Monitoring\n• User Analytics\n• Uptime Monitoring' } },

      // Cloud Infrastructure
      { data: { id: 'cloudrun', label: '☁️ Google Cloud Run\nContainer Platform', type: 'infrastructure', category: 'infrastructure', details: '• Auto-scaling\n• Serverless Containers\n• 99.9% Uptime SLA\n• Global Load Balancing' } },
      { data: { id: 'storage', label: '💾 Cloud Storage\nBackups & Logs', type: 'infrastructure', category: 'infrastructure', details: '• Daily Backups\n• Log Aggregation\n• File Storage\n• CDN Integration' } },

      // Edges - User Interactions
      { data: { source: 'senior', target: 'ios', label: 'Uses Daily', type: 'user-interaction' } },
      { data: { source: 'caregiver', target: 'website', label: 'Opt-In Portal', type: 'user-interaction' } },

      // Edges - API Calls
      { data: { source: 'ios', target: 'backend', label: 'HTTPS\nHealth Metrics', type: 'api-call' } },
      { data: { source: 'website', target: 'backend', label: 'HTTPS\nSMS Consent', type: 'api-call' } },
      { data: { source: 'ios', target: 'auth', label: 'Authentication', type: 'auth-flow' } },

      // Edges - Backend Processing
      { data: { source: 'backend', target: 'ml-engine', label: 'Health Data\nAnalysis', type: 'processing' } },
      { data: { source: 'backend', target: 'database', label: 'Read/Write\nQueries', type: 'data-flow' } },
      { data: { source: 'backend', target: 'cache', label: 'Cache\nLookup', type: 'data-flow' } },
      { data: { source: 'ml-engine', target: 'database', label: 'Store\nPredictions', type: 'data-flow' } },

      // Edges - Alert Flow
      { data: { source: 'ml-engine', target: 'backend', label: 'Risk Detected', type: 'alert-trigger' } },
      { data: { source: 'backend', target: 'sms', label: 'Send Alert', type: 'notification' } },
      { data: { source: 'sms', target: 'caregiver', label: '🚨 Fall Risk Alert\nReal-time SMS', type: 'notification', alert: true } },

      // Edges - Infrastructure
      { data: { source: 'backend', target: 'cloudrun', label: 'Deployed On', type: 'infrastructure' } },
      { data: { source: 'database', target: 'storage', label: 'Daily Backup', type: 'infrastructure' } },
      { data: { source: 'backend', target: 'monitoring', label: 'Logs & Metrics', type: 'monitoring' } },
      { data: { source: 'cloudrun', target: 'monitoring', label: 'Health Checks', type: 'monitoring' } },
    ],

    style: [
      // Base node styling
      {
        selector: 'node',
        style: {
          'label': 'data(label)',
          'text-valign': 'center',
          'text-halign': 'center',
          'text-wrap': 'wrap',
          'text-max-width': '140px',
          'font-size': '13px',
          'font-weight': 'bold' as any,
          'color': '#fff',
          'background-color': '#0066EE',
          'width': '180px',
          'height': '140px',
          'shape': 'roundrectangle',
          'border-width': '2px',
          'border-color': 'transparent',
          'text-outline-color': 'transparent',
          'text-outline-width': 0,
        }
      },

      // User nodes
      {
        selector: 'node[type="user"]',
        style: {
          'background-fill': 'linear-gradient',
          'background-gradient-stop-colors': ['#667eea', '#764ba2'] as any,
          'background-gradient-direction': 'to-bottom-right',
          'width': '170px',
          'height': '130px',
          'shape': 'ellipse',
        }
      },

      // Client apps (frontend)
      {
        selector: 'node[type="client"]',
        style: {
          'background-fill': 'linear-gradient',
          'background-gradient-stop-colors': ['#0066EE', '#00A8FF'] as any,
          'background-gradient-direction': 'to-bottom-right',
          'width': '190px',
          'height': '145px',
        }
      },

      // iOS App - iPhone shape
      {
        selector: 'node#ios',
        style: {
          'shape': 'roundrectangle',
          'width': '130px',
          'height': '220px',
          'background-fill': 'linear-gradient',
          'background-gradient-stop-colors': ['#1a1a1a', '#2d2d2d'] as any,
          'background-gradient-direction': 'to-bottom',
          'border-width': '4px',
          'border-color': '#444',
          'border-style': 'solid',
        }
      },

      // Backend API
      {
        selector: 'node[type="api"]',
        style: {
          'background-fill': 'linear-gradient',
          'background-gradient-stop-colors': ['#f093fb', '#f5576c'] as any,
          'background-gradient-direction': 'to-bottom-right',
          'width': '220px',
          'height': '170px',
          'border-width': '3px',
          'border-color': '#fff',
          'border-opacity': 0.3,
        }
      },

      // ML Engine
      {
        selector: 'node[type="ml"]',
        style: {
          'background-fill': 'linear-gradient',
          'background-gradient-stop-colors': ['#4facfe', '#00f2fe'] as any,
          'background-gradient-direction': 'to-bottom-right',
          'width': '210px',
          'height': '160px',
          'shape': 'roundrectangle',
        }
      },

      // Data storage
      {
        selector: 'node[type="data"]',
        style: {
          'background-fill': 'linear-gradient',
          'background-gradient-stop-colors': ['#43e97b', '#38f9d7'] as any,
          'background-gradient-direction': 'to-bottom-right',
          'width': '200px',
          'height': '150px',
        }
      },

      // Cache
      {
        selector: 'node[type="cache"]',
        style: {
          'background-fill': 'linear-gradient',
          'background-gradient-stop-colors': ['#fa709a', '#fee140'] as any,
          'background-gradient-direction': 'to-bottom-right',
          'width': '190px',
          'height': '140px',
        }
      },

      // External services
      {
        selector: 'node[type="external"]',
        style: {
          'background-fill': 'linear-gradient',
          'background-gradient-stop-colors': ['#ff9a56', '#ff6a88'] as any,
          'background-gradient-direction': 'to-bottom-right',
          'width': '200px',
          'height': '145px',
        }
      },

      // Auth service
      {
        selector: 'node[type="auth"]',
        style: {
          'background-fill': 'linear-gradient',
          'background-gradient-stop-colors': ['#fbc2eb', '#a6c1ee'] as any,
          'background-gradient-direction': 'to-bottom-right',
          'width': '195px',
          'height': '140px',
        }
      },

      // Monitoring
      {
        selector: 'node[type="monitoring"]',
        style: {
          'background-fill': 'linear-gradient',
          'background-gradient-stop-colors': ['#a8edea', '#fed6e3'] as any,
          'background-gradient-direction': 'to-bottom-right',
          'width': '200px',
          'height': '145px',
        }
      },

      // Infrastructure
      {
        selector: 'node[type="infrastructure"]',
        style: {
          'background-fill': 'linear-gradient',
          'background-gradient-stop-colors': ['#d299c2', '#fef9d7'] as any,
          'background-gradient-direction': 'to-bottom-right',
          'width': '210px',
          'height': '150px',
        }
      },

      // Clickable database highlight
      {
        selector: 'node#database',
        style: {
          'border-width': '3px',
          'border-color': '#FFD700',
          'border-style': 'solid',
        }
      },

      // Base edge styling
      {
        selector: 'edge',
        style: {
          'width': 2.5,
          'line-color': '#999',
          'target-arrow-color': '#999',
          'target-arrow-shape': 'triangle',
          'curve-style': 'bezier',
          'arrow-scale': 1.3,
          'label': 'data(label)',
          'font-size': '11px',
          'color': '#555',
          'text-rotation': 'autorotate',
          'text-margin-y': -12,
          'text-background-opacity': 0.95,
          'text-background-color': '#ffffff',
          'text-background-padding': '3px',
          'text-background-shape': 'roundrectangle',
          'line-style': 'solid',
        }
      },

      // User interaction edges
      {
        selector: 'edge[type="user-interaction"]',
        style: {
          'line-color': '#667eea',
          'target-arrow-color': '#667eea',
          'width': 3,
          'line-style': 'solid',
        }
      },

      // API call edges
      {
        selector: 'edge[type="api-call"]',
        style: {
          'line-color': '#0066EE',
          'target-arrow-color': '#0066EE',
          'width': 3.5,
        }
      },

      // Auth flow edges
      {
        selector: 'edge[type="auth-flow"]',
        style: {
          'line-color': '#a6c1ee',
          'target-arrow-color': '#a6c1ee',
          'width': 2.5,
          'line-style': 'dashed',
        }
      },

      // Processing edges
      {
        selector: 'edge[type="processing"]',
        style: {
          'line-color': '#4facfe',
          'target-arrow-color': '#4facfe',
          'width': 4,
          'arrow-scale': 1.5,
        }
      },

      // Data flow edges
      {
        selector: 'edge[type="data-flow"]',
        style: {
          'line-color': '#43e97b',
          'target-arrow-color': '#43e97b',
          'width': 3,
        }
      },

      // Alert trigger edges
      {
        selector: 'edge[type="alert-trigger"]',
        style: {
          'line-color': '#ff6a88',
          'target-arrow-color': '#ff6a88',
          'width': 4,
          'line-style': 'solid',
        }
      },

      // Notification edges
      {
        selector: 'edge[type="notification"]',
        style: {
          'line-color': '#FF6B35',
          'target-arrow-color': '#FF6B35',
          'width': 4.5,
          'color': '#FF6B35',
          'font-weight': 'bold',
          'arrow-scale': 1.6,
        }
      },

      // Infrastructure edges
      {
        selector: 'edge[type="infrastructure"]',
        style: {
          'line-color': '#d299c2',
          'target-arrow-color': '#d299c2',
          'width': 2,
          'line-style': 'dotted',
        }
      },

      // Monitoring edges
      {
        selector: 'edge[type="monitoring"]',
        style: {
          'line-color': '#a8edea',
          'target-arrow-color': '#a8edea',
          'width': 2,
          'line-style': 'dotted',
        }
      },

      // Alert edges (legacy support)
      {
        selector: 'edge[alert]',
        style: {
          'line-color': '#FF6B35',
          'target-arrow-color': '#FF6B35',
          'width': 4.5,
          'color': '#FF6B35',
          'font-weight': 'bold',
        }
      },

      // Hover states
      {
        selector: 'node:active',
        style: {
          'overlay-opacity': 0.25,
          'overlay-color': '#0066EE',
        }
      },

      // Selected state
      {
        selector: 'node:selected',
        style: {
          'border-width': '4px',
          'border-color': '#FFD700',
        }
      },

      {
        selector: 'edge:selected',
        style: {
          'width': 5,
          'line-color': '#FFD700',
          'target-arrow-color': '#FFD700',
        }
      },
    ],

    layout: {
      name: 'dagre',
      rankDir: 'TB',
      nodeSep: 80,
      rankSep: 120,
      padding: 50,
    } as any,

    minZoom: 0.5,
    maxZoom: 2,
  });

  // Node click handler for database
  cy.on('tap', 'node#database', function() {
    const modal = document.getElementById('database-modal');
    if (modal) {
      modal.style.display = 'flex';
    }
  });

  // Hover effect
  cy.on('mouseover', 'node', function(evt) {
    const node = evt.target;
    node.style('opacity', 0.8);
    document.body.style.cursor = node.data('clickable') ? 'pointer' : 'grab';
  });

  cy.on('mouseout', 'node', function(evt) {
    const node = evt.target;
    node.style('opacity', 1);
    document.body.style.cursor = 'default';
  });

  // Tooltip on hover
  let tooltip: HTMLDivElement | null = null;
  cy.on('mouseover', 'node', function(evt) {
    const node = evt.target;
    const details = node.data('details');

    if (!tooltip) {
      tooltip = document.createElement('div');
      tooltip.style.cssText = `
        position: absolute;
        background: rgba(0, 0, 0, 0.9);
        color: white;
        padding: 12px;
        border-radius: 8px;
        font-size: 12px;
        max-width: 250px;
        white-space: pre-line;
        z-index: 999;
        pointer-events: none;
        line-height: 1.5;
      `;
      document.body.appendChild(tooltip);
    }

    tooltip.innerHTML = details;
    tooltip.style.display = 'block';
  });

  cy.on('mousemove', function(evt) {
    if (tooltip) {
      tooltip.style.left = evt.originalEvent.pageX + 15 + 'px';
      tooltip.style.top = evt.originalEvent.pageY + 15 + 'px';
    }
  });

  cy.on('mouseout', 'node', function() {
    if (tooltip) {
      tooltip.style.display = 'none';
    }
  });

  // Modal close handlers
  const modal = document.getElementById('database-modal');
  const closeBtn = document.querySelector('.close-modal');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }

  // Control button handlers
  const resetZoomBtn = document.getElementById('reset-zoom');
  const fitViewBtn = document.getElementById('fit-view');
  const exportPngBtn = document.getElementById('export-png');

  if (resetZoomBtn) {
    resetZoomBtn.addEventListener('click', () => {
      cy.zoom(1);
      cy.center();
    });
  }

  if (fitViewBtn) {
    fitViewBtn.addEventListener('click', () => {
      cy.fit(undefined, 50);
    });
  }

  if (exportPngBtn) {
    exportPngBtn.addEventListener('click', () => {
      const png = cy.png({
        output: 'blob',
        bg: '#f8f9fa',
        full: true,
        scale: 2,
      });
      const url = URL.createObjectURL(png);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'deedee-architecture.png';
      link.click();
      URL.revokeObjectURL(url);
    });
  }

  // Highlight connected nodes on selection
  cy.on('select', 'node', function(evt) {
    const node = evt.target;
    const connectedEdges = node.connectedEdges();
    const connectedNodes = connectedEdges.connectedNodes();

    // Dim unconnected elements
    cy.elements().not(node).not(connectedNodes).not(connectedEdges).style('opacity', 0.2);
    connectedEdges.style('opacity', 1);
    connectedNodes.style('opacity', 1);
  });

  cy.on('unselect', 'node', function() {
    cy.elements().style('opacity', 1);
  });
}
