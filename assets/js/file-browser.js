async function loadFiles() {
  const response = await fetch('/manifest.json');
  const data = await response.json();

  const container =
    document.getElementById('file-browser');

  renderNode(data, container);
}

function renderNode(node, parent) {
  const item = document.createElement('div');
  item.className = node.type;

  if (node.type === 'folder') {
    const header = document.createElement('div');
    header.className = 'folder-header';
    header.textContent = '📁 ' + node.name;

    const children = document.createElement('div');
    children.className = 'folder-children';

    let open = true;

    header.onclick = () => {
      open = !open;
      children.style.display =
        open ? 'block' : 'none';
    };

    if (node.children) {
      node.children.forEach(child => {
        renderNode(child, children);
      });
    }

    item.appendChild(header);
    item.appendChild(children);
  }

  else if (node.type === 'file') {
    const link = document.createElement('a');

    link.href = node.url;
    link.textContent =
      `📄 ${node.name} (${formatSize(node.size)})`;

    link.download = '';

    item.appendChild(link);
  }

  parent.appendChild(item);
}

function formatSize(bytes) {
  if (bytes < 1024)
    return bytes + ' B';

  if (bytes < 1024 * 1024)
    return (bytes / 1024).toFixed(1) + ' KB';

  if (bytes < 1024 * 1024 * 1024)
    return (bytes / 1024 / 1024).toFixed(1) + ' MB';

  return (bytes / 1024 / 1024 / 1024).toFixed(1) + ' GB';
}

loadFiles();
