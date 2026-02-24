declare module '@commitlint/config-nx-scopes';

async function getConfig() {
  const {
    default: {
      utils: { getProjects },
    },
  } = await import('@commitlint/config-nx-scopes');

  const projects = await getProjects();
  console.log('projects', projects);

  return {
    /*
     * Resolve and load @commitlint/config-conventional from node_modules.
     * Referenced packages must be installed
     */
    extends: ['@commitlint/config-conventional'],
    /*
     * Any rules defined here will override rules from @commitlint/config-conventional
     */
    rules: {
      'subject-case': [0, 'always', ['lower-case']],
      'scope-case': [2, 'always', ['lower-case']],
      // retrieve scope options from Nx dynamically
      'scope-enum': async (ctx: unknown) => [
        2,
        'always',
        ['repo', ...getProjects(ctx)],
      ],
      'scope-empty': [2, 'never'],
    },
  };
}

module.exports = getConfig();
