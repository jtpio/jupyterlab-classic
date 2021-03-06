import { getPythonVersion, run } from '@jupyterlab/buildutils';

export function postbump(): void {
  const newPyVersion = getPythonVersion();
  // Commit changes.
  run(`git commit -am "Release ${newPyVersion}"`);
  run(`git tag ${newPyVersion}`);
}
