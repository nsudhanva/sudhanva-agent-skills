import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import test from 'node:test';

const root = new URL('../', import.meta.url);

async function read(path) {
	return readFile(new URL(path, root), 'utf8');
}

test('plugin manifest identifies the canonical project', async () => {
	const plugin = JSON.parse(await read('plugin.json'));

	assert.equal(plugin.$schema, 'https://agent-plugins.org/schemas/1.0.0/plugin.schema.json');
	assert.equal(plugin.name, 'sudhanva-agent-skills');
	assert.match(plugin.version, /^\d+\.\d+\.\d+$/);
	assert.match(plugin.homepage, /^https:\/\/sudhanva\.me\//);
	assert.equal(plugin.repository, 'https://github.com/nsudhanva/sudhanva-agent-skills');
	assert.equal(plugin.license, 'MIT');
});

test('MCP manifest contains canonical Streamable HTTP servers', async () => {
	const manifest = JSON.parse(await read('mcp.json'));
	const servers = Object.values(manifest.mcpServers);

	assert.equal(manifest.$schema, 'https://agent-plugins.org/schemas/1.0.0/mcp.schema.json');
	assert.equal(servers.length, 2);
	for (const server of servers) {
		assert.equal(server.type, 'streamable-http');
		assert.equal(new URL(server.url).hostname, 'sudhanva.me');
	}
});

test('skill frontmatter is complete, unique, and matches its directory', async () => {
	const entries = await readdir(new URL('skills/', root), { withFileTypes: true });
	const directories = entries.filter((entry) => entry.isDirectory() && !entry.name.startsWith('.'));
	const skills = [];

	for (const directory of directories) {
		const path = `skills/${directory.name}/SKILL.md`;
		const source = await read(path);

		const match = source.match(/^---\nname: ([^\n]+)\ndescription: ([^\n]+)\n---\n\n# /);
		assert.ok(match, `${path} must have minimal frontmatter and an H1`);
		assert.equal(match[1], directory.name);
		assert.ok(match[2].length >= 40, `${directory.name} needs a useful description`);
		assert.match(source, /https:\/\/sudhanva\.me\//);
		skills.push(match[1]);
	}

	assert.equal(skills.length, 3);
	assert.equal(new Set(skills).size, skills.length);

	const readme = await read('README.md');
	for (const skill of skills) assert.match(readme, new RegExp(`\\b${skill}\\b`));
});

test('skills live only in the Agent Plugins skills/ directory', async () => {
	const entries = await readdir(root, { withFileTypes: true });
	for (const entry of entries) {
		if (!entry.isDirectory() || entry.name.startsWith('.') || entry.name === 'skills') continue;
		await assert.rejects(
			readFile(new URL(`${entry.name}/SKILL.md`, root)),
			{ code: 'ENOENT' },
			`${entry.name}/SKILL.md must move to skills/${entry.name}/SKILL.md`,
		);
	}
	await assert.rejects(readFile(new URL('SKILL.md', root)), { code: 'ENOENT' });
});
