# Chickadee-Labs-static-site

A clean, minimal static website built with Astro for DeeDee Health.

## Development

```bash
npm install          # Install dependencies
npm run dev          # Start development server (http://localhost:4321)
npm run build        # Build for production
npm run preview      # Preview production build
```

## Deployment

The site automatically deploys to GitHub Pages when you push to the main branch.

**Live URL**: https://deedee-development.github.io/Chickadee-Labs-static-site

## MCP Configuration (Optional)

This project uses MCP servers for enhanced development workflows with Claude Code.

### Tally MCP Setup

The Tally MCP server is configured for form data integration.

**Add the server:**
```bash
claude mcp add --transport stdio tally-remote npx -- mcp-remote https://tally-mcp.focuslab.workers.dev/mcp --header "Authorization: Bearer YOUR_TALLY_API_KEY"
```

**List configured servers:**
```bash
claude mcp list
```

**Remove the server:**
```bash
claude mcp remove tally-remote
```

**Note**: Replace `YOUR_TALLY_API_KEY` with your actual Tally API key.

### Getting a Tally API Token

Visit the [Tally MCP repository](https://github.com/learnwithcc/tally-mcp) for instructions on obtaining your API key.
