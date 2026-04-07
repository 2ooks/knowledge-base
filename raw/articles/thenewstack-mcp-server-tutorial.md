# MCP servers turn Claude into a reasoning engine for your data

**Source:** https://thenewstack.io/build-mcp-server-tutorial/
**Date:** April 6th, 2026
**Author:** Jessica Wachtel

---

AI ENGINEERING / DEVELOPER TOOLS / MODEL CONTEXT PROTOCOL (MCP)

MCP servers turn Claude into a reasoning engine for your data

Learn how to build your first MCP server using TypeScript and connect it to Claude Desktop with this step-by-step calculator app tutorial for developers.

Apr 6th, 2026 5:01pm by Jessica Wachtel

Sara Oliveira for Unsplash+

Claude knows virtually everything that's ever been publicly available on the internet by default. But it knows absolutely nothing about you or your data. Yes, you could always copy and paste an Excel sheet with your company's monthly revenue, but if you're looking at something like five years of historical enterprise sales data, it isn't so easy to input those files.

Model Context Protocol (MCP) servers change this by connecting your data directly to Claude. Through an MCP server, Claude can suddenly bring its reasoning, judgment, and analytics to your data without requiring you to participate in any frustrating workarounds. (Raise your hand if you've sunk way too much time into an "it's-so-easy" workaround.)

People are adopting AI. So why make customers load their own data?

Anthropic made it pretty easy for companies to build MCP servers. The ecosystem has grown quickly in response.

Building your first MCP server isn't so hard — and we'll create a calculator app in an IDE (I use VS Code) and connect its functionality directly to Claude Desktop via an MCP server.

ML-Powered Kubernetes Rightsizing
Boost performance. Reduce manual work. Cut waste.

Why a calculator app? I wanted to build something easy that pulls the focus away from connecting to an external API or complicated business logic and brings it to what's really important here: rules and best practices for building an MCP server. You can then take the skills learned in this simple application and apply them to something much more complicated next.

Claude knows virtually everything that's ever been publicly available on the internet by default. But it knows absolutely nothing about you or your data.

We are going to build our MCP using the TypeScript SDK (open-source file here). The Typescript and Python SDKs are the most commonly used MCP SDKs.

You will need the following to get started:

TRENDING STORIES
1. Why pgEdge thinks MCP (not an API) is the right way for AI agents to talk to databases
2. MCP maintainers from Anthropic, AWS, Microsoft, and OpenAI lay out enterprise security roadmap at Dev Summit
3. MCP servers turn Claude into a reasoning engine for your data
4. WebMCP turns any Chrome web page into an MCP server for AI agents
5. MCP is everywhere, but don't panic. Here's why your existing APIs still matter.

Node.js and its package manager NPM
An IDE like VS Code
Claude Desktop
A basic understanding of coding fundamentals

Let's get started.

Build an MCP server that connects to Claude

The first thing we need to do is set up our file structure and install packages in the terminal connected to your IDE.

Create a new folder and drop into it:

```
mkdir calculator-mcp-server
cd calculator-mcp-server
```

Initialize a Node project:

```
npm init -y
```

Install the MCP SDK:

```
npm install @modelcontextprotocol/sdk
```

Install the dependencies that allow you to compile and run Typescript locally:

```
npm install --save-dev typescript @types/node tsx
```

Install Zod for input validation and schema generation

```
npm install zod
```

Build the tsconfig.json

Node can't run Typescript directly. The `tsconfig.json` tells the TypeScript compiler how to convert Typescript code into JavaScript.

Create `tsconfig.json` in your project's root folder and paste the following code into it:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "Node16",
    "moduleResolution": "Node16",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

If you're using VS Code, you may get an error in your `tsconfig.json` that says no inputs were found in config file….. . This is a weird thing I kept running into with VS Code. The solution, which seems like a problem itself, is to delete your `tsconfig.json` then remake the file, and paste in the same code. I don't love it either (shrugs).

Update the `package.json` to include this expanded `scripts` object:

```json
"scripts": {
  "build": "tsc",
  "start": "node dist/index.js",
  "dev": "tsx src/index.ts"
}
```

Create the `src` folder and `index.ts`.

```
mkdir src
touch src/index.ts
```

Your file structure should look like this:

```
calculator-mcp-server/
├── src/
│   └── index.ts
├── package.json
├── tsconfig.json
└── node_modules/
```

Build the MCP server

We're going to build this all in one file, `src/index.ts`. I'm going to paste the full code first, followed by a breakdown of what each section does, for anyone who wants to skip ahead.

```typescript
import { McpServer } from "@modelcontextprotocol/sdk";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
  name: "calculator",
  version: "1.0.0",
});

server.tool(
  "calculate",
  "Perform basic arithmetic operations",
  {
    operation: z.enum(["add", "subtract", "multiply", "divide"]).describe("The math operation to perform"),
    a: z.number().describe("First number"),
    b: z.number().describe("Second number"),
  },
  async ({ operation, a, b }) => {
    let result: number;

    switch (operation) {
      case "add":
        result = a + b;
        break;
      case "subtract":
        result = a - b;
        break;
      case "multiply":
        result = a * b;
        break;
      case "divide":
        if (b === 0) {
          throw new Error("Cannot divide by zero");
        }
        result = a / b;
        break;
    }

    return {
      content: [
        {
          type: "text",
          text: `${a} ${operation} ${b} = ${result}`,
        },
      ],
    };
  }
);

const transport = new StdioServerTransport();
server.connect(transport).catch(console.error);
```

Section 1: Import the MCP SDK

```typescript
import { McpServer } from "@modelcontextprotocol/sdk";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
```

These are your import statements.

`McpServer` creates the server.
`StdioServerTransport` handles the communication with Claude.
`z` validates the inputs Claude sends to our application.

Section 2: Create the server with a name and version

```typescript
const server = new McpServer({
  name: "calculator",
  version: "1.0.0",
});
```

This section creates and names your server. Claude will use the name and version to identify which server it's talking to. One of the most, if not the most important, concepts in this blog is in this section. The `server.tool()`'s name, description, Zod schema, and handler function are the heart of MCP.

Section 3: Define the calculator tool

```typescript
server.tool(
  "calculate",
  "Perform basic arithmetic operations",
  {
    operation: z.enum(["add", "subtract", "multiply", "divide"]).describe("The math operation to perform"),
    a: z.number().describe("First number"),
    b: z.number().describe("Second number"),
  },
  async ({ operation, a, b }) => {
    // handler logic
  }
);
```

Here is where we'll build `calculate`, tell Claude what `calculate` does, what inputs it expects, and the logic to run. We'll use the Zod schema to define the data's shape.

Section 4: The logic that runs when Claude calls the tool

```typescript
let result: number;

switch (operation) {
  case "add":
    result = a + b;
    break;
  case "subtract":
    result = a - b;
    break;
  case "multiply":
    result = a * b;
    break;
  case "divide":
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    result = a / b;
    break;
}
```

The business logic. This section receives Claude's inputs, performs the requested mathematical operation, and handles edge cases.

Section 5: Return the result as text context

```typescript
return {
  content: [
    {
      type: "text",
      text: `${a} ${operation} ${b} = ${result}`,
    },
  ],
};
```

This sends the result back to Claude in the format MCP expects. Claude uses this value in its response to the user.

Section 6: Connect over stdio

```typescript
const transport = new StdioServerTransport();
server.connect(transport).catch(console.error);
```

Logic to start and connect the server to Claude Desktop using standard input/output.

We're ready to build the project. Run the code below, and you'll see a `dist/` folder appear in your file tree shortly after.

```
npm run build
```

Connecting to Claude

Open Claude Desktop and go to Settings > Developer > Edit Config.

This will open a JSON file called `claude_desktop_config.json`. Add our new server to the `mcpServers` object. This file will likely launch in your IDE. Just edit and save as you would any other file.

```json
{
  "mcpServers": {
    "calculator": {
      "command": "node",
      "args": ["/absolute/path/to/calculator-mcp-server/dist/index.js"]
    }
  }
}
```

Then quit Claude Desktop and relaunch. This is a necessary step as Claude Desktop only reads then config on startup.

After relaunching, open the top Chat section (not Cowork or Code). Then click the + icon in the bottom lefthand side of the chat input box.

App leaders: Explore the agenda.

Then hover over Connectors and it should pop up a new menu with the calculator on it. Make sure calculator is toggled on.

Before running a calculation, tell Claude to use the calculator in the chat window. It will pop up a menu with always allow, allow once, or deny. Choose either "always allow" or "allow once".

Now you're ready to run a calculation. You can tell it's using your tool while in progress because the word "request" will display under "calculate," just below the orange Claude logo.

You can tell Claude uses your tool because it will say "Calculate >" just before it shows you the answer.

If you've made it here, you can officially say you built your first MCP. It only gets more complicated from there, but the fundamentals like defining tools with clear schemas, writing handlers that return structured responses, and connecting your server to Claude via a config file remain the same.

You now have the tools you need to connect any application you built to Claude Desktop.

---

Jessica Wachtel is a developer marketing writer at InfluxData where she creates content that helps make the world of time series data more understandable and accessible. Jessica has a background in software development and technical journalism.

TNS owner Insight Partners is an investor in: Anthropic.
