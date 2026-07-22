/* Minimal markdown-to-HTML renderer. No external dependencies.
   Not a full CommonMark parser — built for straightforward project write-ups. */

export function renderMarkdown(md) {
  if (!md) return "";

  let src = md.trim();

  // Escape HTML first
  src = src.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // Fenced code blocks (protect them from further processing)
  const codeBlocks = [];
  src = src.replace(/```([\s\S]*?)```/g, (m, code) => {
    codeBlocks.push(code.replace(/^\n/, "").trimEnd());
    return `@@CODEBLOCK${codeBlocks.length - 1}@@`;
  });

  // Tables (simple GFM-style)
  src = src.replace(
    /^\|(.+)\|\n\|[\s:|-]+\|\n((?:\|.*\|\n?)*)/gm,
    (m, headerLine, bodyLines) => {
      const headers = headerLine.split("|").map(s => s.trim()).filter(Boolean);
      const rows = bodyLines
        .trim()
        .split("\n")
        .map(row => row.split("|").map(s => s.trim()).filter(Boolean));
      let table = "<table><thead><tr>";
      headers.forEach(hd => (table += `<th>${hd}</th>`));
      table += "</tr></thead><tbody>";
      rows.forEach(row => {
        table += "<tr>";
        row.forEach(cell => (table += `<td>${cell}</td>`));
        table += "</tr>";
      });
      table += "</tbody></table>";
      return table;
    }
  );

  // Headers
  src = src.replace(/^###### (.*)$/gm, "<h6>$1</h6>");
  src = src.replace(/^##### (.*)$/gm, "<h5>$1</h5>");
  src = src.replace(/^#### (.*)$/gm, "<h4>$1</h4>");
  src = src.replace(/^### (.*)$/gm, "<h3>$1</h3>");
  src = src.replace(/^## (.*)$/gm, "<h2>$1</h2>");
  src = src.replace(/^# (.*)$/gm, "<h1>$1</h1>");

  // Checklists (must run before generic list handling)
  src = src.replace(/^- \[x\] (.*)$/gim, '<li class="done">$1</li>');
  src = src.replace(/^- \[ \] (.*)$/gm, '<li class="todo">$1</li>');

  // Bold, italic, inline code, images, links (images must run before links —
  // both share the `[label](target)` shape, images just have a leading `!`)
  src = src.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  src = src.replace(/(?<!\*)\*([^*]+?)\*(?!\*)/g, "<em>$1</em>");
  src = src.replace(/`([^`]+)`/g, "<code>$1</code>");
  src = src.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" loading="lazy">');
  src = src.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');

  // Blockquotes
  src = src.replace(/^&gt; (.*)$/gm, "<blockquote>$1</blockquote>");

  // Unordered list items (plain -, *)
  src = src.replace(/^(?:- |\* )(.*)$/gm, "<li>$1</li>");
  src = src.replace(/(<li[^>]*>[\s\S]*?<\/li>\n?)+/g, m => `<ul>${m}</ul>`);

  // Paragraphs: split remaining text on blank lines
  const blocks = src.split(/\n{2,}/).map(block => {
    const t = block.trim();
    if (!t) return "";
    if (/^(<h[1-6]|<ul|<ol|<blockquote|<table|@@CODEBLOCK)/.test(t)) return t;
    return `<p>${t.replace(/\n/g, "<br>")}</p>`;
  });

  let html = blocks.join("\n");

  // Restore code blocks
  html = html.replace(/@@CODEBLOCK(\d+)@@/g, (m, i) => `<pre><code>${codeBlocks[Number(i)]}</code></pre>`);

  return html;
}
